  // Initialize sortable on the table body
  $(".t-body").sortable({
    items: ".table-row",
    containment: "parent",
    axis: "y",
    handle: ".drag-btn",
    update: function(event, ui) {
      // Additional actions after sorting if needed
    }
  });

  $(".toggle_btn").click(() => {
    $(".list-group .list-group").css({
      height: 'auto',
      transform: 'scaleY(1)'
    })
  });

  $(document).ready(() => {
    $(".list-group .btn").click(function(e) {
      e.preventDefault();

      // Remove "active" class from all buttons
      $(".list-group .btn").removeClass('active');

      // Add "active" class to the clicked button
      $(this).addClass('active');
    });
  });

  $("#invoice-btn").click(() => {
    let formId = `UI${Math.floor(Math.random() * 10000000000 + 1)}`
    $("#invoice_no").val(formId);
    $("#refrence_no").val(formId);
    $("#myForm").addClass("hide-after");
  });

  $("#prev").click(() => {
    location.reload(); // Reloads the current page
  });

  // Create add item form
  let currentIndex = 0;

  function inputRowGen() {
    let randomRate = Math.floor(Math.random() * 1000 + 1);
    let id = currentIndex += 1;
    let html = `<tr class="table-row" id="inputRow${id}">
                  <td class="btn-wrapper"><span class="drag-btn"><i class="ri-draggable"></i></span></td>
                  <td><input type="text" class="form-input itemname" placeholder="Enter Item" required></td>
                  <td><input type="text" class="form-input description" placeholder="Description" required></td>
                  <td><input type="number" class="form-input rate" value="${randomRate}" placeholder="Rate" required></td>
                  <td><input type="number" class="form-input quantity" placeholder="Quantity" value="0" required></td>
                  <td><input type="number" class="form-input amount" placeholder="0.00" readonly></td>
                  <td class="btn-wrapper"><button type="button" class="btn btn-danger" onclick="removeInputRow(${id})"><i class="ri-delete-bin-line"></i></button></td>
                </tr>`;
    $('#box').append(html);
    updateRowData();
  }

  function removeInputRow(inputRowId) {
    $(`#inputRow${inputRowId}`).remove();
    updateRowData();
  }

  function updateRowData() {
    let totalAmount = 0;
    let isValid = true;
    let allItemsData = [];

    $("tr[id^='inputRow']").each(function() {
      const itemName = $(this).find(".itemname").val().trim();
      const itemDescription = $(this).find(".description").val().trim();
      const quantity = parseFloat($(this).find(".quantity").val()) || 0;
      const itemRate = parseFloat($(this).find(".rate").val()) || 0;
      let onceItemData = {};

      if (!itemName || !itemDescription || !quantity || !itemRate) {
        isValid = false;
      } else {
        onceItemData = {
          itemName: itemName,
          itemDescription: itemDescription,
          itemRate: itemRate,
          quantity: quantity,
        }
        allItemsData.push(onceItemData);
      }

      const totalItemPrice = itemRate * quantity;
      $(this).find(".amount").val(totalItemPrice.toFixed(2));
      totalAmount += totalItemPrice;
    });
    $("#totalAmount").text(totalAmount.toFixed(2));
    $("#addItem-btn").prop("disabled", !isValid);
    $("#submit-btn").prop("disabled", !isValid);

    if(allItemsData.length > 0){
      return allItemsData;
    }else{
      return !isValid;
    }
  }

  //  add data to localstorage;
  let invoiceDataBase = JSON.parse(localStorage.getItem("invoiceData")) || [];

  function saveToLocalStorage() {
    oneTimeAllData = [];
    let itemsData = updateRowData();
    let invoiceNo = $("#invoice_no").val() || null;
    let referenceNo = $("#refrence_no").val() || null;
    let invoiceId = {
      invoiceNo: invoiceNo,
      referenceNo: referenceNo
    };

    if (invoiceNo && referenceNo) {
      oneTimeAllData.push(invoiceId);
    }
    if (!updateRowData()) {
      alert("Please add items")
    }else{
      oneTimeAllData.push(itemsData);
    }

    let companyData = {}; // Define companyData outside the loop
    $("#company_form").each(function() {
      const companyName = $(this).find("#company_name").val() || null;
      const contactNumber = $(this).find("#phone_no").val() || null;
      const companyCity = $(this).find("#city").val() || null;
      const companyState = $(this).find("#state").val() || null;
      const zipCode = $(this).find("#zip").val() || null;
      const companyAddress = $(this).find("#address").val() || null;

      if (companyName && contactNumber && companyCity && companyState && zipCode && companyAddress) {
        companyData = {
          companyName: companyName,
          contactNumber: contactNumber,
          companyCity: companyCity,
          companyState: companyState,
          zipCode: zipCode,
          companyAddress: companyAddress
        };
        oneTimeAllData.push(companyData);
      }
    });

    let customerData = {}; // Define customerData outside the loop
    $("#bill-form").each(function() {
      const customerName = $(this).find("#send_to").val() || null;
      const customerNumber = $(this).find("#customer_phone").val() || null;
      const customerCity = $(this).find("#city").val() || null;
      const customerState = $(this).find("#state").val() || null;
      const customerZip = $(this).find("#zip").val() || null;
      const customerAddress = $(this).find("#address").val() || null;
      const issueDate = $(this).find("#issue_date").val() || null;
      const dueDate = $(this).find("#due_date").val() || null;

      if (customerName && customerNumber && customerCity && customerState && customerZip && customerAddress && issueDate && dueDate) {
        customerData = {
          customerName: customerName,
          customerNumber: customerNumber,
          customerCity: customerCity,
          customerState: customerState,
          customerZip: customerZip,
          customerAddress: customerAddress,
          issueDate : issueDate,
          dueDate : dueDate
        };
        oneTimeAllData.push(customerData);
      }
    });

    if (oneTimeAllData.length > 0) {
      invoiceDataBase.push(oneTimeAllData);
      localStorage.setItem("invoiceData", JSON.stringify(invoiceDataBase)); // Store data in localStorage
      console.log("Data saved to localStorage");
      console.log(oneTimeAllData);
      // Clear form data after submission
      $("#myForm")[0].reset();
      $("#box").empty(); // Clear table rows
      currentIndex = 0; // Reset index for new rows
      oneTimeAllData = []; // Reset data array
    } else {
      console.log("Please fill in all required fields");
    }
  }

  // Update data if any change is made
  function onchangeUpdation() {
    updateRowData();
  }

  // Print function
  function printDiv(divId) {
    var printContents = document.getElementById(divId).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    setTimeout(()=>{
      $(".preview").remove()
    },3000)
}

