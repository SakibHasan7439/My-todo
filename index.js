const input = document.getElementById("input");
const addButton = document.getElementById("addItem");
const deleteAll = document.getElementById("deleteAll");
const list = document.getElementById("list");

// create list item
const createItem = function(task){
    const listItem = document.createElement("li");
    listItem.innerText = task;
    listItem.style.padding = "10px"
    listItem.style.display = "flex"
    listItem.style.justifyContent = "space-between";
    const btn = document.createElement("button");
    btn.innerText = "Delete";
    listItem.appendChild(btn);

    btn.addEventListener("click", deleteItem);
    return listItem;
}

// generate todo list item on button click
const addItem = function(){
    if(input.value === ""){
        return alert("Please input your todo item");

    }
    let listItem = createItem(input.value);
    list.appendChild(listItem);
    input.value = "";
}

// delete each item
const deleteItem = function(event){
    let parent = event.target.parentNode;
    parent.remove();
}

addButton.addEventListener("click", addItem);

// delete all list item
const ultimateDelete = function(){
    list.innerHTML = "";
    
    
}

deleteAll.addEventListener("click", ultimateDelete);