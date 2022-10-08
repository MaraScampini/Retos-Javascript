let array = [];
let largoArray = parseInt(prompt("¿Cuántos números quieres?"));
let digitoFinal = parseInt(prompt("¿En qué número debe acabar?"));

while(digitoFinal > 10 || digitoFinal < 0){
    digitoFinal = parseInt(prompt("¿En qué número debe acabar?"));
};


while (array.length < largoArray) {
    let numero = Math.floor(Math.random() * 300);
    let numeroFinalStr = String(numero).slice(-1);
    let numeroFinal = Number(numeroFinalStr);

    if (numeroFinal == digitoFinal) {
        array.push(numero);
    } 
};

console.log(array);