function closePreview(){
  $(".preview").remove()
}



$("#submit-btn").click((event) => {
  event.preventDefault();
  saveToLocalStorage();
  generateInvoice(); // Call generateInvoice() after saving data
});

// Modify generateInvoice() to use local storage directly
function generateInvoice() {
  let invoiceDataBase = JSON.parse(localStorage.getItem("invoiceData")) || [];

  if (invoiceDataBase.length === 0) {
    console.log("No invoice data found");
    return; // Exit the function if no data is available
  }
  let randomNumber = Math.floor(Math.random() * 10 + 5)
  let invoiceId = invoiceDataBase[0][0];
  let itemData = invoiceDataBase[0][1];
  let companyData = invoiceDataBase[0][2];
  let customerData = invoiceDataBase[0][3];
  let subTotal = 0;

  itemData.forEach(function (item) {
    subTotal += item.itemRate * item.quantity;
    let itemRow = `<tr>
                  <td>
                    <span>${item.itemName}</span>
                    <span>${item.itemDescription}</span>
                  </td>
                  <td>
                    <span>${item.itemRate}</span>
                    <span>+Tax</span>
                  </td>
                  <td>${item.quantity}</td>
                  <td>$${item.itemRate * item.quantity}</td>
                </tr>`;
    $("#items-row").append(itemRow); // Append row to table
  });

  let Total_amount = subTotal + (subTotal * randomNumber) / 100;
  let discount = randomNumber + 100;
console.log(subTotal , randomNumber , Total_amount)

  let company_address = `<span class="head-xsm text-dark">${companyData.companyName}</span>
                          <span>${companyData.companyAddress}</span>
                          <span>${companyData.companyCity}, ${companyData.companyState}</span>
                          <span>${companyData.zipCode}</span>
                          <span>India</span>
                          <span>${companyData.contactNumber}</span>`


  let customer_address = `<span class="head-xsm">Billed To</span>
                          <span>${customerData.customerName}</span>
                          <span>${customerData.customerAddress}</span>
                          <span>${customerData.customerCity}, ${customerData.customerState}</span>
                          <span>${customerData.customerZip}</span>
                          <span>India</span>
                          <span>${customerData.customerNumber}</span>`

  let invoiceDets =`<div class="flex-column">
                        <span class="head-xsm">Date Issue</span>
                        <span>${customerData.issueDate}</span>
                    </div>
                    <div class="flex-column">
                        <span class="head-xsm">Invoice Number</span>
                        <span>${invoiceId.invoiceNo}</span>
                    </div>
                    <div class="flex-column">
                        <span class="head-xsm">Amount Due</span>
                        <span class="bold">$${Total_amount}</span>
                    </div>
                    <div class="flex-column">
                        <span class="head-xsm">Due Date</span>
                        <span>${customerData.dueDate}</span>
                    </div>`

  // Generate invoice HTML
   let calData = `<div class="d-flex border-sm">
                  <div class="flex-column text-r w-50">
                      <span>Subtotal</span>
                      <span>Discount</span>
                      <span>Tax</span>
                  </div>
                  <div class="flex-column text-r">
                      <span>$${subTotal}</span>
                      <span>-$${discount}</span>
                      <span>-$${randomNumber}%</span>
                  </div>
                </div>
                <div class="d-flex border-blue">
                  <div class="flex-column text-r w-50">
                      <span>Total</span>
                      <span>Deposit Requested</span>
                  </div>
                  <div class="flex-column text-r">
                      <span>$42424.00</span>
                      <span>-$42424.00</span>
                  </div>
                </div>
                <div class="d-flex text-r">
                  <span class="w-50 head-xsm text-dark">Deposite Due</span>
                  <span class="head-xsm text-dark">$00.0</span>
                </div>`
  $("#company_address").append(company_address);
  $("#customer_address").append(customer_address);
  $("#invoiceDets").append(invoiceDets);
  $("#cal-data").append(calData);
  // Append the generated HTML to a container in your DOM
  $("#printarea").append(html);
}

generateInvoice();