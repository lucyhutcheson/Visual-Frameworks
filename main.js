/**
 * Project 2 Deliverable
 * @author Lucy Hutcheson
 * Date: 2012-02-09
 * Created for:  Visual Frameworks 1202
 */

function styleField() {
	var field = document.getElementById("itemName");
	field.style.backgroundColor = "#ffb";
}

function unstyleField() {
	var field = document.getElementById("itemName");
	field.style.backgroundColor = "#fff";
}

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
