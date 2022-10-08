const RellenarValores = () => {

let array = []

for(let i = 0; i < 10; i++){
    let numero = parseInt(prompt("Introduce un número"));
    array.push(numero);
}

return array;
}

const MostrarValores = (array) => {

for(let i = 0; i < 10; i++){
    console.log(`El índice ${i} corresponde al valor ${array[i]}`);
}

}

MostrarValores(RellenarValores());