function addTask() {
    const taskInput = document.getElementById('taskInput').value; // Get task input
    if (taskInput === '') {
      alert('Please enter a task'); // Alert if input is empty
      return;
    }
  
    const taskList = document.getElementById('taskList'); // Get the task list
    const li = document.createElement('li'); // Create a new list item
    li.textContent = taskInput; // Set the text to the task input
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => li.remove(); // Remove the task when clicked
  
    li.appendChild(deleteButton); // Append delete button to list item
    taskList.appendChild(li); // Append the list item to the task list
  
    document.getElementById('taskInput').value = ''; // Clear the input field
  }
  