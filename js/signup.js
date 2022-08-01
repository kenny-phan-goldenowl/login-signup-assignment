let signUpForm = document.getElementById('signUpForm')
let fname = document.getElementById('fname')
let smail = document.getElementById('sign-up-mail')
let spassword = document.getElementById('sign-up-password')
let scpassword = document.getElementById('sign-up-cpassword')
let sbtn = document.getElementById('sbtn')

signUpForm.addEventListener("submit", e => {
    let fnameError = document.getElementById('fname-error')
    let smailError = document.getElementById('smail-error')
    let spassError = document.getElementById('spass-error')
    let cspassError = document.getElementById('cspass-error')
    const userName = fname.value;
    const userMail = smail.value;
    const userPass = spassword.value;
    const account = {
        firstName: userName,
        email: userMail,
        password: userPass
    }
    e.preventDefault();
    
    if (fname.value === "" || fname.value == null) {
        fnameError.innerText = "Name is required"
    } else {fnameError.innerText = ""};

    if (fname.value.trim().length > 24 ) {
        fnameError.innerText = "Name cannot be longer than 24 symbols"
    };

    if (smail.value === "" || smail.value == null) {
        smailError.innerText = "Email is required"
    } else {smailError.innerText = ""};

    if (smail.value.trim().length > 24 ) {
        smailError.innerText = "Email cannot be longer than 24 symbols"
    };

    if (spassword.value === "" || spassword.value == null) {
        spassError.innerText = "Password must not be empty"
    } else {spassError.innerText = "" };

    if (scpassword.value === "" || scpassword.value == null) {
        cspassError.innerText = "Confirm password cant be empty"
    } else if (scpassword.value !== spassword.value) {
        cspassError.innerText = "Does not macth"
    } else {cspassError.innerText = ""}

    if (userName && userMail && userPass && spassword.value === scpassword.value ) {
        alert("Sign up successful, redirecting to login page")
        localStorage.setItem(userMail, JSON.stringify(account))
        window.location.href = "/html/login.html"
    }
});

// sbtn.onclick = () => {
//     const userName = fname.value;
//     const userMail = smail.value;
//     const userPass = spassword.value;
//     const account = {
//         firstName: userName,
//         email: userMail,
//         password: userPass
//     }
//     const account2 = {
//         firstName: userName,
//         email: userMail,
//         password: userPass
//     }

//     console.log(userName);
//     console.log(userMail);
//     console.log(userPass);

//     if (userName && userMail && userPass) {
//         localStorage.setItem("user", JSON.stringify(account))
//     }
//     let output = JSON.parse(localStorage.getItem("user"))
//     console.log(output)
//     console.log(account2)
//     console.log(account2.firstName == output.firstName)
// }

// let output = JSON.parse(localStorage.getItem("user"))
// console.log(output)
