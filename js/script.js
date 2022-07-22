const email = document.getElementById('email')
const password = document.getElementById('password')
const loginForm = document.getElementById('loginForm')
const signUpForm = document.getElementById('signUpForm')
const passError = document.getElementById('password-error')
const mailError = document.getElementById('email-error')
const fname = document.getElementById('fname')
const smail = document.getElementById('sign-up-mail')
const spassword = document.getElementById('sign-up-password')
const scpassword = document.getElementById('sign-up-cpassword')
const cpassError = document.getElementById('cpass-error')

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    if (email.value === "" || email.value == null) {
        mailError.innerText = "Email is required"
    }

    if (password.value.length === 0) {
        passError.innerText = "Password must not be empty"
    }

    if (email.value === "abc" && password.value === "123") {
        window.location.href = 'landingpage.html';
    } else {
        alert("Wrong email or password")
    }

})




