// Fechas
let registerDate = new Date();
// Sacamos el año
let year = registerDate.getFullYear();
// que en código inicia desde cero
// 0 es Enero y 1 Febrero
let month = registerDate.getMonth() + 1;
let day = registerDate.getDate();
let hour = registerDate.getHours();
let minutes = registerDate.getMinutes();
let seconds = registerDate.getSeconds();

console.log(year);
console.log(`${day}/${month}/${year}`);
console.log(`${hour}:${minutes}:${seconds}`);