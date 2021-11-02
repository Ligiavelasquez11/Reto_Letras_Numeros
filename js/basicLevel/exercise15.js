// Guardar los siguientes datos de usuarios
/**
 * Nombre
 * Apellido
 * Edad
 * telefono
 * celular
 * dirección
 *
 */
//
 const bntUser = document.getElementById("btnUser");
 const wellcome = document.getElementById("wellcome");
 const lastName = document.getElementById("lastName");
 


//Funciones
const userData = () => {
  let userName = prompt("ingresa tu nombre");
  let lastName = prompt("ingresa tu apellido");
  let age = prompt("Ingresa tu edad");
  let mobile = prompt("Ingresa tu telefono");
  let address = prompt("Ingresa tu dirección");

  localStorage.setItem("userName", userName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("age", age);
  localStorage.setItem("mobile", mobile);
  localStorage.setItem("address", address);

};

if (localStorage.getItem("userName")
) {
    wellcome.innerHTML = "Su nombre es: " + localStorage.getItem("userName")
    lastName.innerHTML = "Su apellido es: " + localStorage.getItem("lastName")
}

// evento
bntUser.onclick = () => {
    userData();
}


