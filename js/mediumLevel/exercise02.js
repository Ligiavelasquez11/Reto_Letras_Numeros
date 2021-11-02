// Ciclo For
const btnUser = document.getElementById("btnUser");

// Funcion

const spam = () =>{
    for (let i = 0; i < 5; i++) {
        // i = i+1
        // console.log("Repeticion #", i);
    }
}

//evento
btnUser.onclick = () => {
    spam();
};