// Variables globales
const btnUser = document.getElementById("btnUser");

// Funciones
const UserData = () =>{
    //Variables Locales
    let userName = prompt("Ingresa tu nombre");
    let age = prompt("Ingresa tu edad");
    alert(`Bienvenido/a  ${userName}  tu edad es: ${age}`);
}

// evento
btnUser.onclick = function () {
    UserData();
};
