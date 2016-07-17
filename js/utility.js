'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
function addClass(targetElementClassName, classNameToBeAdded) {
	var targetElements = document.getElementsByClassName(targetElementClassName);
	for (var i = 0; i < targetElements.length; i++) {
		targetElements[i].className += " " + classNameToBeAdded;
	}
}

function removeClass(targetElementClassName, classNameToBeRemoved) {
	var targetElements = document.getElementsByClassName(targetElementClassName);
	for (var i = 0; i < targetElements.length; i++) {
		targetElements[i].className = targetElements[i].className.replace(new RegExp('(?:^|\\s)' + classNameToBeRemoved + '(?!\\S)'), '');
	}
}
//# sourceMappingURL=utility.js.map
