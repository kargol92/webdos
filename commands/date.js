function date() {
	var date = new Date();
	var month = addZeroBeforeTimedate(date.getMonth() + 1);
	var day = addZeroBeforeTimedate(date.getDate());
	var year = date.getFullYear();

	return month + "/" + day + "/" + year;
}