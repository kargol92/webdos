var output = document.getElementById("command-output");
var prompt = document.getElementById("command-prompt");
var line = document.getElementById("command-line");

function focusCommandLine() {
	line.focus();
}

function init() {
	output.value =
		"WebDOS 0.1 https://github.com/kargol92/webdos\n" +
		"Copyleft 2020 kargol92\n";
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        output.value += "\n" + prompt.value + line.value + "\n";
        checkCommand();
        updateCommandOutputHeight();
        line.value = "";
    }
}

function checkCommand() {
	var command = line.value.toLowerCase();
    command = command.replace(/\s/g, '');

    switch(command) {
        case "cls": cls(output); break;
        case "exit": exit(); break;
        case "mode": mode(output, prompt, line, ""); break;
        case "mode/f": mode(output, prompt, line, "fullscreen"); break;
        case "mode/w": mode(output, prompt, line, "window"); break;
        case "mode/8":  mode(output, prompt, line, "8px"); break;
        case "mode/16": mode(output, prompt, line, "16px"); break;
        case "mode/24": mode(output, prompt, line, "24px"); break;
        case "mode/32": mode(output, prompt, line, "32px"); break;
        case "date": output.value += date(); break;
        case "dir": output.value += dir(); break;
        case "help": output.value += help(); break;
        case "time": output.value += time(); break;
        case "ver": output.value += ver(); break;
        default: output.value += "Illegal command: " + command + "\n";
    }
}

function updateCommandOutputHeight() {
	output.style.height = output.scrollHeight + "px";
    output.scrollTop = output.scrollHeight;
}

function addZeroBeforeTimedate(timedate)
{
	if (timedate < 10)
    	return "0" + timedate;
    return timedate;
}