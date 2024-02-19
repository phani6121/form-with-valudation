//THIS IS GETTING ERROR MESSAGE FOR THE SHORT CUNT

function addUser() {

    const user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    for (const objectKey in user) {
        validation(user[objectKey], objectKey) // document.getElementById("fname").value,fname
    }

    function validation(elementValue, elementId) {
        if (elementValue.length == 0) {
            document.getElementById(`${elementId}error`).style.display = "block"
        }
        else {
            document.getElementById(`${elementId}error`).style.display = "none"
        }
    }
}


// THIS GETTING ERROR MESSAGE FOR THE INDIVIDUAL AND LENGTH PROCESS

// function addUser() {
//     //This is the individual to get error massage
//     const fname = document.getElementById("fname").value
//     const lname = document.getElementById("lname").value
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value

//     if (fname.length == 0) {
//         document.getElementById("fnameerror").style.display = "block"
//     }
//     else {
//         document.getElementById("fnameerror").style.display = "none"
//     }

//     if (fname.length == 0) {
//         document.getElementById("lnameerror").style.display = "block"
//     }
//     else {
//         document.getElementById("lnameerror").style.display = "none"
//     }

//     if (fname.length == 0) {
//         document.getElementById("emailerror").style.display = "block"
//     }
//     else {
//         document.getElementById("emailerror").style.display = "none"
//     }

//     if (fname.length == 0) {
//         document.getElementById("passworderror").style.display = "block"
//     }
//     else {
//         document.getElementById("passworderror").style.display = "none"
//     }
// }

// THIS IS GETTING OBJECT KEYS AND VALUES

// function addUser() {

//     const user = {
//         fname: document.getElementById("fname").value,
//         lname: document.getElementById("lname").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value
//     }

//     for (const objectKey in user) {
//         console.log(objectKey);// This is the way to get keys
//         console.log(user[objectKey]);//This is the way to get values
//     }
// }