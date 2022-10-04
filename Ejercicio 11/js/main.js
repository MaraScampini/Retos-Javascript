let dia = prompt("Dime un día de la semana");

switch (dia) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':

        console.log("Es laboral");
        break;

    case 'Sábado':
    case 'Domingo':

        console.log("No es laboral");
        break;
        
    default:
        console.log("Eso no es un día de la semana");
}