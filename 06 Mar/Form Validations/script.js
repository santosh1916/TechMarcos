let fullname = document.getElementById("fullname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pass = document.getElementById("password");
let namePattern = /^[a-zA-Z\s]+$/;
let passPattern = /^[a-zA-Z0-9!@#$%^&*]+$/;
function formVelidator(){
	 if(fullname.value.trim() === ""){
		alert("Full Name should be Filled!")
		return false;
		
	}
	else if(namePattern.test(fullname.value) == false){
		alert("Full Name only allowed Alphabates")
		return false;
	}
	else if(phone.value === ""){
		alert("Phone No required!")
		return false;
	}
	else if(phone.value.length !== 10){
		alert("Phone no should be 10 digits")
		return false;
	}
	else if(email.value == ""){
		email.focus();
		alert("Email is Required")
		return false;
	}
	
	else if(pass.value == ""){
		alert("Password is Required!")
		return false;
	}
	else if(pass.value.length <= 8){
		alert("Password length should be eight or Greater than eight!");
		return false;
	}
	else if(!passPattern.test(pass.value)){
		alert("password should contain atleast one number and one special character");
		return false;
	}
}


