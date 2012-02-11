/**
 * Project 3 Deliverable
 * @author Lucy Hutcheson
 * Date: 2012-02-16
 * Created for:  Visual Frameworks 1202
 */

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){
	//getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	//Variable defaults
	var bibleTopics = ["--Choose A Topic--", "Christian Life", "Marriage", "Family"],
		audienceValue;
	makeTopics();

	//Create select field element and populate with options.
	function makeTopics(){
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
			if(radios[i].checked){
				audienceValue = radios[i].value;
			}
		}
	}
	
	function setMessage(pclass, text){
		var newNode = document.createElement("p");
		newNode.setAttribute("class", pclass);
		newNode.appendChild(document.createTextNode(text));
		var messageDiv = document.getElementById('message');
		messageDiv.appendChild(newNode);
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('lessonForm').style.display = "none";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "block";
				document.getElementById("pageTitle").innerHTML="Submitted Bible Study Lessons";
				break;
			case "off":
				$('lessonForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}

	function validateForm() {
		var getEmail = document.forms[0]["email"].value;
		var re = /^\w+([\.-]?]\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!(re.exec(getEmail))){
			error = "Please enter a valid email address.\n";
		}
		if (error) alert(error);
	}

	//Save data into local storage.
	function storeData(){
		var id = Math.floor(Math.random()*10000001);
		// Gather up all form values and labels.
		getSelectedRadio();
		var item = {};
			item.name = ["Lesson Name:", $('lesson-name').value];
			item.author = ["Author:", $('author').value];
			item.date = ["Date:", $('date').value];
			item.topic = ["Topics:", $('topics').value];
			item.book = ["Book:", $('book').value];
			item.audience = ["Audience:", audienceValue];
			item.length = ["Lesson Length:", $('length').value];
			item.lesson = ["Lesson Text:", $('lesson-text').value];
		//Save data into local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Bible Study Lesson successfully saved.");
	}

	function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			setMessage("error", "There are no lessons to display.");
			return false;			
		}
		//write Data from Local Storage to the browser
		var makeDiv = document.createElement('div'); // Create div
		makeDiv.setAttribute("id", "items"); //set ID
		var makeList = document.createElement('ul'); //create list
		makeList.setAttribute("class", "results");
		makeDiv.appendChild(makeList); //Add list to div
		document.body.appendChild(makeDiv); //Add div to body
		$('items').style.display = "block"; //Make sure items display when getData
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// convert the string back to an object
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul'); //create sub ul
			makeSubList.setAttribute("class", "results-details");
			makeli.appendChild(makeSubList); // add sub ul to li
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubli.setAttribute("class", "item-details");
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	//Clear all data
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All information deleted.");
			window.location.reload();
			return false;
		}
	}
	//Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	
});
