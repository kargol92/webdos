function mode() {
	return 	"possible arguments: /f, /w, from /8 to /32\n" +
	        "type 'mode /f' to set fullscreen mode\n" +
	        "type 'mode /w' to set window mode\n" +
	        "type 'mode /8' to set font size 8\n" +
	        "type 'mode /16' to set font size 16\n" +
	        "type 'mode /32' to set font size 32\n";
}

function mode_(argument, output, prompt, input) {
	if (argument == "f")
		document.documentElement.requestFullscreen();
	else if (argument == "w")
		document.exitFullscreen();
	else if (argument >= 8 && argument <= 32) {
	    output.style.fontSize = argument + "px";
	    prompt.style.fontSize = argument + "px";
	    input.style.fontSize = argument + "px";
	}
	else
		output.value += "Illegal switch: /" + argument + ".\n";
}