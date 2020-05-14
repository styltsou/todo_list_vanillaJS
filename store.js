class Store {
  constructor() {
    this.storage = window.localStorage;
  }

  add(todo) {
    // Extract text from todo element
    let value = todo.firstChild.innerHTML;

    this.storage.setItem(this.storage.length + 1, value);
  }

  remove() {
    console.log('removed');
  }
}
