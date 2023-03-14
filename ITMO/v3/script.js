var exp = "Math.sin(x)";
	
	// Generate values
	var xValues = [];
	var yValues = [];
	for (var x = 0; x <= 10; x += 0.1) {
	  xValues.push(x);
	  yValues.push(eval(exp));
	}
	
	// Display using Plotly
	var data = [{x:xValues, y:yValues, mode:"lines"}];
	var layout = {title: "y = " + exp};
	Plotly.newPlot("myPlot", data, layout);