const inputName = document.getElementById("inputName")
const inputPass = document.getElementById("inputPassword");
// inputPass.addEventListener("input", validatePassword);

const login = document.createElement("button");

login.setAttribute("id", "login");
login.setAttribute('disabled', "true");


login.innerText = 'Login';

function refreshValidator() {
    validatePassword();
}

function validatePassword() {
    let changeText = document.getElementById("validatorText");
    let password = inputPass.value.length;
    let name = inputName.value.length;

    if (name === 0 || password === 0) {
        login.setAttribute("disabled", "true");
        login.style.backgroundColor = "grey";
    }

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

function loginLog() {
    let name = document.getElementById("inputName").value;
    alert(name)
}


addEventListener("keyup", refreshValidator)
login.addEventListener("click", loginLog)