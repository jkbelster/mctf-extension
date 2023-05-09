// Script that replaces the text of the courses in navigation with the module title

// HTML id and class attribute to identify the navigation lists
const MAIN_NAV_ID = 'dropdownmain-navigation0';
const SIDE_NAV_CLASS = 'type_course depth_3 contains_branch';

// Fix main navigation
if (document.getElementById(MAIN_NAV_ID) != null)
{
  var mainNavigationList = document.getElementById(MAIN_NAV_ID);
  var mainNavigationElements = mainNavigationList.getElementsByTagName('li');

  for (var i = 0; i < mainNavigationElements.length; i++)
  {
    var anchorTag = mainNavigationElements[i].getElementsByTagName('a')[0];
    if (anchorTag.title)
    {
      anchorTag.innerHTML = anchorTag.title;
    }
  }
}

// Fix side navigation
if (document.getElementsByClassName(SIDE_NAV_CLASS) != null)
{
  var sideNavigationElements = document.getElementsByClassName(SIDE_NAV_CLASS);

  for (var j = 0; j < sideNavigationElements.length; j++)
  {
    var paragraphTag = sideNavigationElements[j].getElementsByTagName('p')[0];
    var anchorTag = paragraphTag.getElementsByTagName('a')[0];
    if (anchorTag.title)
    {
      anchorTag.innerHTML = anchorTag.title;
    }
  }
}
