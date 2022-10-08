let cantidadArray1 = parseInt(prompt("¿Cuántos números quieres?"));
let array1 = [];
for (let i = 0; i < cantidadArray1; i++) {
    let numero = Math.floor(Math.random() * 999);
    array1.push(numero);
}

console.log(array1);

let array2 = [...array1];

let nuevoArray2 = array2.map(a => parseInt(a * Math.random()));

let arrayFinal = [];

for(let i = 0; i < cantidadArray1; i++){
    arrayFinal.push(array1[i] * nuevoArray2[i])
}

console.log(array1);
console.log(nuevoArray2);
console.log(arrayFinal);
