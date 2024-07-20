// Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded", function(){

  // Select DOM Elements:
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskTextS => addTask(taskTextS, false)); // Don't save again when loading
  }

  // Create the addTask Function:
  function addTask(taskTextS, save = true){
    const taskText = taskTextS;
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

        // Update tasks array and Local Storage on removal
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const taskIndex = storedTasks.indexOf(taskTextS);
      storedTasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
      
      });
      task.appendChild(removeBtn);
      taskList.appendChild(task);
      // Clear the task input field 
      taskInput.value = "" ;

      if (save) {
        // Update tasks array and Local Storage on addition
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskTextS);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
      }
    }
  }

  // Attach Event Listeners:
  addButton.addEventListener("click", function() {
    addTask(taskInput.value.trim());
  });
  taskInput.addEventListener("keypress", function(event){
    if (event.key === 'Enter') {
      addTask(taskInput.value.trim());
    }
  })

  // Load tasks on page load
  loadTasks();
})