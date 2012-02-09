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
	
	//Find the value of the selected radio button.
	function getSelectedRadio(){
		var radios = document.forms[0].audience;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked) {
				audienceValue = radios[i].value;
			}
		}
		return audienceValue;
	}

	//Save data into local storage.
	function storeData() {
		var id = Math.floor(Math.random()*10000001);
		// Gather up all form values and labels.
		var item = {};
			item.name = ["Lesson Name:", $('lesson-name').value];
			item.author = ["Author:", $('author').value];
			item.date = ["Date:", $('date').value];
			item.topic = ["Topics:", $('topics').value];
			item.book = ["Book:", $('book').value];
			item.audience = ["Audience:", audienceValue];
			item.length = ["Lesson Length:", $('length').value];
			item.text = ["Lesson:", $('lesson-text').value];
			
		//Save data into local storage
		localStorage.setItem(id, JSON.stringify(item));
		
		alert("Lesson Saved!");
	}
	
	//Clear all data
	function clearLocal() {
		if(localStorage.length === 0) {
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All information deleted.");
			window.location.reload();
			return false;
		}
	}
	//Variable defaults
	var bibleTopics = ["--Choose A Topic--", "Christian Life", "Marriage", "Family"];
	makeTopics();
	
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	
})



function getData() {
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
