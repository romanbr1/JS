hideTextButton.onclick= function() {
	hiddenText.style.visibility='hidden';
}

hideButton.onclick= function() {
	this.style.visibility='hidden';
}


var menuHead = document.getElementById('menuHead');
var menuItems = document.getElementById('menuItems');

menuHead.addEventListener('mouseover', function() {
	menuItems.style.display= 'inline';
});

menuHead.addEventListener('mouseout', function() {
	menuItems.style.display= 'none';
});
