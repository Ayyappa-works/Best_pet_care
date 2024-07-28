function contact(){
    //name
    let name=document.getElementById("username").value;
    const nameexp = /^[a-z]+$/;
    let namestatus = false;
    if(name === ""){
        document.getElementById("Emptyname").innerHTML="For submission, the name is mandatory";
    }
    else if(name.match(nameexp)){
        namestatus = true;
    }
    else{
        document.getElementById("Emptyname").innerHTML="The name is invalid";
    }
    
    //email
    let email =document.getElementById("email").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus = false;
    
    if(email === ""){
        document.getElementById("EmptyEmail").innerHTML="For submission, the email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("EmptyEmail").innerHTML="Invalid email";
        }
    }

    //return
    if(namestatus === true && emailstatus === true){
        alert("Your comment has been received. We will answer or help you through the email submitted in the form");
    }
}

function Booknow(){
    let name=document.getElementById("username").value;
    const nameexp = /^[a-z]+$/;
    let namestatus = false;
    if(name === ""){
        document.getElementById("emptyname").innerHTML="For Booking, the name is mandatory";
    }
    else if(name.match(nameexp)){
        namestatus = true;
    }
    else{
        document.getElementById("emptyname").innerHTML="The name is invalid";
    }

    //number validation
    let number=document.getElementById("Phonenumber").value;
    const numberexp = /^[0-9]+$/;
    let numberstatus= false;

    if(number ===""){
        document.getElementById("emptynumber").innerHTML="number is mandatory";
    }
    else{
        if(number.match(numberexp)){
            if(number.length === 10){
                numberstatus=true;
            }
            else{
                document.getElementById("emptynumber").innerHTML="invalid phone number";
            }
        }
        else{
            document.getElementById("emptynumber").innerHTML="only numbers";
        }
    }
    

    //email
    let email =document.getElementById("emailid").value;
    const emailexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailstatus = false;
    
    if(email === ""){
        document.getElementById("emptyemail").innerHTML="For Booking, the email is mandatory";
    }
    else{
        if(email.match(emailexp)){
            emailstatus = true;
        }
        else{
            document.getElementById("emptyemail").innerHTML="Invalid email";
        }
    }
    //return validation
    if(namestatus === true && emailstatus === true && numberstatus === true){
        alert("Thank you for booking. We will inform you as soon as possible");
    }
}