function addLabel() { 
    document.getElementById('uname').innerHTML = 'Username'; 
    document.getElementById('pass').innerHTML = 'Password'; 
    document.getElementById('cnf_pass').innerHTML = 'Re-Enter Password'; 
} 
addLabel();





document.getElementById("mySubmit").disabled = true;

function chk(){
    const uname = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const cnf_pass = document.getElementById('confirmPassword').value;

    if(uname === ''){
        event.preventDefault();
        document.getElementById('chk_uname').innerHTML = 'Enter Username';
    }
    else{
        document.getElementById('chk_uname').innerHTML = ''; 
    }

    if(pass === ''){
        event.preventDefault();
        document.getElementById('chk_pass').innerHTML = 'Enter Password'; 
    }
    else{
        document.getElementById('chk_pass').innerHTML = ''; 
    }

    if(cnf_pass === ''){
        event.preventDefault();
        document.getElementById('chk_cnf_pass').innerHTML = 'Confirm Password'; 
    }






    else if(pass != cnf_pass){
        event.preventDefault();
        document.getElementById('chk_cnf_pass').innerHTML = 'Password does not match !!!'; 
    }
   



    else{
        document.getElementById('chk_cnf_pass').innerHTML = ''; 
        document.getElementById("mySubmit").disabled = false;
    }
}





function submission(){
    window.alert("User Registration Successful !")
}