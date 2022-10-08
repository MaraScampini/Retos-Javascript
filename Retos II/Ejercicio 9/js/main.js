const RellenarArray = () => {
    let cantidad = parseInt(prompt("¿Cuántos números quieres?"));
    let array = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * 10);
        array.push(numero);
    }
    return array;
}

const MostrarContenido = (array) => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
        suma += array[i];
    }
    console.log(suma);
}

MostrarContenido(RellenarArray());
