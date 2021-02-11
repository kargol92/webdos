function mode() {
	return 	"possible arguments: <em>/F</em>, <em>/W</em>, from <em>/8</em> to <em>/32</em>\n" +
	        "type <em>MODE /F</em> to set fullscreen mode\n" +
	        "type <em>MODE /W</em> to set window mode\n" +
	        "type <em>MODE /8</em> to set font size 8\n" +
	        "type <em>MODE /16</em> to set font size 16\n" +
	        "type <em>MODE /32</em> to set font size 32";
}

function mode_(argument, output) {
	if (argument == "F")
		document.documentElement.requestFullscreen();
	else if (argument == "W")
		document.exitFullscreen();
	else if (argument >= 8 && argument <= 32) {
		document.body.style.fontSize = argument + "px";
	    input.style.fontSize = argument + "px";
	}
	else
		output.innerHTML += "Illegal switch: <em>/" + argument + "</em>";
}