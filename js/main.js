'use strict';

var _utility = require('./utility');

window.onload = function () {
	main();
};

function main() {
	var elements = document.getElementsByClassName('menu');
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", function () {
			(0, _utility.addClass)('aboutpage', 'visible');
		}, false);
	}
}
//# sourceMappingURL=main.js.map
