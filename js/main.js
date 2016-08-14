'use strict';

var _utility = require('./utility');

window.onload = function () {
	main();
};

function main() {
	var elements = document.getElementsByClassName('explorebutton');
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", function autoScroll() {
			window.scrollBy(0, 1);
			if (window.scrollY < 280) setTimeout(autoScroll, 1);
		});
	}

	elements = document.getElementsByClassName('menucontainer');
	for (var _i = 0; _i < elements.length; _i++) {
		elements[_i].addEventListener("click", function () {
			(0, _utility.toggleClass)('menucontainer', 'expand');
			if ((0, _utility.hasClass)(elements[0], 'expand')) {
				document.getElementById("aboutpage").style.width = "250px";
				document.getElementById("indexpage").style.marginLeft = "250px";
				(0, _utility.changePadding)("aboutpage", "20px");
			} else {
				document.getElementById("aboutpage").style.width = "0";
				document.getElementById("indexpage").style.marginLeft = "0";
				(0, _utility.changePadding)("aboutpage", "0px");
			}
		}, false);
	}

	var jumbotronHeight = (0, _utility.getHeight)("jumbotron");
	window.addEventListener("scroll", function () {
		var scrollTop = window.scrollY;
		(0, _utility.changeHeight)("jumbotronbackground", jumbotronHeight - scrollTop);
		(0, _utility.changeOpacity)("explorebutton", 1 - scrollTop / 200);
		(0, _utility.changeOpacity)("header", 1 - scrollTop / 200);
		(0, _utility.changeOpacity)("subheader", 1 - scrollTop / 200);
		(0, _utility.changeOpacity)("link", 1 - scrollTop / 200);
	});
}
//# sourceMappingURL=main.js.map
