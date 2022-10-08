
const RellenarArray = () => {
    let array = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres?"));
    let min = parseInt(prompt("Indica el número mínimo"));
    let max = parseInt(prompt("Indica el número máximo"));
    while (array.length < cantidad) {
        let numero = Math.floor(Math.random() * max + 1);

        while(numero < min){
            numero = Math.floor(Math.random() * max + 1);
        }
        switch (numero) {
            case numero == 2:
            case numero == 3:
            case numero == 5:
            case numero == 7:
                array.push(numero);
                break;
            default:
                if (numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0) {
                    array.push(numero);
                }
        }
    }
    console.log(array);
    console.log(Math.max(...array));
}

RellenarArray();
