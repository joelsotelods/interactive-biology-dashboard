function buildMetadata(sample) {

	d3.json("/metadata/"+sample).then( (data) => {

		console.log("metadata x:");
		console.log(data);

		var selector = d3.select("#sample-metadata");
		selector.html("");

		d3.select("#sample-metadata").append("table").append("tbody");
		Object.entries(data).forEach(([key, value]) => 
			d3.select("tbody").append("tr").html(`<td><b>${key}</b>: ${value}</td>`)
		);

	});
}


function buildCharts(sample) {
	
	console.log("Sample:");
	console.log(sample);

	d3.json("/samples/"+sample).then( (all_samples) => {
		
		console.log("all_samples:");
		console.log(all_samples);
	 
		pie_chart(all_samples);
		scatter_plot(all_samples);
		
	}
	);

	// BONUS: Build the Gauge Chart
	d3.json("/metadata/"+sample).then( (data) => {

		console.log("metadata:");
		console.log(data);
	
		gauge_plot(data.WFREQ);

	});

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
