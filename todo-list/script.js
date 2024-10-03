
let data = [];

window.addEventListener("DOMContentLoaded", async function () {
     data = await loadData();
    showData(data.customerData);
    createNewCustomer(data.customerData);

    this.document.querySelector("#save-btn").addEventListener('click', function (){
        saveData(data);
    })
});

async function showData(todoData) {
     let tableTag = document.querySelector("#tbody");
     let table = document.querySelector("#table");
    tableTag.innerHTML = '';
    

    for(let i = 0; i < todoData.length; i++) {
        let row = `
            <tr scope= "row">
                <td>${todoData[i].name}</td>
                <td>${todoData[i].location}</td>
                <td>${todoData[i].material}</td>
                <td>${todoData[i].quantity}</td>
                <td>${todoData[i].days}</td>
                <td><button class="edit-btn" class="btn btn-dark">Edit</button></td>
                <td><button class="delete-btn" class="btn btn-danger">Delete</button></td>
            </tr>
        `;
        tableTag.innerHTML += row;
    }
    table.addEventListener('click', function (e) {

        let editButton = e.target.classList.contains("edit-btn");
        alert("this is edit button", editButton);
    });
    
    table.addEventListener('click', function (e) {

        let deleteButton = e.target.classList.contains("delete-btn");
        alert("this is delete button", deleteButton);
    });
    
}


// showCustomerDetail() funciton is used to show the customer data in the web page
// function renderCustomerDetails(todo) {
//   let unorderList = document.querySelector("#showCustomerData");
//   unorderList.innerHTML = "";

//   for (let d of todo) {
//     let liElement = document.createElement("li");
//     liElement.innerHTML = `
//             ${d.name} ${d.area} ${d.material} ${d.quantity} ${d.days}
//             <input type="checkbox" class="checkbox"/>
//         <button class="edit">Edit</button>
//         <button class="delete">Delete</button>
//         `;

//     unorderList.appendChild(liElement);
//   }
// }

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
   showData(data);
  });
}


//  function editData(button) {
//  // Get the parent row of the clicked button
//     let row = button.parentNode.parentNode;
//    let newName = prompt("Enter the new name: ", row.cells[0]);
//     let newLocation = prompt("Enter the new location: ", row.cells[1]);
//     let newMaterial = prompt("Enter the new material: ", row.cells[2]);
//     let newQunantity = prompt("Enter the new quantity: ", row.cells[3]);
//     let newDays = prompt("Enter the new days: ", row.cells[4]);
//    let newDone = prompt("Is the task done (y/n)");
    
//    let isDone = false;
//             if (newDone.toLowerCase() == 'y' ) {
//                 isDone = true;
//             }
//             updateTask(data, row.id, newName, newLocation,newMaterial,newQunantity, newDays,  isDone);
//             showData(data.customerData);
// }


function deleteData(button) {
let row = button.parentNode.parentNode;
alert(row);
}


    




