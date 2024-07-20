// Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded", function(){

  // Select DOM Elements:
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create the addTask Function:
  function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
      alert("Please enter the task");
      return;
    }else{
      // Task Creation and Removal:
      let task = document.createElement("li");
      task.textContent = taskText;
      // Create a new button element for removing the task
      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", function(){
        taskList.removeChild(task);
      });
      task.appendChild(removeBtn);
      taskList.appendChild(task);
      // Clear the task input field 
      taskInput.value = "" ;
    }
  }

  // Attach Event Listeners:
  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function(event){
    if (event.key === 'Enter') {
      addTask();
    }
  })
})