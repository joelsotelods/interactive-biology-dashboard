

// Part 1
// PIE CHART

function init() {
    var data = [{

        values: [19, 26, 55, 88],
        labels: ["x1", "x2", "x3", "x4"],
        type: "pie"
    }];

    // var layout = {
    //     height: 600,
    //     width: 800
    // };

    var layout = {
        title: "'Bar' Chart",
      };

    Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
}

function getData(datos) {

    var data = [];

    switch (datos) {
        case "dataset1":
            data = [1, 2, 3, 39];
            break;
        case "dataset2":
            data = [10, 20, 30, 37];
            break;
        case "dataset3":
            data = [100, 200, 300, 23];
            break;
        default:
            data = [30, 30, 30, 11];
    }
    updatePlotly(data);
}

init();



// Part 2
// GAUGE

function init2() {

    // Enter a speed between 0 and 180
    var level = 175;

    // Trig to calc meter point
    var degrees = 180 - level,
        radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Path: may have to change to create a better triangle
    var mainPath = "M -.0 -0.025 L .0 0.025 L ",
        pathX = String(x),
        space = " ",
        pathY = String(y),
        pathEnd = " Z";
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [{ 
        type: "scatter",
        x: [0], y:[0],
        marker: {size: 28, color:"850000"},
        showlegend: false,
        name: "speed",
        text: level,
        hoverinfo: "text+name"},
        { values: [50/6, 50/6, 50/6, 50/6, 50/6, 50/6, 50],
        rotation: 90,
        text: ["TOO FAST!", "Pretty Fast", "Fast", "Average",
                    "Slow", "Super Slow", ""],
        textinfo: "text",
        textposition:"inside",      
        marker: {colors:["rgba(14, 127, 0, .5)", "rgba(110, 154, 22, .5)",
                                "rgba(170, 202, 42, .5)", "rgba(202, 209, 95, .5)",
                                "rgba(210, 206, 145, .5)", "rgba(232, 226, 202, .5)",
                                "rgba(255, 255, 255, 0)"]},
        labels: ["151-180", "121-150", "91-120", "61-90", "31-60", "0-30", ""],
        hoverinfo: "label",
        hole: .5,
        type: "pie",
        showlegend: false
    }];

    var layout = {
        shapes:[{
            type: "path",
            path: path,
            fillcolor: "850000",
            line: {
                color: "850000"
            }
            }],
        title: "<b>Gauge</b> <br> Speed 0-100",
        // height: 1000,
        // width: 1000,
        xaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]},
        yaxis: {zeroline:false, showticklabels:false,
                    showgrid: false, range: [-1, 1]}
    };

    Plotly.newPlot("myDiv", data, layout, {showSendToCloud:true});

}

init2();


// Part 3
// Scatter

function init3() {
    var data = {
        long_jump: [
          249.75,
          282.875,
          289,
          294.5,
          299.25,
          281.5,
          293.125,
          304.75,
          300.75,
          317.3125,
          308,
          298,
          308.25,
          319.75,
          317.75,
          350.5,
          324.5,
          328.5,
          336.25,
          336.25
        ],
        high_jump: [
          71.25,
          74.8,
          71,
          75,
          76,
          76.25,
          78,
          76.375,
          77.625,
          79.9375,
          78,
          80.32,
          83.25,
          85,
          85.75,
          88.25,
          87.75,
          88.5,
          92.75,
          92.5
        ],
        discus_throw: [
          1147.5,
          1418.9,
          1546.5,
          1610,
          1780,
          1759.25,
          1817.125,
          1863,
          1948.875,
          1987.375,
          2078,
          2166.85,
          2218.5,
          2330,
          2401.5,
          2550.5,
          2535,
          2657.4,
          2624,
          2622
        ],
        year: [
          -4,
          0,
          4,
          8,
          12,
          20,
          24,
          28,
          32,
          36,
          48,
          52,
          56,
          60,
          64,
          68,
          72,
          76,
          80,
          84
        ]
      };
      

    // Create the Traces
    var trace1 = {
        x: data.year,
        y: data.high_jump,
        mode: "markers",
        type: "scatter",
        name: "high jump",
        marker: {
        color: "#2077b4",
        symbol: "hexagram"
        }
    };
    
    var trace2 = {
        x: data.year,
        y: data.discus_throw,
        mode: "markers",
        type: "scatter",
        name: "discus throw",
        marker: {
        color: "orange",
        symbol: "diamond-x"
        }
    };
    
    var trace3 = {
        x: data.year,
        y: data.long_jump,
        mode: "markers",
        type: "scatter",
        name: "long jump",
        marker: {
        color: "rgba(156, 165, 196, 1.0)",
        symbol: "cross"
        }
    };
    
    // Create the data array for the plot
    var data = [trace1, trace2, trace3];
    
    // Define the plot layout
    var layout = {
        title: "xasd",
        xaxis: { title: "asdwdwd" },
        yaxis: { title: "awda wad awd" }
    };
    
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bubble", data, layout);
    


}


init3();