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



addTaskButton.addEventListener("click",addTask);

//addeventlistener was added to <ul id="taskList"></ul> because addEventListener could not be added to the newly created <li></li> items inside the ul
taskList.addEventListener("click", itemComplete);


//this function will trigger everytime when someone click an item inside the unorder list
function itemComplete(e){
    e.target.classList.toggle("itemComplete")
}


//extra <span> elements were added inside the <li> because when you use css to add background color, it goes across the whole page. so span was added and then background color was added to that span.
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

