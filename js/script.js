const taskInput = document.querySelector(".task-input"),
filters = document.querySelectorAll(".filters span")
clearAll = document.querySelector(".clear-all"),
taskList = document.querySelector("ul.list-items");

let editId,
isEditTask = false,
toDos = JSON.parse(localStorage.getItem("todo-list"));


// click to close warning alert
let closebtn = document.querySelector(".close-btn");
closebtn.addEventListener("click", function() {
  let div = this.parentElement;
  // div.style.opacity = "0";
  setTimeout(function() {div.style.display = "none";}, 600);
});


// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let j ;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
taskList.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", function() {
  let li = document.createElement("li");
  let inputValue = taskInput.value;
  let t = document.createTextNode(inputValue);
  let warning = document.querySelector(".warning");
  li.appendChild(t);
  if (inputValue === "") {
    warning.style.display = "block";
  } else {
    taskList.appendChild(li);
  }
  document.querySelector(".task-input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
});