const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const httpServer = http.createServer(app);
const path = require('path');

let urlencodedParser = bodyParser.urlencoded({ extended: true})


app.use(cors());
app.use(urlencodedParser);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

// get function for index.html
app.get('/', function(req, res) {
  console.log("sending html file");
  res.sendFile(__dirname + "/" + 'index.html');

})

//including google-trends-api
const googleTrends = require("google-trends-api");

/*

Input google trends info here

*/


var relatedQueriesArr = [];
function relatedQueries(relatedQueriesJSON) {
  relatedQueriesArr = [];
  var myObj = JSON.parse(relatedQueriesJSON);
  //console.log(myObj);
  var percentTotal = 0;
  for (let i=1; i<myObj.default.rankedList[0].rankedKeyword.length; i++){
    var percentTotal = percentTotal + myObj.default.rankedList[0].rankedKeyword[i].value;
  };
  for (let i=1; i<myObj.default.rankedList[0].rankedKeyword.length; i++){
    //console.log(Math.round((myObj.default.rankedList[0].rankedKeyword[i].value/percentTotal)*10000)/100);
    // console.log(myObj.default.rankedList[0].rankedKeyword[i].query);
    relatedQueriesArr.push({y:(Math.round((myObj.default.rankedList[0].rankedKeyword[i].value/percentTotal)*10000)/100)
      , label:myObj.default.rankedList[0].rankedKeyword[i].query});
  };
};

var interestByRegionArr = [];
function interestByRegionParser(interestByRegionJSON){
  interestByRegionArr = [];
  let myObj = JSON.parse(interestByRegionJSON);
  //console.log(myObj);
  for(let i = 0; i < myObj.default.geoMapData.length; i++){
    //console.log(myObj.default.geoMapData[i]);
    if(myObj.default.geoMapData[i].value[0] !== 0){
      //console.log(myObj.default.geoMapData[i]); 
      let data = {
        latlong: {
          lat: myObj.default.geoMapData[i].coordinates.lat,
          long: myObj.default.geoMapData[i].coordinates.lng
        },
        name: myObj.default.geoMapData[i].geoName,
        value: myObj.default.geoMapData[i].value[0]
      }
      interestByRegionArr.push(data);
    }
  }
  //console.log(interestByRegionArr);
}


app.post('/', function(req, res){
    
    console.log("post request to homepage: " + JSON.stringify(req.body));
    let searchTerms = req.body.name;
    searchTerms = searchTerms.split(" ");
    if(searchTerms[searchTerms.length - 1].toUpperCase() === "INC" || searchTerms[searchTerms.length - 1].toUpperCase() === "INC.") {searchTerms.pop();}
    //console.log(searchTerms);
    // code found at https://stackoverflow.com/questions/24049164/javascript-get-timestamp-of-1-month-ago
    let d = new Date();
    let today = new Date();
    let m = d.getMonth();
    d.setMonth(d.getMonth() - 1);

    // If still in same month, set date to last day of 
    // previous month
    if (d.getMonth() == m) d.setDate(0);
    d.setHours(0, 0, 0);
    d.setMilliseconds(0);


    googleTrends.interestOverTime({
      keyword: searchTerms,
      startTime: d,
      endTime: today
    
    }, function(err, results){
      if(err) console.error('there was an error!', err);
      else console.log('\n');
    });

    googleTrends.relatedQueries({
      keyword: searchTerms,
      startTime: d,
      endTime: today
    }, function(err, results){
        if(err) console.error('there was a bad apple in here...', err);
        else relatedQueries(results); 
    }).then(function(){
      googleTrends.interestByRegion({
        keyword: searchTerms,
        startTime: d,
        endTime: today,
        resolution: 'CITY'
      }, function(err, results){
        if(err) console.error('looks like there was an error: ', err);
        else {
          interestByRegionParser(results);
        }
      }).then(function(){
        let responseHeader = {};
        responseHeader.interest = interestByRegionArr;
        responseHeader.related = relatedQueriesArr;
        
        res.setHeader("Content-Type", "application/json");
        res.json(responseHeader);
      })
      
    })

   
});



// listen on port
var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
  
    console.log("Example app listenting at http://%s:%s", host, port);
  })