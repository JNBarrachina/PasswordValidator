const inputPass = document.getElementById("inputPassword");
inputPass.addEventListener("input", validatePassword);

function validatePassword() {
    let password = document.getElementById("inputPassword").value;

    if (password.length > 10) {
        document.getElementById("validatorText").innerText =
            "¡Contraseña segura!";
        document.getElementById("validatorText").style.color = "green";
        document.getElementById("validatorText").style.visibility = "visible";
    }

    if (password.length < 10 && password.length >= 8) {
        document.getElementById("validatorText").innerText =
            "La contraseña no es demasiado segura";
        document.getElementById("validatorText").style.color = "orange";
        document.getElementById("validatorText").style.visibility = "visible";
    }

    if (password.length < 8) {
        document.getElementById("validatorText").innerText =
            "La contraseña es insegura.";
        document.getElementById("validatorText").style.color = "red";
        document.getElementById("validatorText").style.visibility = "visible";
    }
}
