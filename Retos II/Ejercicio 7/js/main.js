let euros = parseFloat(prompt("¿Cuántos euros quieres convertir?"));
let moneda = prompt("¿A qué moneda quieres convertirlos?").toLowerCase();
let resultado = 0;

switch(moneda) {
    case "libras":
        resultado = euros * 0.86;
        console.log(`${euros} son ${resultado} libras.`);
        break;
    case "dolares":
        resultado = euros * 1.28611;
        console.log(`${euros} son ${resultado} dólares.`);
        break;
    case "yenes":
        resultado = euros * 129.852;
        console.log(`${euros} son ${resultado} yenes.`);
        break;
    default:
        console.log("Introduce una moneda válida");
}