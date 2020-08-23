// Keep in memory all we need.
const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");

// Create new list items by user input.
function createListElement() {
  if (input.value.length > 0) {
    let btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.classList.add("delete");

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = "";
  }
}

// Add event listeners to ALL (new and old) list items through delegation.
// If you don't understand what's happening here, refeer
// to the following link on Event Delegates: http://davidwalsh.name/event-delegate
// Handles both the stricking and the deleting of item lists.
ul.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  } else if (e.target.nodeName === "BUTTON") {
    e.target.parentNode.remove();
  }
});

// Call the function to create a new list item when user clicks on the ENTER button.
button.addEventListener("click", createListElement);

// Does the same as above, but if the user presses the Enter key on his keyboard while focused on the input box.
input.addEventListener("keypress", function () {
  if (event.keyCode === 13) {
    createListElement();
  }
});
