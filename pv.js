const inputPass = document.getElementById("inputPassword");
inputPass.addEventListener("input", validatePassword);

function validatePassword() {
    let changeText = document.getElementById("validatorText");
    let password = document.getElementById("inputPassword").value;

    if (password.length > 10) {
        changeText.innerText = "¡Contraseña segura!";
        changeText.setAttribute("class", "segura");
    }

    if (password.length < 10 && password.length >= 8) {
        changeText.innerText = "La contraseña no es demasiado segura.";
        changeText.setAttribute("class", "medioSegura");
    }

    if (password.length < 8) {
        changeText.innerText = "La contraseña es insegura.";
        changeText.setAttribute("class", "noSegura");
    }
}
