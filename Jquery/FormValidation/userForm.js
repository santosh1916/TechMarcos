function validateForm(form){
    let fname = $("#firstname");
    let lname = $("#lastname");
    let address = $("#address");
    let city = $("#city");
    let state = $("#state");
    let zipcode = $("#zipcode");
    let phone = $("#phone");
    let email = $("#emailid");

    // Code for Show Wrarning if any field not fill
    [fname,lname,address,city,state,zipcode,phone,email].forEach(inputFilled=>{
        if(!inputFilled.val().trim()){
            inputFilled.addClass('show-alert')
        } else{
            inputFilled.removeClass('show-alert')
        }
    })
    if(email.val().trim()){
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.val().trim() === '' || !emailPattern.test(email.val())) {
            showErrorMessage("Email Should be contain Proper email id" , 'danger')
    
        }
        else{
            showErrorMessage("Email Validate Successfully" , 'success')
        }
    }
}


function showErrorMessage(message , type){
    let MessageBox = $("#message-box")
    MessageBox.html(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>MESSEGE:</strong> ${message}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`)
}