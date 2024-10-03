
let data = [];

window.addEventListener("DOMContentLoaded", async function () {
     data = await loadData();
     renderCustomerDetails(data.customerData);
    createNewCustomer(data.customerData);

    this.document.querySelector("#save-btn").addEventListener('click', function (){
        saveData(data);
    })
});


async function renderCustomerDetails(todo) {
  let unorderList = document.querySelector("#showCustomerData");
  unorderList.innerHTML = "";

  for (let d of todo) {
    let liElement = document.createElement("li");
   
    liElement.innerHTML = `
            ${d.name} ${d.location} ${d.material} ${d.quantity} ${d.days}
            <input type="checkbox" class="checkbox"/>
        <button type="button" class=" edit btn btn-dark">Edit</button>
        <button type="button" class="delete btn btn-danger">Delete</button>
        `;

    
    let checkbox = liElement.querySelector(".checkbox");
    checkbox.checked = d.done;
    checkbox.addEventListener("click", function(){
        updateTaskDone(tasks, d.id);
        renderCustomerDetails(data.customerData);
    });

    let editButton = liElement.querySelector(".edit");
        // start the process of editing a task
        editButton.addEventListener("click", function(){
            let newTaskName = prompt("Enter the new task name: ", d.name);
            let newLocation = prompt("Enter the new location: ", d.location);
            let newMaterial = prompt("Enter the new mateiral: ", d.material);
            let newQuantity = prompt("Enter the new quantity: ", d.quantity);
            let newDays = prompt("Enter the new task days: ", d.days);
            let newDone = prompt("Is the task done (y/n)");

            let isDone = false;
            if (newDone.toLowerCase() == 'y' ) {
                isDone = true;
            }

            updateTask(data.customerData, d.id, newTaskName, newLocation, newMaterial, newQuantity, newDays, isDone);
            renderCustomerDetails(data.customerData); // redraw all the tasks, along with any changes

        })

        let deleteButton = liElement.querySelector(".delete");
        deleteButton.addEventListener("click", function(){
            let reallyDelete = confirm("Are you sure you want to delete?");
            if (reallyDelete) {
                deleteTask(data.customerData, d.id);
                renderCustomerDetails(data.customerData);
            }
        })

  unorderList.appendChild(liElement);

  }
}

// createNewCustomerData() function is used to create new data and show on

function createNewCustomer(data) {

  let createButton = document.querySelector("#button");

  createButton.addEventListener("click",  function () {

    let nameInput = document.querySelector("#name").value;
    let locationInput = document.querySelector("#location").value;
    let materialInput = document.querySelector("#material").value;
    let quantityInput = document.querySelector("#quantity").value;
    let daysInput = document.querySelector("#days").value;

   addTask(data, nameInput, locationInput, materialInput, quantityInput, daysInput);
   renderCustomerDetails(data);
  });
}


function deleteData(button) {
let row = button.parentNode.parentNode;
alert(row);
}


    




