const inputName = document.getElementById("inputName")
const inputPass = document.getElementById("inputPassword");
inputPass.addEventListener("input", validatePassword);

const login = document.createElement("button");

login.setAttribute("id", "login");
login.setAttribute('disabled', "true");


login.innerText = 'Login';

function validatePassword() {
    let changeText = document.getElementById("validatorText");
    let password = document.getElementById("inputPassword").value.length;
    let name = document.getElementById("inputName").value.length;

    if (password > 10 && name > 0) {
        changeText.innerText = "¡Contraseña segura!";
        changeText.setAttribute("class", "segura");
        login.style.backgroundColor = "blue";
        login.removeAttribute("disabled");

    }

    if (password < 10 && password >= 8) {
        changeText.innerText = "La contraseña no es demasiado segura.";
        changeText.setAttribute("class", "medioSegura");
    }

    if (password < 8) {
        changeText.innerText = "La contraseña es insegura.";
        changeText.setAttribute("class", "noSegura");
    }
}

document.body.appendChild(login);