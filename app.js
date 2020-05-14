const form = document.querySelector('form');
const input = document.querySelector('.todo_input');

const toDoList = document.querySelector('.todo_list');

const store = new Store();

const renderToDos = () => {
  console.log('rendered');
};

// Fetch todos from local storage on window load
window.addEventListener('load', () => {
  for (let i = 1; i <= store.storage.length; i++) {
    let todo = createToDo(store.storage.getItem(i));
    toDoList.appendChild(todo);
  }
});

// Add todo on form submission
form.addEventListener('submit', e => {
  e.preventDefault();

  // Create a new todo item
  let todo = createToDo(input.value);
  // Render todo item and add it to the store
  addToDo(todo);

  // Clear input
  console.log('fuck');
  input.value = null;
});

// ~ FUNCTIONS ~

// Create a new DOM element
const createToDo = text => {
  const todo = document.createElement('div');
  todo.classList.add('todo_wrapper');

  const todoText = document.createElement('p');
  todoText.classList.add('todo_text');
  todoText.innerHTML += text;

  todo.appendChild(todoText);

  return todo;
};

// Add toDo element to the dom and store it on local storage
const addToDo = todo => {
  toDoList.appendChild(todo);
  store.add(todo);
};
