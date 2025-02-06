const inputPass = document.getElementById("inputPassword");
inputPass.addEventListener("key", validatePassword);
let password = "";

function validatePassword() {
    password += document.getElementById("inputPassword").value;
    console.log(password);

    if (password.length > 10) {
        document.getElementById("validatorText").innerText =
            "¡Contraseña segura!";
        document.getElementById("validatorText").style.color = "green";
        document.getElementById("validatorText").style.visibility = "visible";
    }

    if (password.length < 10 && password.length > 8) {
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
