let ventas = parseInt(prompt("Introduce el número de ventas."));
let suma = 0;

for(let i = 1; i <= ventas; i++){
    suma += parseInt(prompt("Introduce el importe"));
}

console.log(suma);