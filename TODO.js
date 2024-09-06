let todoList = [];
function addTodo() {
  let todo_date = document.querySelector("#input_date");
  let todo_element = document.querySelector("#input_task");
  let todo_item = todo_element.value || "invalid value delete";
  todoList.push(todo_item);
  displayItems();
  todo_element.value = null;
}
function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  let LENGTH = todoList.length;
  for (let i = 0; i <= LENGTH - 1; i++) {
    newHtml += `
    <div class="todo_item_container">
    <span>${todoList[i]}</span>
    <button onclick="todoList.splice(${i},1);displayItems();">
    Delete</button>
  </div>`;
  }
  containerElement.innerHTML = newHtml;
}
