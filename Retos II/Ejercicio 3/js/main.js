let numero = parseInt(prompt("Di un número"));

if(numero == 2 || numero == 3 || numero == 5 || numero == 7){
    console.log("Es un número primo");
} else if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){
    console.log("No es un número primo");
} else {
    console.log("Es un número primo");
}