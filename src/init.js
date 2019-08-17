// Google Maps Javascript API Key
var googleMapsAPIKey = "AIzaSyAAzXQkyEciXgnE4cSC6lLfUVCbPaNYHUI";
// Google Maps Url
var googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=" + googleMapsAPIKey + "&callback=initMap";

//no API key required for IEX Market data
var IEXurl = "https://api.iextrading.com/1.0";

//function to use as axios call for IEX
var graphData = function IEXCalloutGraph(symbol, companyName){
    //create empty array to be used to house chart data
    var dataArr = [];
    //API call to grab information from endpoint
    axios.get(IEXurl + "/stock/market/batch?symbols=" + symbol + "&types=quote,news,chart&range=1m&last=5").then(response => {
        let dateInformation = response.data[symbol].chart;
        //loop over chart data
        for(let i = 0; i < dateInformation.length; i++){
            //convert date and closing price information to readable object for data on the graph
            let chartInfo = {
                x: new Date(dateInformation[i].date),
                y: dateInformation[i].close
            };
            dataArr.push(chartInfo);
        }
    //call function to set up graph using data from API
    initGraph(companyName, dataArr);
    // document.querySelector(".canvasjs-chart-canvas").style.position = "relative";
    // document.querySelector(".canvasjs-chart-toolbar").style.position = "relative";
    // document.querySelector(".canvasjs-chart-tooltip").style.position = "relative";
    }).catch(error => {
        console.log("Error occurred: " + error);
    });
};
//global variable for data from input callout function
var inputDataArr = [];

function IEXCalloutInput(){
    axios.get(IEXurl + "/ref-data/symbols").then(response => {
        response.data.map(function(data){
            let info = {
                symbol: data.symbol,
                name: data.name
            }
                inputDataArr.push(info);
        });
    }).catch(error => {
        console.log("There was an error: " + error);
    })
}

//function to set up the graph with canvasJS
function initGraph(companyName, data) {
  let stockContainer = document.createElement("div");
  stockContainer.id = "stockContainer";
  let chartSection = document.querySelector(".main__graph");
  chartSection.append(stockContainer);
 // document.getElementById("stockContainer").styles.height = "400px";

  var chart = new CanvasJS.Chart("stockContainer", {
      animationEnabled: true,
      title:{
          text: "Stock Price of " + companyName
      },
      axisX:{
          valueFormatString: "DD MMM",
          crosshair: {
              enabled: true,
              snapToDataPoint: true
          }
      },
      axisY: {
          title: "Closing Price (in USD)",
          includeZero: false,
          valueFormatString: "$##0.00",
          crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter: function(e) {
                  return "$" + CanvasJS.formatNumber(e.value, "##0.00");
              }
          }
      },
      data: [{
          type: "area",
          xValueFormatString: "DD MMM",
          yValueFormatString: "$##0.00",
          dataPoints: data
      }]
  });
  chart.render();
  }


// event listener to watch for submit button
window.addEventListener("click", function(){
    //event.preventDefault();
    let btn = document.querySelector(".main__formSection__formGroup--submit");
    if(event.target === btn){
        let searchTerm = inputBox.value.split("-");
        let url = "/";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            "symbol": searchTerm[0],
            "name": searchTerm[1]
        }));

        graphData(searchTerm[0], searchTerm[1]);
    }
});

//grab the input box to watch for input
var inputBox;
window.onload=function(){
  var inputBox = document.querySelector(".main__formSection__formGroup--input");
  inputBox.addEventListener("keyup", function(){
      let string = inputBox.value;
      string = string.toUpperCase();
      let displayOptions = [];
      inputDataArr.map((data) => {
          if(data.symbol.includes(string, 0)){
              displayOptions.push(data);
          }
      })
      let optionsList = document.querySelector(".main__formSection__formGroup--input--datalist");
      while(optionsList.lastChild){
          optionsList.removeChild(document.querySelector("option"));
      }
      displayOptions.map(function(item){
          if(optionsList.options.length < 10){
              let optionItem = document.createElement("option");
              optionItem.value = item.symbol + "-" + item.name;
              optionsList.append(optionItem);
          }
      })
    // var inputBox = document.querySelector(".main__formSection__formGroup--input");
  })
}


//initial call to API to get information for the options list array
IEXCalloutInput();
