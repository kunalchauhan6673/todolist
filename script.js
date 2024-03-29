// vars are created that would be used in our file 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const countValue = document.getElementById("count-value");

// function to alert the user if no task is added but add button is pressed,to add tasks,to add delete/cross option, to call savedata stored in localstorage and to call the function to update task 
function addTask(){
   if(inputBox.value==''){
       alert("You must write something!");
   }
   else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;    // whatever text we are adding inside input box will be added into a list item 
         listContainer.appendChild(li); // adds task/li
         
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
   }
   inputBox.value="";  // this clears the input box value once the task is added 
   saveData();     //  saved data in local storage is shown 
   updatePendingTasks(); // updates pending tasks 
}


// an event listeners which sees where we are clicking
// if we click on list items, the checked class would be added and if its already there, it would be removed
// if we clicked on cross, the li item would be deleted
// simulatenously, saved data and pending task is updated and called
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();
      updatePendingTasks();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
      updatePendingTasks();
    }        
}, false);


// local storage is used to save tasks that once been added in the list so that we can access these tasks/data even after refreshing the page or closing the browser. Hence, with the help of this we can keep a track of our task without losing it 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// to display the data stored in local storage 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    updatePendingTasks();
}
showTask();

// function to update the count of pending tasks,it calculates the number of pending tasks by selecting all the <li> elements that do not have the checked class using 
function updatePendingTasks() {
    const pendingTasks = listContainer.querySelectorAll("li:not(.checked)").length;
    countValue.textContent = pendingTasks;
}