$(document).ready(function() {
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
});
  
  $(".toggle_btn").click(()=>{
    $(".list-group .list-group").css({
      height:'auto',
      transform: 'scaleY(1)'
    })
  })

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
  
      let onceItemData = {
        itemName: itemName,
        itemDescription: itemDescription,
        itemRate: itemRate,
        quantity: quantity,
      };
  
      if (!itemName || !itemDescription || !quantity || !itemRate) {
        isValid = false;
      } else {
        allItemsData.push(onceItemData);
      }

      const totalItemPrice = itemRate * quantity;
      $(this).find(".amount").val(totalItemPrice.toFixed(2));
      totalAmount += totalItemPrice;
    });
  
    $("#totalAmount").text(totalAmount.toFixed(2));
    $("#addItem-btn").prop("disabled", !isValid);
    $("#submit-btn").prop("disabled", !isValid);

    return allItemsData;
  }
  


  $("#submit-btn").click(() => {
    let oneTimeAllData = [];
    let itemsData = updateRowData().length || null;
    let invoiceNo = $("#invoice_no").val();
    let refrenceNo = $("#refrence_no").val();
    $("#company_form").each(function(){
      const companyName = $(this).find("#company_name").val() || null;
      const contactNumber = $(this).find("#phone_no").val() || null;
      const companyCity = $(this).find("#city").val() || null;
      const companyState = $(this).find("#state").val() || null;
      const zip_code = $(this).find("#zip").val() || null;

      if(companyName && contactNumber && companyCity && companyState && zip_code){
        
      }
      let data = {
        companyName : companyName,
        companyNumber : contactNumber,
        companyCity : companyCity,
        companyState : companyState,
        companyZipCode : zip_code,
      }
    })
  });
  







  // Update data if any change is made
  function onchangeUpdation() {
    updateRowData();
  }
  