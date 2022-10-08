// APLICACIÓN QUE CALCULA ÁREA DE CÍRCULO, CUADRADO O TRIÁNGULO

// CUADRADO = lado ** 2
// TRIÁNGULO = (base * altura) / 2
// CÍRCULO = pi * (radio ** 2)

// INPUT USUARIO FIGURA

let figura = prompt("¿De qué figura quieres calcular el área?").toLowerCase();

// CÍRCULO

let AreaCirculo = (radio) => Math.PI * (radio ** 2);

// TRIÁNGULO

let AreaTriangulo = (base, altura) => base * altura;

// CUADRADO

let AreaCuadrado = (lado) => lado ** 2;

switch(figura) {
    case "circulo":
        let radio = parseFloat(prompt("Introduce el radio del círculo"));
        console.log(AreaCirculo(radio));
        break;
    case "triangulo":
        let base = parseFloat(prompt("Introduce la base del triángulo"));
        let altura = parseFloat(prompt("Introduce su altura"));
        console.log(AreaTriangulo(base, altura));
        break;
    case "cuadrado":
        let lado = parseFloat(prompt("Introduce el lado del cuadrado"));
        console.log(AreaCuadrado(lado));
        break;
    default:
        console.log("No es una figura válida");
};

