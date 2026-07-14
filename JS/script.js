// alert("printing")

function login(event){
    event.preventDefault();
    const email = "user@gmail.com";
    const password = "user123";

    const inputEmail = document.getElementById("email").value;
    const inputPassword = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(inputEmail === email && inputPassword === password) {
        alert ("Login Successful!");
        window.location.href = "index.html";
    }
    else{
        error.innerText = "Invalid email or password.";
    }
}

function togglePassword(){
    let passwordInput = document.getElementById("password")

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function toggleMenu(){
    let menu = document.getElementById("navMenu");
    let icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
 } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
 }
}