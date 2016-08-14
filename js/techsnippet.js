(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./utility":2}],2:[function(require,module,exports){
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
		targetElements[i].style.opacity = localOpacity;
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


},{}]},{},[1,2]);
