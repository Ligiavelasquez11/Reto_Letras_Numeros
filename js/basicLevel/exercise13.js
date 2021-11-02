// Variables globales
const bntUser = document.getElementById("btnUser");
const wellcome = document.getElementById("wellcome");

//funciones
const userData = () => {
    let userName = prompt("Ingresa tu nombre");
    wellcome.innerHTML = "Bienvenido/a : " + userName;
}

// evento
bntUser.onclick = () => {
    userData();
}


