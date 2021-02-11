function type() {
	return "type <em>TYPE FILENAME.TXT</em> to display text file";
}

function type_(argument) {
	if (argument == "README" || argument == "README.TXT")
		return "Hello! This is WebDOS ver. 0.1. It's just a toy!\nProject site: https://github.com/karol-kiersnowski/webdos";
	else
		return "File <em>" + argument.toUpperCase() + "</em> not found";
}