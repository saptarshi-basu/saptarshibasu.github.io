"use strict";

window.onload = function () {
	main();
};

function main() {
	var elements = document.getElementsByClassName('searchtext');
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("focus", hideText, false);
		elements[i].addEventListener("blur", showText, false);
	}
}

function hideText() {
	var elements = document.getElementsByClassName('headertext');
	for (var i = 0; i < elements.length; i++) {
		if (screen.width < 500) {
			elements[i].style.display = 'none';
		}
	}
}

function showText() {
	var elements = document.getElementsByClassName('headertext');
	for (var i = 0; i < elements.length; i++) {
		if (screen.width < 500) {
			elements[i].style.display = 'inline';
		}
	}
}
//# sourceMappingURL=explore.js.map
