// Usuário e senha 
const USERNAME = "admin";
const PASSWORD = "1234";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USERNAME && password === PASSWORD) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "../html/inventory.html";
    } else {
        document.getElementById("errorMessage").innerText = "Usuário ou senha incorretos.";
    }
});

