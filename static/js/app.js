function buildMetadata(sample) {

	d3.json("/metadata/"+sample).then((data) => {

		console.log(data)
	
		var selector = d3.select("#sample-metadata");

		selector.html("");

		d3.select("#sample-metadata").append("table").append("tbody");
		Object.entries(data).forEach(([key, value]) => 
			d3.select("tbody").append("tr").html(`<td><b>${key}</b>: ${value}</td>`)
		);

	});


	// BONUS: Build the Gauge Chart
	// buildGauge(data.WFREQ);
}


function buildCharts(sample) {
	
	console.log(sample);

	d3.json("/samples/"+sample).then((sampleNames) => {
		 
		console.log(sampleNames);
	 
		pie_chart(sampleNames);
		//gauge_plot(sampleNames);
		scatter_plot(sampleNames);
		
	}
	);

}

function init() {
	// Grab a reference to the dropdown select element
	var selector = d3.select("#selDataset");

	// Use the list of sample names to populate the select options
	d3.json("/names").then((sampleNames) => {
		sampleNames.forEach((sample) => {
			selector
				.append("option")
				.text(sample)
				.property("value", sample);
		});

		// Use the first sample from the list to build the initial plots
		const firstSample = sampleNames[0];
		buildCharts(firstSample);
		buildMetadata(firstSample);
	});
}

function optionChanged(newSample) {
	// Fetch new data each time a new sample is selected
	buildCharts(newSample);
	buildMetadata(newSample);
}

// Initialize the dashboard
init();
