const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', addTask);

//variables
let total = 0;
let completed = 0;


document.addEventListener('click', (e)=>{
  if(e.target.className.includes('delete-icon')){
    const span = e.target
    const btn = span.parentElement;
    const task = btn.parentElement;

    const checkBox = btn.previousElementSibling.firstElementChild;
    if(checkBox.checked){
      completed -= 1;
      document.getElementById('completed').textContent = completed;
    }
    task.remove();
    total -= 1;
    document.getElementById('total').textContent = total;
  }
})

document.addEventListener('change', (e)=>{
  if(e.target.className.includes('finish-box') && e.target.checked){
    const task = e.target.parentElement.parentElement;
    task.style.backgroundColor = 'lightgreen';
    // increase the completed tasks number by 1
    completed += 1;
    document.getElementById('completed').textContent = completed;
  } else if (e.target.className.includes('finish-box') && !e.target.checked){
    //decrease the uncomplated tasks
    completed -= 1;
    document.getElementById('completed').textContent = completed;
    const task = e.target.parentElement.parentElement;
    task.style.backgroundColor = '#fefefe'
  }
})



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
      <input type="checkbox" class="finish-box">
      <span> ${enteredValue}</span>
      <p class="date">${new Date().toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day:'numeric'
      })} </p>
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

  // update the app stats with total number of tasks
  total += 1;
  document.getElementById('total').textContent = total;


}
