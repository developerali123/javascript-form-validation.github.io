var password=document.getElementById("password");
        var show=document.getElementById("show");
        var hide=document.getElementById("hide");
        var button=document.getElementById("submit");
        var subject=document.getElementById("subjects");

        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");
        
        // When the user clicks on the password field, show the message box
        password.onfocus = function() {
          document.getElementById("message").style.display = "block";
        }
        
        // When the user clicks outside of the password field, hide the message box
        password.onblur = function() {
          document.getElementById("message").style.display = "none";
        }
        
        // When the user starts to type something inside the password field
        password.onkeyup = function() {
          // Validate lowercase letters
          var lowerCaseLetters = /[a-z]/g;
          if(password.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
          } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        
          // Validate capital letters
          var upperCaseLetters = /[A-Z]/g;
          if(password.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
          } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
          }
        
          // Validate numbers
          var numbers = /[0-9]/g;
          if(password.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
          } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
          }
        
          // Validate length
          if(password.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
          } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
          }
        }

        button.onclick=function(){
            var name=document.getElementById("name");
            if(name.value==""){
                alert("name should not be empty");
                name.focus();
                return false;
            }
            var email=document.getElementById("email");
            if(email.value==""){
                alert("email should not be empty");
                email.focus();
                return false;
            }
            if(email.value.includes("@gmail.com")!=true){
                alert("enter valid email ID");
                email.focus();
                return false;
            }
            var phone=document.getElementById("phone");
            if(phone.value==""){
                alert("phone number should not be empty");
                phone.focus();
                return false;
            }
            if(isNaN(phone.value)){
                alert("phone number should be in numbers");
                phone.focus();
                return false;
            }
            if(phone.value.length<11){
                alert("please enter your valid 11 digit number");
                phone.focus();
                return false;
            }
            if(subject.value==0){
                alert("please enter your subject");
                subject.focus();
                return false;
            }
            alert("Vlidation Done Successfully");
        }
        show.onclick=function(){
            show.style.display="none";
            hide.style.display="block";
            if(password.type="password"){
                password.type="text";
            }
        }
        hide.onclick=function(){
            hide.style.display="none";
            show.style.display="block";
            if(password.type="text"){
                password.type="password";
            }
        }
        var txt=document.getElementById("address");
        var limit=document.getElementById("limit");
            const maxLength=20;
        const warnLength=7;
            txt.addEventListener("keydown",function(){
         let count = txt.value.length;
         console.log(count);
        if(count > maxLength){
            txt.value = txt.value.substring(0,maxLength);
        }
        if(count > warnLength){
            limit.style.color="red";
        }
        limit.innerHTML = (maxLength-count) + " characters left"; 
    })
    txt.addEventListener("keyup",function(){
        let count = txt.value.length;
        console.log(count);
        if(count > maxLength){
            txt.value = txt.value.substring(0,maxLength);
        }
        if(count > warnLength){
            limit.style.color="red";
        }
        limit.innerHTML = (maxLength-count) + " characters left";
    })