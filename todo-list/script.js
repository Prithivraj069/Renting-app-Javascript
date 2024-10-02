

window.addEventListener("DOMContentLoaded", async function () {

    let response = await axios.get("database.json");
    let data = response.data;
     showData(data.customerData);
    
    createNewCustomer(data.customerData);
});

async function showData(todoData) {
    let tableTag = document.querySelector("#tbody");
    tableTag.innerHTML = '';
    
    for(let i = 0; i < todoData.length; i++) {
        let row = `
            <tr>
                <td>${todoData[i].name}</td>
                <td>${todoData[i].location}</td>
                <td>${todoData[i].material}</td>
                <td>${todoData[i].quantity}</td>
                <td>${todoData[i].days}</td>
                <td> <button id="edit-btn" class="btn btn-dark" >Edit</button> </td>
                <td> <button id="delete-btn" class="btn btn-danger">Delete</button> </td>
            </tr>
        `;
        tableTag.innerHTML += row ;
    }   
    editCustomerData(tableTag);
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

  createButton.addEventListener("click", function () {

    let nameInput = document.querySelector("#name").value;
    let locationInput = document.querySelector("#location").value;
    let materialInput = document.querySelector("#material").value;
    let quantityInput = document.querySelector("#quantity").value;
    let daysInput = document.querySelector("#days").value;

   addTask(data, nameInput, locationInput, materialInput, quantityInput, daysInput);
  });
}

function editCustomerData(btnTag) {
    btnTag.querySelector("#edit-btn").addEventListener('click', ()=> {
        alert("this is an edit button");
    })
}

    




