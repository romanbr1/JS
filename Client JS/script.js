function printDataToListElements() {

	var elements = document.querySelectorAll('.List1>ul>li');
	for (var i = 0; i < elements.length; i++) {
		var currentElement = elements[i];
		currentElement.innerHTML = 'information   ' + (i + 1);
	}
}
function countListElements() {
	var elements = document.querySelectorAll('.List1>ul>li');
	var paragraph = document.getElementById("Count");

	paragraph.textContent = 'List contains ' + elements.length + ' elements';
}
function markExternalLinks() {
	var linkElements = document.querySelectorAll('li>a');
	for (var i = 0; i < linkElements.length; i++) {
		var currentElement = linkElements[i];
		if (currentElement.innerHTML.includes('http://')
				|| currentElement.innerHTML.includes('ftp://')) {
			currentElement.classList.add("external-red");
			// currentElement.style.color = 'red';
			// currentElement.style.backgroundColor = 'white'
		}

	}
	var x = document.getElementsByClassName("external-red");
	for (var j = 0; j < x.length; j++) {
		x[j].style.color = 'red';
		x[j].style.backgroundColor = 'white'
	}
}