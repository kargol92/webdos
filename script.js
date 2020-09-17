var textarea = document.getElementsByTagName("textarea")[0];
var path = document.getElementById("path");
var prompt = document.getElementById("prompt");

function focusCommandPrompt() {
	prompt.focus();
}

function init() {

}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        
        textarea.value += "\n" + path.value + prompt.value + "\n";


        if (prompt.value == "cls") {
        	textarea.value = null;
        	textarea.style.height = "0px";
        }
        else if (prompt.value == "exit") {
        	window.close();
        }
        else if (prompt.value == "ver") {
        	textarea.value += "WebDOS ver. 0.1\n";
        }
        else if (prompt.value == "date") {
        	var date = new Date();
        	textarea.value +=
        		date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "\n";
        }
        else if (prompt.value == "time") {
        	var date = new Date();
        	textarea.value +=
        		date.getHours() + ":" +
        		date.getMinutes() + ":" +
        		date.getSeconds() + "\n";
        }
        else if (prompt.value == "help") {
        	var date = new Date();
        	textarea.value +=
        		"date	> get current date\n" +
        		"exit	> quit this site\n" +
        		"help	> show help\n" +
        		"time	> get current time\n" +
        		"ver	> display version of system\n";
        }
        else {
        	textarea.value += "Illegal command: " + prompt.value + "\n";
        }

        textarea.style.height = textarea.scrollHeight + "px";
        textarea.scrollTop = textarea.scrollHeight;

        prompt.value = "";
    }
}

function updateTextAreaHeight() {

}

function callCommand(command) {

}