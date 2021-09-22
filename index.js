var rgbToHex = function (val) {
	var hex = Number(val).toString(16);
	if (hex.length < 2) {
       hex = "0" + hex;
	}
	return hex;
};

function convertToRgb() {
	var inputRgb = document.getElementById("rgb").value;
	var output;
	if (inputRgb.length < 11) {
		output = "Incorrect or empty RGB value";
	} else if (Number(inputRgb.substr(0,3)) > 255 || Number(inputRgb.substr(4,3)) > 255 || Number(inputRgb.substr(8,3)) > 255 ) {
		output = "Values of R, G and B must be from 000 to 255";
	} else {
		var red = rgbToHex(Number(inputRgb.substr(0,3)));
		var green = rgbToHex(Number(inputRgb.substr(4,3)));
		var blue = rgbToHex(Number(inputRgb.substr(8,3)));
		output = "#" + red + green + blue;
	}
	document.getElementById("hex").innerHTML = output;	
}



