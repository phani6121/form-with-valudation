const form = document.getElementById("form").value;
const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const password2 = document.getElementById("password2").value;

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    //get the values from the inputs 
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    // console.log();

    if (usernameValue === "") {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        //add success class
        SetSuccessFor(username);
    }
    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blank');
    } else {
        SetSuccessFor(email);
    }
    if (passwordValue === "") {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        SetSuccessFor(password);
    }
    if (password2Value === "") {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        SetSuccessFor(password2);
    }
}
//shows success message 


function setErrorFor(input, message) {
    const formControl = input.parentElement;  //.form-control
    const small = formControl.querySelector('small')

    //add error message inside small
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}
function SetSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}