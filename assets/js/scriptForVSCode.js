const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        //Now we'll have to add a cross icon for the user to delete a particular task
        span.innerHTML = "\u00d7"; //This u00d7 is ASCII code for ' × '.
        li.appendChild(span);//For displaying the span
    }
    inputBox.value = '';//This line will do one thing. It will clear the value in input(type="text") box after we click on Add button
    saveData(); //To save the updated content in browser when we add/modify the list
} 
//javascript for click function on ' × ' to remove the task by user
listContainer.addEventListener("click", function(e){//check for target on click
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");//If target clicked is li, it will toggle(ON/OFF) checked status
        saveData(); //To save the updated content in browser when we add item in the list
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();//If target clicked is span, it will delete the parent element
        saveData(); //To save the updated content in browser when delete item in the list
    }
}, false);
 //now let's work on storing the to-do list in the browser whenever refreshed
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML) //for storing all-items of list-container in browser
    // we can display that using the getItem data
 }
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 //next we just have to call the function showTask
 showTask();
 //This is completion of the project by GreatStack https://www.youtube.com/watch?v=G0jO8kUrg-I&t=264s
 // The tasks are not going on refresh(F5) and hard reset(ctrl+F5) too. That's fun