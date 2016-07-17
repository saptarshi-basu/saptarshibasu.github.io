(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	var elements = document.getElementsByClassName('close');
	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener("click", function () {
			(0, _utility.removeClass)('aboutpage', 'visible');
		}, false);
	}
}


},{"./utility":2}],2:[function(require,module,exports){
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


},{}]},{},[1,2]);
