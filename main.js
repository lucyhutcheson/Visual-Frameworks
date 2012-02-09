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
	function makeTopics() {
		var formTag = document.getElementsByTagName("form"), // formTag is an array of all form tags.
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "topics");
		for (var i=0, j=bibleTopics.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = bibleTopics[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function storeData(key) {
		localStorage.setItem("test", "hello");
		alert(localStorage.key(0));
	}
	
	//Variable defaults
	var bibleTopics = ["--Choose A Topic--", "Christian Life", "Marriage", "Family"];
	makeTopics();
	
	//Set Link & Submit Click Events
	/*var displayLink = $('displayLink');
	displayLink.addEventLister("click", getData);
	var clearLink = $('clear');
	clearLink.addEventLister("click", clearLocal);*/
	var save = $('submit');
	save.addEventLister("click", storeData);
	
})



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
