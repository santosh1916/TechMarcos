document.addEventListener('DOMContentLoaded', function() {
   var firstNameInput = document.getElementById('firstname');
   var lastNameInput = document.getElementById('lastname');
   var addressInput = document.getElementById('address');
   var phoneInput = document.getElementById('phone');
   var fullNamePreview = document.getElementById('fullname');
   var addressPreview = document.getElementById('addressline');
   var phonePreview = document.getElementById('phonenumber');


   // event when input filled
   firstNameInput.addEventListener('input', updatePreview);
   lastNameInput.addEventListener('input', updatePreview);
   addressInput.addEventListener('input', updatePreview);
   phoneInput.addEventListener('input', updatePreview);


   function updatePreview() {

       let fullName = firstNameInput.value + ' ' + lastNameInput.value;
       fullNamePreview.textContent = fullName;
   }
});

function validateForm(form){
let fname = form.querySelector("#firstname")
console.log(fname)
}