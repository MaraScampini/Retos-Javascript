let numero = parseInt(prompt("Di un número"));
let cifras = 0;

while (numero < 0) {
    numero = parseInt(prompt("Ese número es negativo, di otro."));
}
while (numero >= 1) {
    numero = numero / 10;
    cifras++;
}

console.log(cifras);