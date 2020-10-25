var output = document.getElementById("command-output");
var prompt = document.getElementById("command-prompt");
var input = document.getElementById("command-input");

function focusCommandInput() {
	input.focus();
}

function init() {
	output.value =
		"WebDOS 0.1 https://github.com/kargol92/webdos\n" +
		"Copyleft 2020 kargol92\n";
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        output.value += "\n" + prompt.value + input.value + "\n";
        checkCommand();
        updateOutputHeight();
        input.value = "";
    }
}

function checkCommand() {
	var command = input.value.toLowerCase().trim().replace(/\s*\//, " /");
    //console.log(command);

    if (command == "cls")
        cls(output);
    else if (command == "exit")
        exit();
    else if (command == "mode")
        output.value += mode();
    else if (/mode \/.*/.test(command))
        mode_(command.substr(6), output, prompt, input);
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

function updateOutputHeight() {
	output.style.height = output.scrollHeight + "px";
    output.scrollTop = output.scrollHeight;
}

function addZeroBeforeTimedate(timedate)
{
	if (timedate < 10)
    	return "0" + timedate;
    return timedate;
}