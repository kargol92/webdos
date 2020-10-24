var textarea = document.getElementsByTagName("textarea")[0];
var commandPrompt = document.getElementById("command-prompt");
var commandLine = document.getElementById("command-line");

function focusCommandLine() {
	commandLine.focus();
}

function init() {
	textarea.value =
		"WebDOS 0.1 https://github.com/kargol92/webdos\n" +
		"Copyleft 2020 kargol92\n";
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        
        textarea.value += "\n" + commandPrompt.value + commandLine.value + "\n";

        checkCommand();

        updateTextAreaHeight();

        commandLine.value = "";
    }
}

function checkCommand() {
	var command = commandLine.value.toLowerCase();

    switch(command) {
        case "cls": cls(); break;
        case "date": date(); break;
        case "dir": dir(); break;
        case "exit": exit(); break;
        case "help": help(); break;
        case "mode": mode(""); break;
        case "mode fullscreen": mode("fullscreen"); break;
        case "mode window": mode("window"); break;
        case "mode 8": mode("8"); break;
        case "mode 16": mode("16"); break;
        case "mode 24": mode("24"); break;
        case "mode 32": mode("32"); break;
        case "time": time(); break;
        case "ver": ver(); break;
        default: textarea.value += "Illegal command: " + command + "\n";
    }
}

function updateTextAreaHeight() {
	textarea.style.height = textarea.scrollHeight + "px";
    textarea.scrollTop = textarea.scrollHeight;
}

function addZeroBeforeTimedate(timedate)
{
	if (timedate < 10)
    	return "0" + timedate;
    return timedate;
}