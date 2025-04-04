// Select the input element with the id taskInput and save it to a variable named taskInput
// Select the button element with the id addTask and save it to a variable named addTaskButton
// Select the ul element with the id taskList and save it to a variable named taskList

// Declare a function named createListItem
// Give it a parameter named taskText. this will be the text value from the input element
// Create an li element saved to a variable named listItem
// Set the textContent property of listItem to taskText
// Return listItem

// Declare a function named addTask
// Get the value of taskInput and save it to a variable named taskText
// Create a listItem - call createListItem and pass taskText as argument
// Save the returned value from createListItem to a variable named listItem
// Append listItem to taskList
// Clear the input - taskInput


const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
// const listItems = document.querySelector("span");


addTaskButton.addEventListener("click",addTask);
// listItems.forEach(item => item.addEventListener("click", itemComplete))
taskList.addEventListener("click", itemComplete);


function itemComplete(e){
    e.target.classList.toggle("itemComplete")

//     e.target.classList.toggle("itemComplete")
//     // document.querySelector("span").classList.add("itemComplete")
}

function createListItem(taskText){
    const listItem = document.createElement('li');
    const listSpan = document.createElement('span')
    listSpan.innerHTML = taskText;
    listItem.appendChild(listSpan);
    return listItem

}

function addTask(){
   
    const taskText = taskInput.value;
    const listItem = createListItem(taskText);
    taskList.appendChild(listItem);
    taskInput.value = "";

}

