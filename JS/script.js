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