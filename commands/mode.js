function mode(argument) {
	if (argument == "") {
		textarea.value +=
	        "possible arguments: fullscreen, window, 8, 16, 24, 32\n" +
	        "type 'mode fullscreen' to set fullscreen mode\n" +
	        "type 'mode 8' to set font size 8\n";
	} else if (argument == "fullscreen") {
		document.documentElement.requestFullscreen();
    } else if (argument == "window") {
        document.exitFullscreen();
    } else if (argument == "8") {
    	var fontSize = "8px";
    	textarea.style.fontSize = fontSize;
    	commandPrompt.style.fontSize = fontSize;
    	commandLine.style.fontSize = fontSize;
    } else if (argument == "16") {
    	var fontSize = "16px";
    	textarea.style.fontSize = fontSize;
    	commandPrompt.style.fontSize = fontSize;
    	commandLine.style.fontSize = fontSize;
    } else if (argument == "24") {
    	var fontSize = "24px";
    	textarea.style.fontSize = fontSize;
    	commandPrompt.style.fontSize = fontSize;
    	commandLine.style.fontSize = fontSize;
    } else if (argument == "32") {
    	var fontSize = "32px";
    	textarea.style.fontSize = fontSize;
    	commandPrompt.style.fontSize = fontSize;
    	commandLine.style.fontSize = fontSize;
    } 
}