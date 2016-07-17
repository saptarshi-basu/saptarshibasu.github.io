export function addClass(targetElementClassName, classNameToBeAdded)
{
	var targetElements = document.getElementsByClassName(targetElementClassName);
	for(var i=0;i<targetElements.length;i++)
	{
		targetElements[i].className += " "+classNameToBeAdded;
	}
}

export function removeClass(targetElementClassName, classNameToBeRemoved)
{
	var targetElements = document.getElementsByClassName(targetElementClassName);
	for(var i=0;i<targetElements.length;i++)
	{
		targetElements[i].className = targetElements[i].className.replace(new RegExp('(?:^|\\s)'+classNameToBeRemoved+'(?!\\S)') ,'');
	}
}