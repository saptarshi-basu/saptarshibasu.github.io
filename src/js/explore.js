window.onload = function(){main()};

function main()
{
	let elements = document.getElementsByClassName('searchtext');
	for(let i=0; i<elements.length; i++)
	{
		elements[i].addEventListener("focus", hideText, false);
		elements[i].addEventListener("blur", showText, false);
	}

}

function hideText()
{
	let elements = document.getElementsByClassName('headertext');
	for(let i=0; i<elements.length; i++)
	{
		if( ( screen.width < 500) )
		{
			elements[i].style.display = 'none';
		}
	}
}

function showText()
{
	let elements = document.getElementsByClassName('headertext');
	for(let i=0; i<elements.length; i++)
	{
		if( ( screen.width < 500) )
		{
			elements[i].style.display = 'inline';
		}
	}
}
