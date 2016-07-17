import {addClass, removeClass} from './utility';


window.onload = function(){main();};

function main()
{
	var elements = document.getElementsByClassName('menu');
	for(var i=0; i<elements.length; i++)
	{
		elements[i].addEventListener("click", function(){addClass('aboutpage','visible')}, false);
	}

	var elements = document.getElementsByClassName('close');
	for(var i=0; i<elements.length; i++)
	{
		elements[i].addEventListener("click", function(){removeClass('aboutpage','visible')}, false);
	}
}
