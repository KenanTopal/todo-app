const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', addTask);


// Adding a task
function addTask(e){
  e.preventDefault();
  //read the user entered value in the input field
  const inputField = document.getElementById('entered-todo');
  const enteredValue = inputField.value.trim();
  //validation
  if(!enteredValue) return alert('Please enter a task');
  //create a div with class card
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div>
      <input type="checkbox">
      <span> ${enteredValue}</span>
    </div>
    <button class="delete-btn"> 
      <span class="material-symbols-outlined delete-icon">
        delete_forever
      </span>
    </button>
 `;

 // add the task to DOM
  const taskList = document.getElementById('todos-list');
  taskList.appendChild(card);
  // Clear the input
  inputField.value = '';




}


// 1.52