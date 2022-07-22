let email = document.getElementById('email')
let password = document.getElementById('password')
let loginForm = document.getElementById('loginForm')
let signUpForm = document.getElementById('signUpForm')
let passError = document.getElementById('password-error')
let mailError = document.getElementById('email-error')
let fname = document.getElementById('fname')
let smail = document.getElementById('sign-up-mail')
let spassword = document.getElementById('sign-up-password')
let scpassword = document.getElementById('sign-up-cpassword')

loginForm.addEventListener("submit", e => {
    const userMail = email.value;
    const userPass = password.value;
    let output = JSON.parse(localStorage.getItem(userMail))
    e.preventDefault();
    if (email.value === "" || email.value == null) {
        mailError.innerText = "Email is required"
    } else {mailError.innerText = ""}

    if (password.value.length === 0) {
        passError.innerText = "Password must not be empty"
    } else {passError.innerText = ""}

    if (userMail === output.email && userPass === output.password) {
        window.location.href = '/html/landingpage.html';
    } else {
        alert("Wrong email or password")
    }
})



