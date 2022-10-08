let numero = parseInt(prompt("Di un número"));

const Factorial = (numero) => {
    if (numero == 1) {
        return 1;
    } else {
        return numero * Factorial(numero - 1);
    }
}

// La función recursiva se llama a sí misma hasta que se da el caso inicial. Es decir, aquí:
/* 
Factorial(4)
    4 * Factorial(3)
        3 * Factorial(2)
            2 * Factorial(1)
                1

*/

let resultado = Factorial(numero);

console.log(`El factorial de ${numero} es ${resultado}`);