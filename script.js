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
	var command = input.value.toUpperCase().trim().replace(/\s*\//, " /");
	console.log(command);

	if (command == "CLS")				cls(output);
	else if (command == "EXIT")			exit();
	else if (command == "MODE")			output.innerHTML += mode();
	else if (/MODE \/.*/.test(command))	mode_(command.substr(6), output, input);
	else if (command == "DATE")			output.innerHTML += date();
	else if (command == "DIR")			output.innerHTML += dir();
	else if (command == "HELP")			output.innerHTML += help();
	else if (command == "TIME")			output.innerHTML += time();
	else if (command == "TYPE")			output.innerHTML += type();
	else if (/TYPE \.*/.test(command))	output.innerHTML += type_(command.substr(5));
	else if (command == "VER")			output.innerHTML += ver();
	else if (command == "WEBSITE")		website();
	else if (command == "WIN")			win();
	else if (command == "WIN.BAT")		win();
	else	output.innerHTML += "Illegal command: <em>" + command + "</em>";
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