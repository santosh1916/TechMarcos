function validateForm() {
    let fname = $("#firstname");
    let lname = $("#lastname");
    let address = $("#address");
    let city = $("#city");
    let state = $("#state");
    let zipcode = $("#zipcode");
    let phone = $("#phone");
    let email = $("#emailid");

    // Remove existing alert classes
    $(".show-alert").removeClass("show-alert");

    // Code for Show Warning if any field is not filled
    [fname, lname, address, city, state, zipcode, phone, email].forEach(inputFilled => {
        if (!inputFilled.val().trim()) {
            inputFilled.addClass('show-alert');
        }
    });

    // Validate email format
    if (email.val().trim()) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.val().trim())) {
            showErrorMessage("Please enter a valid email address", 'warning');
            return false;
        }
    }

    // Validate phone number
    if (phone.val().trim()) {
        const numberPattern = /^\d{10}$/;
        if (!numberPattern.test(phone.val())) {
            showErrorMessage("Please enter a valid 10-digit phone number", 'warning');
            return false;
        }
    }

    // Validate first name and last name to contain only alphabets
    if (fname.val().trim() && !/^[a-zA-Z]*$/.test(fname.val().trim())) {
        showErrorMessage("First name should only contain alphabets", 'warning');
        return false;
    }
    if (lname.val().trim() && !/^[a-zA-Z]*$/.test(lname.val().trim())) {
        showErrorMessage("Last name should only contain alphabets", 'warning');
        return false;
    }

    // Check if all field should be proper field 
    if (fname.val() && lname.val() && city.val() && address.val() && state.val() && zipcode.val() && email.val()) {
        showErrorMessage("Form validated successfully", "success");
    } else {
        return false;
    }

    return true; //true for successfull validation 
}

function showErrorMessage(message, type) {
    let MessageBox = $("#message-box");
    MessageBox.html(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>MESSAGE:</strong> ${message}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`);
}
