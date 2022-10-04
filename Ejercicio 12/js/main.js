let password = 'coco';

for (let i = 3; i > 0; i--) {
    let requestedPassword = prompt('Introduce la contraseña,' + i + ' intentos restantes.');
    if(password === requestedPassword){
        console.log('Enhorabuena');
        break;
    }
};  

