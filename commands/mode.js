function mode() {
	return 	"possible arguments: <em>/f</em>, <em>/w</em>, from <em>/8</em> to <em>/32</em>\n" +
	        "type <em>mode /f</em> to set fullscreen mode\n" +
	        "type <em>mode /w</em> to set window mode\n" +
	        "type <em>mode /8</em> to set font size 8\n" +
	        "type <em>mode /16</em> to set font size 16\n" +
	        "type <em>mode /32</em> to set font size 32";
}

function mode_(argument, output, input) {
	if (argument == "f")
		document.documentElement.requestFullscreen();
	else if (argument == "w")
		document.exitFullscreen();
	else if (argument >= 8 && argument <= 32) {
		document.body.style.fontSize = argument + "px";
	    input.style.fontSize = argument + "px";
	}
	else
		output.innerHTML += "Illegal switch: /" + argument;
}