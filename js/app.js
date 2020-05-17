// TODOS STORE
let store = new ToDos();

// CONTROLLERS

const createToDo = text => {
  const todo = document.createElement('div');
  todo.classList.add('todo_wrapper');

  const todoText = document.createElement('p');
  todoText.classList.add('todo_text');
  todoText.innerHTML += text;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove_todo_btn');

  const icon = document.createElement('i');
  icon.classList.add('fa');
  icon.classList.add('fa-trash');

  removeButton.appendChild(icon);

  todo.appendChild(todoText);
  todo.appendChild(removeButton);

  return todo;
};

// Add toDo element to the dom and store it on local storage
const addToDo = todo => {
  toDoList.appendChild(todo);

  store.addToDo(todo);
};

// Remove a todo
const removeToDo = idx => {
  console.log(toDoList.childNodes[idx]);

  toDoList.removeChild(toDoList.childNodes[idx]);

  store.deleteToDo(idx);
};

// Delete all todos
const deleteAll = () => {
  // Remove DOM elements
  while (toDoList.firstChild) toDoList.removeChild(toDoList.firstChild);

  // Delete from store
  store.deleteAll();
};

const renderToDos = () => {
  store.toDos.forEach(todo => {
    let toDoElement = createToDo(todo);

    toDoList.appendChild(toDoElement);
  });
};

// EVENT LISTENERS
// Fetch toDos from local storage on window load
window.addEventListener('load', () => {
  // store = new ToDos();

  // Read data from local storage and populate store.toDos array
  store.readLocal();

  renderToDos();
});

// Add todo on form submissions
form.addEventListener('submit', e => {
  e.preventDefault();

  if (!input.value) return;

  // Create a new todo item
  let toDo = createToDo(input.value);
  // Render todo item and add it to the store
  addToDo(toDo);

  // Clear input
  input.value = null;
});

// Remove a todo
document.addEventListener('click', e => {
  if (e.target && e.target.parentElement.className === 'remove_todo_btn') {
    let idx = Array.prototype.indexOf.call(
      toDoList.children,
      e.target.parentElement.parentElement
    );

    removeToDo(idx);
  }
});

// Delete all todos
deleteAllButton.addEventListener('click', deleteAll);
