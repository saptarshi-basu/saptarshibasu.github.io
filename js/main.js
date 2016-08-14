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

	/*let jumbotronHeight = getHeight("jumbotron");
 window.addEventListener("scroll",
 	function() {
 		let scrollTop = window.scrollY;
 		let now = Date.now;
 		let previous=0;
 		if(previous==0 ||now - previous >= 5000)
 		{
 			console.log(now - previous);
 			previous=Date.now;
 			if(jumbotronHeight-scrollTop>=0)
 			{
 				changeHeight("jumbotronbackground",jumbotronHeight-scrollTop);
 			}
 		}
 	});*/
}
//# sourceMappingURL=main.js.map
