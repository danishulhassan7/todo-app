var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-input");
    // Creating li element with textNode 
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    // Creating a delete button from js 

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "delBtn");
    delBtn.setAttribute("onclick", "deleteItem(this)");
    delBtn.appendChild(delText);

    // Creating a edit button from js

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class", "Editbtn");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    list.appendChild(li);

    li.appendChild(delBtn);
    list.appendChild(li);
    todo_item.value = "";
    // console.log(li);
}

function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter the updated Value", val);
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteAll() {
    list.innerHTML = "";
}