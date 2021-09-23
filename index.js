var validateInput = function (input) {
	var inputPattern = /^[000-255]{3},[000-255]{3},[000-255]{3}$/;
	return inputPattern.test(input);
};

var rgbToHex = function (val) {
	var hex = Number(val).toString(16);
	if (hex.length < 2) {
    	hex = "0" + hex;
	}
	return hex;
};

function convertToRgb() {
	var inputRgb = document.getElementById("rgb").value;
	var result = validateInput(inputRgb);
	var output;
	if (result == false || inputRgb == "") {
		output = "Incorrect or empty RGB value";
	} else {
		var red = rgbToHex(Number(inputRgb.substr(0,3)));
		var green = rgbToHex(Number(inputRgb.substr(4,3)));
		var blue = rgbToHex(Number(inputRgb.substr(8,3)));
		output = "#" + red + green + blue;
	}
	document.getElementById("hex").innerHTML = output;
}
