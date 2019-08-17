let piegraphdata = [];
//no API key required for IEX Market data
let IEXurl = "https://api.iextrading.com/1.0";

//function to use as axios call for IEX
let graphData = function IEXCalloutGraph(symbol, companyName, realtedQueriesArr){
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
    initCircleChart(realtedQueriesArr);
    makeRelative();
    }).catch(error => {
        console.log("Error occurred: " + error);
    });
};

//circle chart for google trends data
function initCircleChart(data){
    let chartSection = document.querySelector(".main__graph");
    if(chartSection.querySelector("#googleTrendContainer")){
        let node = chartSection.querySelector("#googleTrendContainer");
        chartSection.removeChild(node);
    }

    let googleTrendContainer = document.createElement("div");
    googleTrendContainer.id = "googleTrendContainer";
    chartSection.append(googleTrendContainer);
    var circleChart = new CanvasJS.Chart("googleTrendContainer", {
        animationEnabled: true,
        title:{
            text: "Trending Searches on Google",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            innerRadius: 80,
            indexLabelFontSize: 10,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: data
        }]
    });
    circleChart.render();
}

//initialize the GoogleMap 
function initMap(coords) {
    
    let mapSection = document.querySelector(".main__map");

    if(mapSection.querySelector("#map")){
        let node = mapSection.querySelector("#map");
        mapSection.removeChild(node);
    }
    let mapContainer = document.createElement("div");
    mapContainer.id = 'map';
    mapSection.append(mapContainer);


    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8,-187.3),
            mapTypeId: 'terrain'
        });

        for (var i = 0; i < coords.length; i++) {
            var latLng = new google.maps.LatLng(coords[i].latlong.lat, coords[i].latlong.long);
            var marker = new google.maps.Marker({
              position: latLng,
              map: map
            });
          }
  }



//global variable for data from input callout function
let inputDataArr = [];

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
    let chartSection = document.querySelector(".main__graph");

    if(chartSection.querySelector("#stockContainer")){
        let node = chartSection.querySelector("#stockContainer");
        chartSection.removeChild(node);
    }
    let stockContainer = document.createElement("div");
    stockContainer.id = "stockContainer";
    chartSection.append(stockContainer);

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

    function makeRelative(){
        let canvas = document.querySelectorAll(".canvasjs-chart-canvas");
        canvas[1].setAttribute("style", "position:relative;");
        canvas[3].setAttribute("style", "position: relative;");

        let tooltipOne =document.querySelectorAll(".canvasjs-chart-tooltip");
        tooltipOne[0].setAttribute("style", "position: relative;");
        tooltipOne[1].setAttribute("style", "position: relative;");

        let toolTipTwo = document.querySelectorAll(".canvasjs-chart-tooltip")
        toolTipTwo[0].setAttribute("style", "display: none;");
        toolTipTwo[1].setAttribute("style", "display: none;");

    }

    // event listener to watch for submit button
    window.addEventListener("click", function(){
        let body = document.querySelector(".main__graph");
        let btn = document.querySelector(".main__formSection__formGroup--submit");
        if(event.target === btn){
            piegraphdata = [];
            let searchTerm = inputBox.value.split("-");
            let url = "/";
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                "symbol": searchTerm[0],
                "name": searchTerm[1]
            }));
            let load = document.createElement("div");
                load.className = "loading";
                load.textContent = "Loading";
                body.append(load);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    piegraphdata = xhr.response;
                    piegraphdata = JSON.parse(piegraphdata);
                    body.removeChild(load);
                    console.log(piegraphdata.interest);
                    graphData(searchTerm[0], searchTerm[1], piegraphdata.related);
                    initMap(piegraphdata.interest);
                }
                
               
            };
            
        }
    });

    //grab the input box to watch for input
    let inputBox = document.querySelector(".main__formSection__formGroup-input");
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

    })


//initial call to API to get information for the options list array
IEXCalloutInput();
