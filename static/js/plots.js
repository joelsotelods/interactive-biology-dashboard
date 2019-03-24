
// Part 1
// PIE CHART

function pie_chart(sample_data) {
    
    //clean html to make sure everything gets rewriten well
    var pie_selector = d3.select("#pie_container");
    pie_selector.html("");
    d3.select('#pie_container').html('<div id="pie"></div>');


    var data = [{
        values: sample_data.sample_values.slice(0, 10),
        labels: sample_data.otu_ids.slice(0, 10),
        hovertext: sample_data.otu_labels.slice(0, 10),
        type: "pie"
    }];

    var layout = {
        title: "<b>Pie Chart</b> <br> sup bru!",
        // height: 400,
        //  width: 900
    };

    Plotly.plot("pie", data, layout);
}



// Part 3
// Scatter



function scatter_plot(sample_data) {

    //clean html to make sure everything gets rewriten well
    var bubble_selector = d3.select("#bubble_container");
    bubble_selector.html("");
    d3.select('#bubble_container').html('<div id="bubble"></div>');

    // Create the Traces
    var trace1 = {
        x: sample_data.otu_ids,
        y: sample_data.sample_values,
        text: sample_data.otu_labels,
        mode: "markers",
        type: "scatter",
        name: "high jump",
        marker: {
            size: sample_data.sample_values,
            color: sample_data.otu_ids,
            showscale: true
        }
    };

    // Create the data array for the plot
    var data = [trace1];

    var layout = {
        title: "<b>Bubble Plot</b> <br> sup bru!",
        xaxis: { title: "otu_ids" },
        yaxis: { title: "sample_values" },
        showlegend: false,
        height: 600,
        // width: 900
    };

    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bubble", data, layout);

}



// Part 2
// GAUGE

function gauge_plot(WFREQ_value) {

    
    //clean html to make sure everything gets rewriten well
    var gauge_selector = d3.select("#gauge_container");
    gauge_selector.html("");
    d3.select('#gauge_container').html('<div id="gauge"></div>');


    var level = WFREQ_value;

    // Trig to calc meter point
    var degrees = 180 - (level*22.5) +10, radius = .5;
    var radians = degrees * Math.PI / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    // Path: may have to change to create a better triangle
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);

    var data = [
      {
        type: 'scatter',
        x: [0],
        y:[0],
        marker: {
          size: 25,
          color:'850000'
        },
        showlegend: false,
        name: 'speed',
        text: level,
        hoverinfo: 'text+name'
      },
      {
        values: [50/8, 50/8, 50/8, 50/8, 50/8, 50/8, 50/8, 50/8, 50],
        rotation: 90,
        text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4','2-3','1-2'],
        textinfo: 'text',
        textposition:'inside',
        marker: {
          colors:
          [
            'rgba(14, 127, 0, .5)',
            'rgba(80, 114, 2, .5)',
            'rgba(100, 134, 12, .5)',
            'rgba(110, 154, 22, .5)',
            'rgba(170, 202, 42, .5)',
            'rgba(202, 209, 95, .5)',
            'rgba(210, 206, 145, .5)',
            'rgba(232, 226, 202, .5)',
            'rgba(255, 255, 255, 0)'
          ]
        },
        labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4','2-3','1-2'],
        hoverinfo: 'label',
        hole: .5,
        type: 'pie',
        showlegend: false
      }
    ];

    var layout = {
      shapes:[{
          type: 'path',
          path: path,
          fillcolor: '850000',
          line: {
            color: '850000'
          }
        }],
      title: '',
      title: "<b>Gauge Chart</b> <br> Belly Botton Washing Frequency",
      height: 400,
      width: 400,
      xaxis: {
        zeroline:false,
        showticklabels:false,
        showgrid: false,
        range: [-1, 1]
      },
      yaxis: {
        zeroline:false,
        showticklabels:false,
        showgrid: false,
        title: 'Scrubs per Week',
        range: [-1, 1]
      }
    };

    Plotly.newPlot('gauge', data, layout);

}