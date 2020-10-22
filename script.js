var textarea = document.getElementsByTagName("textarea")[0];
var path = document.getElementById("path");
var prompt = document.getElementById("prompt");

function focusCommandPrompt() {
	prompt.focus();
}

function init() {
	textarea.value =
		"WebDOS 0.1\thttps://github.com/kargol92/webdos\n" +
		"Copyleft 2020 kargol92\n";
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
        
        textarea.value += "\n" + path.value + prompt.value + "\n";

        checkCommand();

        updateTextAreaHeight();

        prompt.value = "";
    }
}

function checkCommand() {
	var command = prompt.value.toLowerCase();
	if (command == "cls") {
    	textarea.value = null;
    	textarea.style.height = "0px";
    } else if (command == "dir") {
    	textarea.value +=
    		"Directory of C:\\\n" +
    		".		<DIR>		01/01/2020 12:00\n" +
    		"..		<DIR>		01/01/2020 12:00\n" +
    		"DOS		<DIR>		01/01/2020 12:00\n" +
    		"AUTOEXEC BAT		  1,693	01/01/2020 12:00\n" +
    		"COMMAND  COM		 66,245	01/01/2020 12:00\n" +
    		"CONFIG   SYS		 46,485	01/01/2020 12:00\n" +
    		"MSCONFIG SYS		    740	01/01/2020 12:00\n" +
    		"	4 File(s)	116,063 Bytes.\n" +
    		"	3 Dir(s)    262,111,744 Bytes free.\n";
    } else if (command == "exit") {
    	window.close();
    } else if (command == "ver") {
    	textarea.value += "WebDOS ver. 0.1\n";
    } else if (command == "date") {
    	var date = new Date();
    	var month = addZeroBeforeTimedate(date.getMonth() + 1);
    	var day = addZeroBeforeTimedate(date.getDate());
    	var year = date.getFullYear();

    	textarea.value += month + "/" + day + "/" + year + "\n";
    } else if (command == "time") {
    	var date = new Date();
    	var hour = addZeroBeforeTimedate(date.getHours());
    	var minute = addZeroBeforeTimedate(date.getMinutes());
    	var second = addZeroBeforeTimedate(date.getSeconds());

    	textarea.value += hour + ":" + minute + ":" + second + "\n";
    } else if (command == "help") {
    	var date = new Date();
    	textarea.value +=
    		"cls	> clear screen\n" +
    		"date	> get current date\n" +
    		"dir	> list the current directory\n" +
    		"exit	> exit this command prompt\n" +
    		"help	> show help\n" +
    		"mode	> set window size and font size\n" +
    		"time	> get current time\n" +
    		"ver	> display version of system\n";
    } else if (command == "mode") {
        textarea.value +=
            "possible arguments: fullscreen, window, 8, 16, 24, 32\n" +
            "type 'mode fullscreen' to set fullscreen mode\n" +
            "type 'mode 8' to set font size 8\n";
    } else if (command == "mode fullscreen") {
        document.documentElement.requestFullscreen();
    } else if (command == "mode window") {
        document.exitFullscreen();
    } else if (command == "mode 8") {
    	var fontSize = "8px";
    	textarea.style.fontSize = fontSize;
    	path.style.fontSize = fontSize;
    	prompt.style.fontSize = fontSize;
    } else if (command == "mode 16") {
    	var fontSize = "16px";
    	textarea.style.fontSize = fontSize;
    	path.style.fontSize = fontSize;
    	prompt.style.fontSize = fontSize;
    } else if (command == "mode 24") {
    	var fontSize = "24px";
    	textarea.style.fontSize = fontSize;
    	path.style.fontSize = fontSize;
    	prompt.style.fontSize = fontSize;
    } else if (command == "mode 32") {
    	var fontSize = "32px";
    	textarea.style.fontSize = fontSize;
    	path.style.fontSize = fontSize;
    	prompt.style.fontSize = fontSize;
    } else
    	textarea.value += "Illegal command: " + command + "\n";
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