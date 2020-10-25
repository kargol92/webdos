function time() {
	var date = new Date();
	var hour = addZeroBeforeTimedate(date.getHours());
	var minute = addZeroBeforeTimedate(date.getMinutes());
	var second = addZeroBeforeTimedate(date.getSeconds());

	return hour + ":" + minute + ":" + second;
}