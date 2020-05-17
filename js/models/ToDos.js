class ToDos {
  constructor() {
    this.toDos = [];
  }

  addToDo(todo) {
    let value = todo.firstChild.innerHTML;

    this.toDos.push(value);

    // Save to local storage
    this.saveLocal();
  }

  deleteToDo(idx) {
    this.toDos.splice(idx, 1);

    this.saveLocal();
  }

  deleteAll() {
    this.toDos = [];

    // Save changes
    this.saveLocal();
  }

  // Save todos to local storage
  saveLocal() {
    localStorage.setItem('todos', JSON.stringify(this.toDos));
  }

  // Read data from local storage
  readLocal() {
    const savedToDos = JSON.parse(localStorage.getItem('todos'));

    if (savedToDos) this.toDos = savedToDos;
  }
}
