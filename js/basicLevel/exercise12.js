let userName = prompt("ingresa tu nombre");
let age = prompt("Ingresa tu edad");

// switch
switch (age) {
    case "18":
        alert("Tienes permiso para ver el catalogo");
        break;
        // el break es para romper y no siga revisando mas casos
    default:
        alert("No tienes permiso para ver el catalogo");
        break;
}