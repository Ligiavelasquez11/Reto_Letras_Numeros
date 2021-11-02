// Array
// Lista vacia
let people = [];
// Lista con datos
let animal = ["Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"];

/**
 * Posiciones   0          1        2           3       4           5
 * ANAMILAES :"Perro", "Gato", "Serpiente", "Lobo", "Escorpion", "Conejo"
 * Item         1          2        3           4       5           6
 */

// console.log(people);
// console.log(animal);

// //for (let i = 0; i < animal.length; i++) {
// //    console.log(animal[i]);
// }

// forin
// for (const an in animal) {
//     console.log(animal[an]);
// }

// //foreach
// animal.forEach(an => {
//     console.log(an);
// });

// animal[6] = "Dragon"; //Agrega un item nuevo al array si conozco el valor.
// animal[6] = "Cocodrilo" //Agrega un item nuevo al array pero puede sobreescribir el valor
animal.push("Ardilla");// Agregamos a lo ultimo sin conocer la posición
animal.unshift("Tigre"); //Agregamos al principio del array
// delete animal[5]; //No usar delete, ya que elimina el strip pero no la posición.((Por buenas practicas no usar)).
animal.splice(5, 2)//Elimina posicion y valor

for (let i = 0; i < animal.length; i++)


animal.forEach((an) => {
    console.log(an);
})
