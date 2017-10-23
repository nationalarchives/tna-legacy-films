// JavaScript Document

// call addEvent to format submenu links
addEvent (window, "load", formatfilmlinks)

// attach onload event without overwriting any pre-existing events (ie the TNA main menu)
function addEvent(obj, evType, fn) {
	if (obj.addEventListener) { obj.addEventListener (evType, fn, true); return true;	}
	else if (obj.attachEvent) { var r = obj.attachEvent ("on"+evType, fn); return r; } 
	else return false;
	}
	
// format films submenu links
function formatfilmlinks() {
	// quit for old browsers
	if (! document.getElementById) return;
	// get the films submenu
	submenu = document.getElementById("filmssubnav");
	// quit if submenu not found
	if (! submenu) return;
	// loop through each node in the submenu
	for (i = 0; i < submenu.childNodes.length; i ++) {
		thisNode = submenu.childNodes[i];
		// if this is a link node and it matches our current location, attach the highlighted class
		if (thisNode.nodeType == 1 && thisNode == location.href.toLowerCase()) thisNode.className += " highlighted";
		}
	}