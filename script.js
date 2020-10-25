var output = document.getElementById("command-output");
var prompt = document.getElementById("command-prompt");
var input = document.getElementById("command-input");

function focusCommandInput() {
	input.focus();
}

function init() {
	output.innerHTML =
		"WebDOS 0.1 https://github.com/kargol92/webdos\n" +
		"Copyleft 2020 kargol92\n\n";
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        output.innerHTML += prompt.value + input.value + "\n";
        checkCommand();
        updateOutputHeight();
        input.value = "";
    }
}

function checkCommand() {
	var command = input.value.toLowerCase().trim().replace(/\s*\//, " /");

    if (command == "cls")
        cls(output);
    else if (command == "exit")
        exit();
    else if (command == "mode")
        output.innerHTML += mode();
    else if (/mode \/.*/.test(command))
        mode_(command.substr(6), output, prompt, input);
    else if (command == "date")
        output.innerHTML += date();
    else if (command == "dir")
        output.innerHTML += dir();
    else if (command == "help")
        output.innerHTML += help();
    else if (command == "time")
        output.innerHTML += time();
    else if (command == "ver")
        output.innerHTML += ver();
    else
        output.innerHTML += "Illegal command: " + command + ".\n\n";
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