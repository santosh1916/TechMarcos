// let alermsg = document.querySelector("label[for='zipcode'] + .form-alert");
// alermsg.style.display = 'block'

// function validateForm(form){
//     let fname = form.getElementById("firstname");
//     console.log(fname)
// }
// validateForm()


// let formInputFields = document.querySelectorAll("forms['myForm'] input")
// console.log(formInputFields);
// console.log("Hello")

function validateForm(form){
    let fname = $("#firstname");
    let lname = $("#lastname");
    let address = $("#address");
    let city = $("#city");
    let state = $("#state");
    let zipcode = $("#zipcode");
    let phone = $("#phone");
    let email = $("#emailid");

    if(!fname.val()){
        console.log("fname require")
        fname.addClass("d-block")
    }

    if(!fname.val() || !lname.val() || !address.val() || !city.val() || !state.val() || !zipcode.val() || !phone.val() || !email.val()){
        console.log("All field are require")
    }
    else{
       console.log('Validate from code here')
    }
}

document.getElementById("#firstname").classList.add