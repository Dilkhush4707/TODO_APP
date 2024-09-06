let todoList = [];
displayItems();
function addTodo() {
  let todo_element = document.querySelector("#input");
  let todo_item = todo_element.value;
  todoList.push(todo_item);
  console.log(todoList);
  todo_element.value = " ";
  displayItems();
}
function displayItems() {
  let containerElement = document.querySelector("todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
    <div><p>${todoList[i]}</p>
  <button>Delete</button></div>`;
  }
  containerElement.innerHTML = newHtml;
}
