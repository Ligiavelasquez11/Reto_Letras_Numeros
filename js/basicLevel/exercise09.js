// DOM
// traemos el boton al que queremos darle click
const btnUser = document.getElementById("btnUser");

const userData = () => {
    alert("Bienvenidos");
}



// Evento click
btnUser.onclick = function () {
    userData();
}