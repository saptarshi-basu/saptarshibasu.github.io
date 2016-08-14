'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toggleClass = toggleClass;
exports.getHeight = getHeight;
exports.changeHeight = changeHeight;
exports.changeOpacity = changeOpacity;
exports.changePadding = changePadding;
exports.hasClass = hasClass;
function toggleClass(targetElementClassName, classNameToToggle) {
	var targetElements = document.getElementsByClassName(targetElementClassName);
	for (var i = 0; i < targetElements.length; i++) {
		if (hasClass(targetElements[i], classNameToToggle)) {
			targetElements[i].className = targetElements[i].className.replace(new RegExp('(?:^|\\s)' + classNameToToggle + '(?!\\S)'), '');
		} else {
			targetElements[i].className += ' ' + classNameToToggle + ' ';
		}
	}
}

function getHeight(className) {
	var targetElements = document.getElementsByClassName(className);
	return targetElements[0].clientHeight;
}

function changeHeight(className, height) {
	var targetElements = document.getElementsByClassName(className);
	for (var i = 0; i < targetElements.length; i++) {
		targetElements[i].style.height = height + 'px';
	}
}

function changeOpacity(className, opacity) {
	var targetElements = document.getElementsByClassName(className);
	var localOpacity = opacity < 0 ? 0 : 0;
	for (var i = 0; i < targetElements.length; i++) {
		targetElements[i].style.opacity = opacity;
	}
}

function changePadding(className, padding) {
	var targetElements = document.getElementsByClassName(className);
	for (var i = 0; i < targetElements.length; i++) {
		targetElements[i].style.padding = padding;
	}
}

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
//# sourceMappingURL=utility.js.map
