
let BIN_ID = "66fd00f2ad19ca34f8b16536";
let BASE_API_URL = "https://api.jsonbin.io/v3";

async function loadData() {
    let response = await axios.get(`${BASE_API_URL}/b/${BIN_ID} `);
    //  return response.data;
    
    console.log(repsonse.data.record.customerData);
}

function addTask(todo, name, area, material, quantity, days) {
  let todoList = {
    id: Math.floor(Math.random() * 100 + 1),
    name: name,
    area: area,
    material: material,
    quantity: quantity,
    days: days,
  };

  todo.push(todoList);
  showData(todo);
}

function editTask() {}

function deleteTask() {}
