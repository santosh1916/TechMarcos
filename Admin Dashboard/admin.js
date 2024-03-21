let libraryExistingRecord = JSON.parse(localStorage.getItem("record")) || [];
function openSideBar() {
  let sidebar = document.getElementById("sidebar")
  let sidebarItem = document.querySelectorAll(".open-sidebar");
  sidebarItem.forEach((elem)=>{
    elem.style.display = 'inline'
  })
  console.log(sidebarItem)
  sidebar.style.width = '200px';
}
function closeSideBar(){
  let sidebar = document.getElementById("sidebar")
  let sidebarItem = document.querySelectorAll(".open-sidebar");
  sidebarItem.forEach((elem)=>{
    elem.style.display = 'none'
  })
  console.log(sidebarItem)
  sidebar.style.width = '70px';
}
// openSideBar();

function closeToggle(elemId){
  console.log(elemId)
    let element = document.getElementById(elemId)
    element.style.transform = "scaleY(0)"
    element.style.pointerEvents = "none"
}
function openToggle(elemId , heading ){
  console.log(elemId)
  let element = document.getElementById(elemId)
  let th = document.getElementById("heading")
  document.getElementById("changebtnType").innerHTML = `<button type="submit" class="btn add-primary" onclick="return ${heading}user()">Submit</button>`
  th.innerHTML = `<span class="text-l"><span class="theme-color">${heading} </span>user's</span>`
  element.style.transform = "scaleY(1)"
  element.style.pointerEvents = "all"
}

function Adduser() {
  let fnameInput = document.getElementById("fname");
  let lnameInput = document.getElementById("lname");
  let emailInput = document.getElementById("email");
  let numberInput = document.getElementById("number");
  let joinDate = document.getElementById("joinDate");

  let fname = fnameInput.value;
  let lname = lnameInput.value;
  let email = emailInput.value;
  let number = numberInput.value;
  let joining = joinDate.value;

  if (!fname || !lname || !email || !number || !joining) {
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
    fname: fname,
    lname:lname,
    email: email,
    number: number,
    joining: joining,
    id: Math.floor(Math.random() * 10000),
  };
  libraryExistingRecord.push(record);

  // Add item to localStorage
  localStorage.setItem("record", JSON.stringify(libraryExistingRecord));

  // Clear input fields
  fnameInput.value = "";
  lnameInput.value = "";
  joinDate.value = "";
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
                <span class="uncheck material-symbols-outlined">check_box_outline_blank</span>
                <span class="checked material-symbols-outlined">select_check_box</span>
            </span>
            <span class="input-name">${index + 1 }</span>
        </label>
        </td>
        <td>${record.joining}</td>
        <td>
        <div class="user-profile"></div>
        </td>
        <td>
          <span class="fullname">${record.fname} ${record.lname}</span>
          <span class="email">${record.email}</span>
        </td>
        <td>${record.number}</td>
        <td>
            <button class="btn btn-delete" type="button" title="Delete" onclick="deleteUser(${index})"><i class="ri-delete-bin-6-line"></i></button>
            <button class="btn btn-yellow" type="button" title="Edit" onclick="updateRecord(${index})"><i class="ri-file-edit-line"></i></button>
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
  let deleteWarning = `Are you sure?`
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
        if (selectedItem.length > 0) {
            bulkDeleteButton.innerHTML = `<i class="ri-delete-bin-6-line"></i> (${selectedItem.length})`
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
  let deleteWarning = `Are you sure?`
  openConfirmationModal(deleteWarning);
}

function confirmDelete() {
  let index = window.userToDeleteIndex;
  deleteItemsByIds(libraryExistingRecord, selectedItem);
  localStorage.setItem("record", JSON.stringify(libraryExistingRecord));
  displayData();
  updateRecordLength();
  closeConfirmationModal();
  selectedItem = [];
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
  openToggle('addNewUser' , 'update')
    window.userToUpdateIndex = index;
  }
  function updateuser(){
    let index = window.userToUpdateIndex;
  let newFname = document.getElementById("fname").value;
  let newLname = document.getElementById("lname").value;
  let newEmail = document.getElementById("email").value;
  let newNumber = document.getElementById("number").value;
  if (newFname !== ""){
    libraryExistingRecord[index].fname = newFname;
  }
  if(newLname !== ""){
    libraryExistingRecord[index].lname = newLname;
  }
  if( newEmail !== ""){
    libraryExistingRecord[index].email = newEmail;
  }
  if( newNumber !== ""){
    libraryExistingRecord[index].number = newNumber;
  }
  localStorage.setItem("record", JSON.stringify(libraryExistingRecord));

  closeToggle("addNewUser");
  displayData();
  updateRecordLength();

}


  
