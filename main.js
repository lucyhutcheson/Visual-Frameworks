/**
 * Project 2 Deliverable
 * @author Lucy Hutcheson
 * Date: 2012-02-09
 * Created for:  Visual Frameworks 1202
 */

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {
	//getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//Create select field element and populate with options.
	function makeCats() {
		var formTag = document.getElementsByTagName("form"), // formTag is an array of all form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");	
	}
	
	//Variable defaults
	var contactGroups = ["--Choose A Group", "Friends", "Family", "Work"];
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventLister("click", getData);
	var clearLink = $('clear');
	clearLink.addEventLister("click", clearLocal);
	var save = $('submit');
	save.addEventLister("click", storeData);
	
})


function storeItems(id) {
	var itemName = document.getElementById('itemName').value;
	var itemQty = document.getElementById('itemQty').value;
	localStorage.setItem('appItemName', itemName);
	localStorage.setItem('appItemQty', itemQty);
}

function getItems() {
	if (localStorage.getItem('appItemName')) {
		var itemName = localStorage.getItem('appItemName');
		var itemQty = localStorage.getItem('appItemQty');
		var glist = document.getElementById('glist');
		while (glist.firstChild)
			glist.removeChild(glist.firstChild);
		var newUl = document.createElement('ul');
		var newLis = document.createElement('li');
		newUl.appendChild(newLis);
		var liTxt = document.createTextNode(itemname + " (" + itemQty + "qty)");
		newLis.appendChild(liTxt);
		glist.appendChild(newUl);
	} else {
			
	}
	
}
