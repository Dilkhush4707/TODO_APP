let todoList = [
  { item: "buy milk", duedate: "4/04/2023" },
  { item: "Go to college", duedate: "4/04/2023" },
];

function addTodo() {
  let inputElement = document.querySelector("#input_task");
  let dateElement = document.querySelector("#input_date");
  let todo_item = inputElement.value || "invalid value ";
  let todo_date = dateElement.value || " delete this";

  todoList.push({ item: todo_item, duedate: todo_date });
  displayItems();
  inputElement = null;
  dateElement = null;
}
function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";

  let LENGTH = todoList.length;
  for (let i = 0; i <= LENGTH - 1; i++) {
    let { item, duedate } = todoList[i];
    newHtml += `
    <div class="todo_item_container">
    <span>${item}</span>
    <span>${duedate}</span>
    <button onclick="todoList.splice(${i},1);displayItems();">
    Delete</button>
  </div>`;
  }
  containerElement.innerHTML = newHtml;
}
