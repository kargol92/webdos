function mode(output, prompt, line, argument) {
	if (argument == "") {
		output.value +=
	        "possible arguments: /f, /w, /8, /16, /24, /32\n" +
	        "type 'mode /f' to set fullscreen mode\n" +
	        "type 'mode /w' to set window mode\n" +
	        "type 'mode /8' to set font size 8\n";
	} else if (argument == "/f") {
		document.documentElement.requestFullscreen();
	} else if (argument == "/w") {
		document.exitFullscreen();
	} else if (argument == "8px" ||
			   argument == "16px" ||
			   argument == "24px" ||
			   argument == "32px") {
	    output.style.fontSize = argument;
	    prompt.style.fontSize = argument;
	    line.style.fontSize = argument;
	}
}