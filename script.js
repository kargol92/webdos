var output = document.getElementById("command-output");
var prompt = document.getElementById("command-prompt");
var input = document.getElementById("command-input");

function focusCommandInput() {
	input.focus();
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        output.innerHTML += prompt.innerHTML + input.value + "\n";
        checkCommand();
        output.innerHTML += "\n\n";
        updateOutputHeight();
        input.value = null;
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
        mode_(command.substr(6), output, input);
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
        output.innerHTML += "Illegal command: " + command;
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