import {toggleClass, getHeight, changeHeight, changeOpacity, hasClass, changePadding} from './utility';


window.onload = function(){main();};

function main()
{
	let elements = document.getElementsByClassName('explorebutton');
	for(let i=0; i<elements.length; i++)
	{
		elements[i].addEventListener("click",
			function autoScroll(){
				window.scrollBy(0,1);
				if(window.scrollY<280)
					setTimeout(autoScroll,1);
		});
	}

	elements = document.getElementsByClassName('menucontainer');
	for(let i=0; i<elements.length; i++)
	{
		elements[i].addEventListener("click",
			function(){
				toggleClass('menucontainer','expand');
				if(hasClass(elements[0],'expand'))
				{
					document.getElementById("aboutpage").style.width = "250px";
					document.getElementById("indexpage").style.marginLeft = "250px";
					changePadding("aboutpage","20px");
				}
				else {
					document.getElementById("aboutpage").style.width = "0";
					document.getElementById("indexpage").style.marginLeft = "0";
					changePadding("aboutpage","0px");
				}
			}, false);
	}

	let jumbotronHeight = getHeight("jumbotron");
	window.addEventListener("scroll",
		function() {
			let scrollTop = window.scrollY;
			changeHeight("jumbotronbackground",jumbotronHeight-scrollTop);
			changeOpacity("explorebutton",1-(scrollTop/200));
			changeOpacity("header",1-(scrollTop/200));
			changeOpacity("subheader",1-(scrollTop/200));
			changeOpacity("link",1-(scrollTop/200));
		});
}
