let toggleForm = document.getElementById("toggelAddRecord");
let existingRecords = JSON.parse(localStorage.getItem("record")) || [];
function toggleClose() {
  toggleForm.style.transform = "scale(.1)";
  toggleForm.style.top = "-50%";
  toggleForm.style.left = "50%";
}
function toggleOpen() {
  toggleForm.style.transform = "scale(1)";
  toggleForm.style.transform = "translate(-50%, -50%)";
  toggleForm.style.top = "50%";
  toggleForm.style.left = "50%";
}


let toggleEdit = document.getElementById("toggelEdit")
function EditToggleClose() {
  toggleEdit.style.transform = "scale(.1)";
  toggleEdit.style.top = "-50%";
  toggleEdit.style.left = "50%";
}


  let editForm = document.createElement("div");
  function EditToggleOpen(index) {
  editForm.innerHTML = `<button
  type="button"
  class="toogle-close"
  id="closeToggle"
  title="Close"
  onclick="EditToggleClose()"
>
  <i class="ri-close-large-line"></i>
</button>
<h2 class="text-l heading">Edit Record Here!</h2>
<form id="cardForm">
  <input type="text" class="inputfield" id="ExistingName" value="${existingRecords[index].fullname}" placeholder = "Update Your Name">
  <input type="email" class="inputfield" id="ExistingEmail" value="${existingRecords[index].email}" placeholder = "Update Your Email">
  <input type="number" class="inputfield" id="ExistingNumber" value="${existingRecords[index].number}" placeholder = "Update Your Number">
  <button type="button" class="btn btn-blue" title="Add Record" onclick="updateRecord(${index})">
    Update Record
  </button>
</form>`
toggleEdit.appendChild(editForm);
  toggleEdit.style.transform = "scale(1)";
  toggleEdit.style.transform = "translate(-50%, -50%)";
  toggleEdit.style.top = "50%";
  toggleEdit.style.left = "50%";

}

function updateRecord(index) {
  let newName = document.getElementById("ExistingName").value;
  let newEmail = document.getElementById("ExistingEmail").value;
  let newNumber = document.getElementById("ExistingNumber").value;
 
  if (newName !== ""){
    existingRecords[index].fullname = newName;
  }
  if(newEmail !== ""){
    existingRecords[index].email = newEmail;
  }
  if( newNumber !== ""){
    existingRecords[index].number = newNumber;
  }
  // Update localStorage with the modified records
  localStorage.setItem("record", JSON.stringify(existingRecords));

  // Optionally, you can close the edit form or perform any other actions here
  EditToggleClose();

  // Reload existing records after updating
  displayAllrecord();
  updateRecordLength();
}


function addRecord() {
  // Get form values
  let fullname = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("phone").value;

  // Basic validation
  if (!fullname || !email || !number) {
    alert("Please fill out all required fields");
    return;
  }

  // Email validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Phone number validation (assuming a simple format of 10 digits)
  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(number)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  // Create record object
  let record = {
    fullname: fullname,
    email: email,
    number: number,
  };

  // Push new record
  existingRecords.push(record);

  // Add item to localStorage
  localStorage.setItem("record", JSON.stringify(existingRecords));
  toggleClose();

  // Reload existing records after adding a new record
  displayAllrecord();
  updateRecordLength();
}


// Display all record
function displayAllrecord() {
  let recordWrapper = document.getElementById("all-record");
  recordWrapper.innerHTML = "";

  
  existingRecords.forEach((record, index) => {
    var recordContainer = createRecordCard(record, index);
    recordWrapper.appendChild(recordContainer);
  });
  
}

function createRecordCard(record, index) {
  let createRecord = document.createElement("tr");
  createRecord.className = "row";
  createRecord.innerHTML = `<td>
  <div class="image">
    <img
      src="https://www.elevenforum.com/proxy.php?image=https%3A%2F%2Fi.hizliresim.com%2Fqde7y7b.png&hash=8840a7826b2be91b53ca4f36d7726152"
      alt="Card Image"
    />
  </div>
</td>
<td class="text-sm">${record.fullname}</td>
<td class="text-sm">${record.email}</td>
<td class="text-sm">${record.number}</td>
<td>
  <button class="btn btn-theme" type="button" onclick="EditToggleOpen(${index})"><i class="ri-edit-box-line"></i></button>
  <button class="btn btn-red" type="button" onclick="deleteOneItem(${index})"><i class="ri-delete-bin-6-line"></i></button>
</td>`;
  return createRecord;
}

// Delete items
function deleteOneItem(index) {
  // Ask for confirmation
  let confirmDelete = confirm("Are you sure you want to delete this item?");

  // If the user clicks "OK" (true), proceed with deletion
  if (confirmDelete) {
    existingRecords.splice(index, 1);
    localStorage.setItem("record", JSON.stringify(existingRecords));

    displayAllrecord();
    updateRecordLength();
  } else {
    // If the user clicks "Cancel" (false), do nothing
    alert("Deletion canceled");
  }
}


// Update Recorde length
function updateRecordLength(){
  let allExistingRecord = JSON.parse(localStorage.getItem("record")) || [];
  let length = allExistingRecord.length;
  document.getElementById("lengthUpdate").innerText = length
}

// Clear All recorde
function clearAllRecord(){
  if(existingRecords.length !== 0){
    alert("Are You want to Clear all Recorde please Confirm Us")
    let confirmValue = prompt("Enter Y/N if You want to delete");
    if(confirmValue === "y" || confirmValue === "Y"){
      existingRecords = [];
      localStorage.setItem("record", JSON.stringify(existingRecords));
      displayAllrecord();
      updateRecordLength();
    }else{
      alert("All Deletion canceled")
    }
  }
}

updateRecordLength()
displayAllrecord();
