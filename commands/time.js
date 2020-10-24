function time() {
	var date = new Date();
	var hour = addZeroBeforeTimedate(date.getHours());
	var minute = addZeroBeforeTimedate(date.getMinutes());
	var second = addZeroBeforeTimedate(date.getSeconds());

	textarea.value += hour + ":" + minute + ":" + second + "\n";
}