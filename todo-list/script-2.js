
let data = [];

window.addEventListener("DOMContentLoaded", async function () {
     data = await loadData();
     showData(data.customerData);
    //  renderCustomerDetails(data.customerData);
    createNewCustomer(data.customerData);

    this.document.querySelector("#save-btn").addEventListener('click', function (){
        saveData(data);
    })
});

async function showData(todoData) {
    const tbl = document.querySelector("#table");
  const tblBody = document.querySelector("#tbody");
   tblBody.innerHTML = "";

  for (let i = 0; i < todoData.length; i++) {
    const row = document.createElement("tr");
    //  const cell = document.createElement("td");
    row.innerHTML = `
        <td>${todoData[i].name}</td>
        <td>${todoData[i].location}</td>
        <td>${todoData[i].material}</td>
        <td>${todoData[i].quantity}</td>
        <td>${todoData[i].days}</td>
        <td><button type="button" class="btn btn-dark" id="edit-btn">Edit</button></td>
         <td><button type="button" class="btn btn-danger" id="delete-btn">Delete</button></td>
    `;
    tblBody.appendChild(row);

    // edit button to allow us to edit the exisiting data from database
    let editBtn = row.querySelector("#edit-btn");
    editBtn.addEventListener('click', function () {
    
        let newTaskName = prompt("Enter the new task name: ", todoData[i].name);
        let newLocation = prompt("Enter the new location: ", todoData[i].location);
        let newMaterial = prompt("Enter the new mateiral: ", todoData[i].material);
        let newQuantity = prompt("Enter the new quantity: ", todoData[i].quantity);
        let newDays = prompt("Enter the new task days: ", todoData[i].days);
        let newDone = prompt("Is the task done (y/n)");

        let isDone = false;
        if (newDone.toLowerCase() == 'y' ) {
            isDone = true;
        } else {
          console.log("task is not updated");
        }
        updateTask(data.customerData, todoData[i].id, newTaskName, newLocation, newMaterial, newQuantity, newDays, isDone);
        showData(todoData);
    })

    // this is delete function for deleting customer data
    let deleteBtn = row.querySelector("#delete-btn");
    deleteBtn.addEventListener('click', function() {
      const confirmation = confirm("Do you want to delete the task: " + todoData[i].name + "?");
      if (confirmation) {
          deleteTask(data.customerData,  todoData[i].id);
          showData(todoData);
      }
  })

   }

   tbl.appendChild(tblBody);   
 }

// async function renderCustomerDetails(todo) {
//   let unorderList = document.querySelector("#showCustomerData");
//   unorderList.innerHTML = "";

//   for (let d of todo) {
//     let liElement = document.createElement("li");
   
//     liElement.innerHTML = `
//             ${d.name} ${d.location} ${d.material} ${d.quantity} ${d.days}
//             <input type="checkbox" class="checkbox"/>
//         <button type="button" class=" edit btn btn-dark">Edit</button>
//         <button type="button" class="delete btn btn-danger">Delete</button>
//         `;

    
//     let checkbox = liElement.querySelector(".checkbox");
//     checkbox.checked = d.done;
//     checkbox.addEventListener("click", function(){
//         updateTaskDone(tasks, d.id);
//         renderCustomerDetails(data.customerData);
//     });

//     let editButton = liElement.querySelector(".edit");
//         // start the process of editing a task
//         editButton.addEventListener("click", function(){
//             let newTaskName = prompt("Enter the new task name: ", d.name);
//             let newLocation = prompt("Enter the new location: ", d.location);
//             let newMaterial = prompt("Enter the new mateiral: ", d.material);
//             let newQuantity = prompt("Enter the new quantity: ", d.quantity);
//             let newDays = prompt("Enter the new task days: ", d.days);
//             let newDone = prompt("Is the task done (y/n)");

//             let isDone = false;
//             if (newDone.toLowerCase() == 'y' ) {
//                 isDone = true;
//             }

//             updateTask(data.customerData, d.id, newTaskName, newLocation, newMaterial, newQuantity, newDays, isDone);
//             renderCustomerDetails(data.customerData); // redraw all the tasks, along with any changes

//         })

//         let deleteButton = liElement.querySelector(".delete");
//         deleteButton.addEventListener("click", function(){
//             let reallyDelete = confirm("Are you sure you want to delete?");
//             if (reallyDelete) {
//                 deleteTask(data.customerData, d.id);
//                 renderCustomerDetails(data.customerData);
//             }
//         })

//   unorderList.appendChild(liElement);

//   }
// }

// createNewCustomerData() function is used to create new data and show on

//create new task

function createNewCustomer(data) {

  let createButton = document.querySelector("#button");

  createButton.addEventListener("click",  function () {

    let nameInput = document.querySelector("#name").value;
    let locationInput = document.querySelector("#location").value;
    let materialInput = document.querySelector("#material").value;
    let quantityInput = document.querySelector("#quantity").value;
    let daysInput = document.querySelector("#days").value;

   addTask(data, nameInput, locationInput, materialInput, quantityInput, daysInput);
   showData(data);
  //  saveData(data);
  });
}






