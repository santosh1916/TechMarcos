$(document).ready(function() {
    // validate signup form on keyup and submit
    $("#myForm").validate({
        rules: {
            fullname: "required",
            email:{
                required:true,
                email:true
            },
            phone:{
                required:true,
                minlength:15
            },
            password:{
                required:true,
                minlength:6
            },
            confirmPassword:{
                required:true,
                equalTo:"#password"
            }
        },
        messages:{
            fullname: "Full Name is required*",
            email:{
                required:"Email Address is required*",
                email:"Please Enter valid email address!"
            },
            phone:{
                required:"Phone No is required*",
                digits:"Please Enter only digits",
                minlength:"Number should be 10 digits"
            },
            password:{
                required:"Password is required",
                minlength:"Please Enter atleast 6 digits"
            },
            confirmPassword:{
                required:"Confirm Password is required",
                equalTo:"Not matched your password"
            }
        },
        submitHandler: function(){
            flashMessage("Register successfully! Now you can Sign In" , 'success');
        }
    });

    function flashMessage(whatMsg, type){
        $("#flash-message").html(`<div class="flash-wrapper ${type}">
        <span class="success-check">
          <i class="ri-checkbox-circle-fill"></i>
        </span>
        <div class="msg-wrapper">
          <h3>Success</h3>
          <p>${whatMsg}</p>
        </div>
        <button type="button" title="Dismiss" class="btn toggle-btn" id="closeBtn">Dismiss</button>
      </div>`);
      setTimeout(()=>{
        $("#flash-message").html('');
      }, 5000);
    }

    $(document).on("click", "#closeBtn", function(){
        $("#flash-message").html('');
        console.log("hello");
    });
});

$(document).ready(()=>{
    $("#phone").mask("+91 99999 99999" , {placeholder:"+91 _____ _____"})
})
