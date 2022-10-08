// Generar una cantidad de números enteros aleatorios elegida por el usuario.
// Poder pasar como parámetro entre qué números queremos que los genere, pedidos al usuario. Devuelve un único número aleatorio.

// PARTE 1

let cantidad = parseInt(prompt("¿Cuántos números aleatorios quieres generar?"));
let min = parseInt(prompt("Indica el valor mínimo"));
let max = parseInt(prompt("Indica el valor máximo"));


for(i=0; i < cantidad; i++){
    console.log(Math.floor(Math.random() * (max - min) + min));
}