let num1 = parseInt(prompt("Introduce el primer número"));
let num2 = parseInt(prompt("Introduce el segundo número"));
let operacion = prompt("Introduce la operación a realizar");
let resultado = 0;

switch(operacion){
    case 'suma':
        resultado = num1 + num2;
        alert("La suma de los dos números es " +  resultado);
        break;
    case 'resta':
        resultado = num1 - num2;
        alert("La resta de los dos números es " +  resultado);
        break;
    case 'multiplicacion':
        resultado = num1 * num2;
        alert("La multiplicación de los dos números es " +  resultado);
        break;
    case 'division':
        resultado = num1 / num2;
        alert("La división de los dos números es " +  resultado);
        break;
    case 'exponente':
        resultado = num1 ** num2;
        alert("El resultado de elevar el primer número al segundo es " +  resultado);
        break;
    case 'resto':
        resultado = num1 % num2;
        alert("El resto de la división del primer número entre el segundo es " +  resultado);
        break;

    default:
        alert("No es una operación válida");
        break;
};