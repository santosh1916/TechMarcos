let libraryExistingRecord = JSON.parse(localStorage.getItem("record")) || [];
function openSideBar() {
  let btnInProfile = document.querySelectorAll(".toggle-btn");
  document.querySelector(".user").addEventListener("click", () => {
    btnInProfile.forEach((element) => {
      element.style.transform = "scale(1)";
    });
    document.getElementById("toggleProfile").style.width = "150px";
  });
  document
    .querySelector(".toggleProfile")
    .addEventListener("mouseleave", () => {
      btnInProfile.forEach((element) => {
        element.style.transform = "scale(0)";
      });
      document.getElementById("toggleProfile").style.width = "0";
    });
}
openSideBar();

function closeToggle(elemId){
  console.log(elemId)
    let element = document.getElementById(elemId)
    element.style.transform = "scaleY(0)"
    element.style.pointerEvents = "none"
}
function openToggle(elemId){
  let element = document.getElementById(elemId)
  element.style.transform = "scaleY(1)"
  element.style.pointerEvents = "all"
}

function registerNewUser() {
  let fullnameInput = document.getElementById("fullname");
  let emailInput = document.getElementById("email");
  let numberInput = document.getElementById("number");

  let fullname = fullnameInput.value;
  let email = emailInput.value;
  let number = numberInput.value;

  if (!fullname || !email || !number) {
    alert("Please fill out all required fields");
    return false;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(number)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  let record = {
    fullname: fullname,
    email: email,
    number: number,
    id: Math.floor(Math.random() * 10000),
  };
  libraryExistingRecord.push(record);

  // Add item to localStorage
  localStorage.setItem("record", JSON.stringify(libraryExistingRecord));

  // Clear input fields
  fullnameInput.value = "";
  emailInput.value = "";
  numberInput.value = "";

  closeToggle("addNewUser");
  displayData();
  updateRecordLength();
}


function displayData() {
  let wrapper = document.getElementById("wrapper");
  wrapper.innerHTML = "";
  libraryExistingRecord.forEach((record, index) => {
    let userData = createRow(record, index);
    wrapper.appendChild(userData);
  });
}

function createRow(record,index) {
  let newRow = document.createElement("tr");
  newRow.className = "row";
  newRow.innerHTML = `
    <td>
        <label for="${record.id}">
        <input type="checkbox" id="${record.id}" value="${record.id}"/>
            <span class="checkbox-wrapper">
                <i class="uncheck ri-checkbox-blank-circle-line"></i>
                <i class="checked ri-checkbox-circle-line"></i>
            </span>
            <span class="input-name">${index + 1 }</span>
        </label>
        </td>
        <td>
            <div class="display-icon-sm"><span class="text-l">${record.fullname.charAt(0)}</span><div>
        </td>
        <td>${record.fullname}</td>
        <td>${record.email}</td>
        <td>${record.number}</td>
        <td>
            <button class="btn btn-red" type="button" title="Delete" onclick="deleteUser(${index})"><i class="ri-delete-bin-6-line"></i></button>
            <button class="btn btn-yellow" type="button" title="Edit" onclick="openUpdateForm(${index})"><i class="ri-file-edit-line"></i></button>
            <button class="btn btn-green" type="button" title="Calculator"><i class="ri-profile-line"></i></button>
    </td>`;
  return newRow;
}

displayData();


function updateRecordLength(){
  document.getElementById("recordLength").innerText = libraryExistingRecord.length;
}
updateRecordLength();


// Delete direct form btn given index
function openConfirmationModal(message) {
  let messageBox = document.getElementById("message");
  messageBox.innerText = message; 

  document.getElementById("confirmationModal").style.display = "block";
}

function closeConfirmationModal() {
  document.getElementById("confirmationModal").style.display = "none";
}

function deleteUser(index) {
  libraryExistingRecord[index]
  let deleteWarning = `Are you sure to delete this user`
  openConfirmationModal(deleteWarning);
  window.userToDeleteIndex = index;
}
function confirmDelete() {
  let index = window.userToDeleteIndex;

  libraryExistingRecord.splice(index, 1);
  localStorage.setItem("record", JSON.stringify(libraryExistingRecord));

  displayData();
  updateRecordLength();
  // Close the confirmation modal after delete action
  closeConfirmationModal();
}

let selectedItem = [];
document.getElementById("wrapper").addEventListener('click', (dets) => {
    if (dets.target.type === "checkbox") {
        let value = Number(dets.target.value);
        if (dets.target.checked) {
            selectedItem.push(value);
        } else {
            // Remove from selectedItem if unchecked
            let index = selectedItem.indexOf(value);
            if (index !== -1) {
                selectedItem.splice(index, 1);
            }
        }
        // Toggle button visibility based on selectedItem length
        let bulkDeleteButton = document.getElementById("bulk-delete");
        if (selectedItem.length > 1) {
            bulkDeleteButton.classList.add("showBtn");
        } else {
            bulkDeleteButton.classList.remove("showBtn");
        }
    }
});

document.getElementById("bulk-delete").addEventListener('click', selectionBaseDelete);

function deleteItemsByIds(arr, ids) {
  ids.forEach(id => {
      let index = arr.findIndex(item => item.id === id);
      if (index !== -1) {
          arr.splice(index, 1);
      }
  });
}


function selectionBaseDelete() {
  deleteItemsByIds(libraryExistingRecord, selectedItem);
  localStorage.setItem("record", JSON.stringify(libraryExistingRecord));
  displayData();
}

// Calculator functionality
        let number1 = document.getElementById("number1");
        let number2 = document.getElementById("number2");
        let answer = document.getElementById("answer");
        let operationSymbol = document.getElementById("symbole");

        function add() {
            operationSymbol.innerText = "+";
        }

        function subtract() {
            operationSymbol.innerText = "-";
        }

        function multiply() {
            operationSymbol.innerText = "*";
        }

        function divide() {
            operationSymbol.innerText = "/";
        }

        function calculate() {
            let num1 = parseFloat(number1.value);
            let num2 = parseFloat(number2.value);
            let operation = operationSymbol.innerText;

            if (isNaN(num1) || isNaN(num2)) {
                alert("Please enter valid numbers in both fields.");
                return;
            }

            switch (operation) {
                case "+":
                    answer.value = num1 + num2;
                    break;
                case "-":
                    answer.value = num1 - num2;
                    break;
                case "*":
                    answer.value = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        alert("Cannot divide by zero.");
                        return;
                    }
                    answer.value = num1 / num2;
                    break;
                default:
                    alert("Invalid operation.");
            }
        }

      





        function updateRecord(index) {
          let newName = document.getElementById("updateName").value;
          let newEmail = document.getElementById("updateEmail").value;
          let newNumber = document.getElementById("updateNumber").value;
         
          if (newName !== ""){
            libraryExistingRecord[index].fullname = newName;
          }
          if(newEmail !== ""){
            libraryExistingRecord[index].email = newEmail;
          }
          if( newNumber !== ""){
            libraryExistingRecord[index].number = newNumber;
          }
          // Update localStorage with the modified records
          localStorage.setItem("record", JSON.stringify(libraryExistingRecord));
        
          // Optionally, you can close the edit form or perform any other actions here
          EditToggleClose();
        
          // Reload existing records after updating
          displayAllrecord();
          updateRecordLength();
        }



  function openUpdateForm(index) {
  let userUpdateForm = document.getElementById("updateUser");
  userUpdateForm.innerHTML = `
    <form action="#">
    <table class="user-data">
        <thead>
            <tr>
                <th><span class="text-l"><span class="theme-color">Register</span> new user's</span></th>
                <th><button type="button" class="close-btn theme-btn btn" title="Close" onclick="closeToggle('addNewUser')"><i class="ri-close-large-line"></i></button> </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><label for="updateName">Full Name:</label></td>
                <td><input type="text" class="input" id="updateName" placeholder="Update your full name"></td>
            </tr>
            <tr>
                <td><label for="updateEmail">Enter Email:</label></td>
                <td><input type="email" class="input" id="updateEmail" placeholder="Update your email address"></td>
            </tr>
            <tr>
                <td><label for="updateNumber">Enter Phone No:</label></td>
                <td><input type="number" class="input" id="updateNumber" max="10" placeholder="Update your phone no."></td>
            </tr>
        </tbody>
        <tfoot class="t-foot">
            <tr>
                <td><button type="submit" class="btn theme-btn btn-submit" onclick="return updateRecord(${index})">Submit</button></td>
            </tr>
        </tfoot>
    </table>
  </form>`
}