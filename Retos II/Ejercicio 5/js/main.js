let numero = parseInt(prompt("Introduce un número"));

// METODO TO STRING

console.log(numero.toString(2));

// METODO ARRAY

const DecimalBinario = (numero) => {

let binario = [];

while(numero !== 0) {
    let dividendo = Math.floor(numero / 2);
    let resto = numero % 2;
    numero = dividendo;
    binario.push(resto);
}

return (binario.reverse()).join("");
}

console.log(DecimalBinario(numero));

// METODO RECURSIVO

const NumeroBinario = (numero) => {

    if(numero == 0) {
        return 0;
    } else {
        return 10 * NumeroBinario(Math.floor(numero / 2)) + numero % 2;
    }
}

console.log(NumeroBinario(numero));