/* JS for todo list
   Krista Allgood
   April 18th 2018
*/

/* Checks if the element parameter contains
a class matching the className parameter & returns the element.
*/
function hasClass(elem, className) {
    return elem.classList.contains(className);
}
/* Adds an event listener to the document. On click, if the
hasClass function is true then remove the li containing the
clicked button.
*/
document.addEventListener('click', function (e) {
    if (hasClass(e.target, 'closebtn')) {
      var item = e.target.parentNode;
      item.parentNode.removeChild(item);
    }
}, false);

/* Takes the user input and adds a li item to the ul with the
input text. Appends the li item to the ul. Appends a button with
a class of 'closebtn' to the li items.Removes user input text.
*/
var userInput=document.getElementById("userinput"); //Gets value of id

function addItem() {
  var ul=document.getElementById("list"); //Gets ul with id
  var li=document.createElement("li"); //Create new list item
  var btn=document.createElement("BUTTON"); //Create a new button
  var listItems=document.getElementsByClassName("item"); //get li items
  var i=0;
  var buttonText=document.createTextNode("\u00D7"); //writes "X"

  if (userInput.value !== "") {
  li.appendChild(document.createTextNode(userInput.value)); //Create text node with value of textbox
  li.className = "item";
  ul.appendChild(li); //Append text node to ul as a li item

  for (i = 0; i < listItems.length; i++) {
  	btn.className = "closebtn";
    btn.appendChild(buttonText); //Appends "X" to the btn
    listItems[i].appendChild(btn); //Appends btn to li item
  }
  ul.insertBefore(li, ul.childNodes[0]); //inserts the li item at the top of the ul
  userInput.value=""; //Removes the text from the textbox
  } //end if
}

document.addEventListener("keydown", keyfield, false);
function keyfield(e) {
  var keyCode = e.keyCode;
  if (keyCode===13 && userInput.value !== "") {
    addItem();
  }
}
