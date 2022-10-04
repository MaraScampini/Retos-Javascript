let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));
let operacion = prompt("Introduce la operación a realizar");

switch(operacion){
    case 'suma':
        console.log("La suma de los dos números es", num1 + num2);
        break;
    case 'resta':
        console.log("La resta de los dos números es", num1 - num2);
        break;
    case 'multiplicacion':
        console.log("La multiplicación de los dos números es", num1 * num2);
        break;
    case 'division':
        console.log("La división de los dos números es", num1 / num2);
        break;
    case 'exponente':
        console.log("El resultado de elevar el primer número al segundo es", num1 ** num2);
        break;
    case 'resto':
        console.log("El resto de la división del primer número entre el segundo es", num1 % num2);
        break;

    default:
        console.log("No es una operación válida");
        break;
};