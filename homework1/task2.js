let password;
let login;
login = "Admin";
password = "TheMaster"
if (login == "Admin") {
	if (password == "TheMaster") {
		console.log("Welcome");
	} else if (login == "Other") {
		console.log("wrong password");
	} else {
		console.log("Cenceled");
	}

} else if (login == "Other") {
	console.log("I don't know you");
} else {
	console.log("Cenceled");
}