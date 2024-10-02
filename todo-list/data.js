


function addTask(todo,name, area, material, quantity, days) {
    let todoList = {
        "id": Math.floor(Math.random() * 100 + 1),
        "name":name,
        "area":area,
        "material": material,
        "quantity": quantity,
        "days": days
      };

todo.push(todoList);
showData(todo);
console.log(todo)
}

function editTask() {

}

function deleteTask() {

}