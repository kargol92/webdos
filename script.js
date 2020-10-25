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
	var command = line.value.toLowerCase().trim().replace(/\s*\//, " /");
    //console.log(command);

    if (command == "cls")
        cls(output);
    else if (command == "exit")
        exit();
    else if (command == "mode")
        output.value += mode();
    else if (/mode \/.*/.test(command))
        mode_(command.substr(6), output, prompt, line);
    else if (command == "date")
        output.value += date();
    else if (command == "dir")
        output.value += dir();
    else if (command == "help")
        output.value += help();
    else if (command == "time")
        output.value += time();
    else if (command == "ver")
        output.value += ver();
    else
        output.value += "Illegal command: " + command + ".\n";
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