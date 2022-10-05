let dia = prompt("Dime un día de la semana").toLowerCase();

switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miércoles':
    case 'jueves':
    case 'viernes':

        console.log("Es laboral");
        break;

    case 'sábado':
    case 'domingo':

        console.log("No es laboral");
        break;
        
    default:
        console.log("Eso no es un día de la semana");
}