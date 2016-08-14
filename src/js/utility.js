export function toggleClass(targetElementClassName, classNameToToggle)
{
	let targetElements = document.getElementsByClassName(targetElementClassName);
	for(let i=0;i<targetElements.length;i++)
	{
		if(hasClass(targetElements[i],classNameToToggle))
		{
			targetElements[i].className = targetElements[i].className.replace(new RegExp('(?:^|\\s)'+classNameToToggle+'(?!\\S)') ,'');
		}
		else {
			targetElements[i].className+= ' '+classNameToToggle+' ';
		}
	}
}

export function getHeight(className)
{
	let targetElements = document.getElementsByClassName(className);
	return targetElements[0].clientHeight;
}

export function changeHeight(className, height) {
  let targetElements = document.getElementsByClassName(className);
  for(let i=0; i<targetElements.length; i++) {
    targetElements[i].style.height =  height+'px';
  }
}

export function changeOpacity(className, opacity) {
	let targetElements = document.getElementsByClassName(className);
	let localOpacity = opacity<0?0:0;
  for(let i=0; i<targetElements.length; i++) {
    targetElements[i].style.opacity =  localOpacity;
  }
}

export function changePadding(className, padding) {
	let targetElements = document.getElementsByClassName(className);
  for(let i=0; i<targetElements.length; i++) {
    targetElements[i].style.padding =  padding;
  }
}

export function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
