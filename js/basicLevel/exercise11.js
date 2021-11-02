// Boton
const bntUser = document.getElementById("btnUser");

const netflix = () => {
  //variantes
  let userName = prompt("ingresa tu nombre");
  let age = prompt("Ingresa tu edad");
  let epilepcia = prompt(
    "Sufres de ataques de epilepcia  \n Responde : \n Si \n No "
  );

  //variantes nulas
  if (
    userName == null ||
    userName == "" ||
    age == null ||
    age == "" ||
    epilepcia == null ||
    epilepcia == ""
  ) {
    return alert("Error en el momento de ingresar alguno de los datos");
  }

  epilepcia = epilepcia.toLowerCase(); //toUpperCase(); caso de mayuculas
  userName = userName.toLowerCase();

  // 1- Validaciones
  // 2- Tipo de Datos

  //Variente edad y epilepcia
  if (age >= 18 && epilepcia == "no") {
    alert("Tienes permiso al catalogo de peliculas violentas");
  } else {
    if (epilepcia == "si" || epilepcia == "no") {
      alert("No tienes permiso al catalogo");
    } else {
      alert("Favor ingresar en epilepcia solo Si o No");
    }
  }

  // Si es menor que 10 años
  if (age <= 10) {
    alert("Desbloqueaste la sección junior");
  }

  // o que se llame juan o que tenga 100 años
  if (userName == "Juan" || age == 100) {
    alert("Recuerda que no tienes que pagar subscripción");
  }
};

// evento
bntUser.onclick = () => {
  netflix();
};

/**
 * > Mayor (numericos)
 * >= Mayor o igual (numericos)
 * < Menor (numericos)
 * <= Menor o igual (numericos)
 * == Igual o comparación (todo)
 *  === El compara el tipo de dato y el valor
 * != Diferente ( todo valor)
 * !== Diferente (al tipo dato y valor)
 * */
