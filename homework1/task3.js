let password;
let login;
login = "Admin";
password = "TheMaster"

switch (login) {
case "Admin": {
	switch (password) {
	case "TheMaster": {
		console.log("Welcome");
		break;
	}
	case "Other": {
		console.log("wrong password");
		break;
	}
	default: {
		console.log("Cenceled");
		break;
	}
	}
	break;
}
case "Other": {
	console.log("I don't know you");
	break;
}
default: {
	console.log("Cenceled");
	break;
}
}