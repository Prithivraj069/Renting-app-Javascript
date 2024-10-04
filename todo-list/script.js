
let customerData = [
      {
        "id": 1,
        "name": "Naresh",
        "location": "little india",
        "material": "5ft-box",
        "quantity": 7,
        "days": 2
      },
      {
        "id": 2,
        "name": "Prithivraj",
        "location": "Ferrar park",
        "material": "6ft-box",
        "quantity": 8,
        "days": 4
      },
      {
        "id": 3,
        "name": "Pranav",
        "location": "Boong keng",
        "material": "3ft-box",
        "quantity": 7,
        "days": 3
      },
      {
        "id": 4,
        "name": "Diva",
        "location": "china Town",
        "material": "3 * 2 sheet",
        "quantity": 40,
        "days": 10
      },
      {
        "id": 5,
        "name": "tan",
        "location": "Mountbettan",
        "material": "2 * 4 Sheet",
        "quantity": "4",
        "days": "8"
      },
      {
        "id": 6,
        "name": "Tamil Selvan",
        "location": "punngol",
        "material": "3 * 2 Sheet",
        "quantity": "25",
        "days": "15"
      },
      {
        "id": 7,
        "name": "prithivraj",
        "location": "Singapore",
        "material": "7ft-box",
        "quantity": "5",
        "days": "8"
      }
    ];

window.addEventListener("DOMContentLoaded",  function () {
    //  data = await loadData();
    showData(customerData);
    console.log(customerData);
    // createNewCustomer(data.customerData);

    // this.document.querySelector("#save-btn").addEventListener('click', function (){
    //     saveData(data);
    // })
});

 function showData(todoData) {
    const tbl = document.querySelector("#table");
  const tblBody = document.querySelector("#tbody");

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

    let editBtn = row.querySelector("#edit-btn");
    editBtn.addEventListener('click', function(){
        alert("this is edit button");
    })
   }
   tbl.appendChild(tblBody);
    
    }
    
    // table.addEventListener('click', function (e) {

    //     let editButton = e.target.classList.contains("edit-btn");
    //     alert("this is edit button", editButton);
    // });
    
    // table.addEventListener('click', function (e) {

    //     let deleteButton = e.target.classList.contains("delete-btn");
    //     alert("this is delete button", deleteButton);
    // });
    



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

// function createNewCustomer(data) {

//   let createButton = document.querySelector("#button");

//   createButton.addEventListener("click",  function () {

//     let nameInput = document.querySelector("#name").value;
//     let locationInput = document.querySelector("#location").value;
//     let materialInput = document.querySelector("#material").value;
//     let quantityInput = document.querySelector("#quantity").value;
//     let daysInput = document.querySelector("#days").value;

//    addTask(data, nameInput, locationInput, materialInput, quantityInput, daysInput);
//    showData(data);
//   });
// }


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


    




