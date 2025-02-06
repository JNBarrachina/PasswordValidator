const inputPass = document.getElementById("inputPassword");
inputPass.addEventListener("click", validatePassword);

function validatePassword() {
    password = document.getElementById("inputPassword").value;

    if (password.lenght < 8) {
        document.getElementById("validatorText").innerText =
            "La contraseña no es segura";
        document.getElementById("validatorText").style.color = "red";
    } else if (8 < password.lenght < 10) {
        document.getElementById("validatorText").innerText =
            "La contraseña no es demasiado segura";
        document.getElementById("validatorText").style.color = "orange";
    } else {
        document.getElementById("validatorText").innerText =
            "¡Contraseña segura!";
        document.getElementById("validatorText").style.color = "green";
    }
}
