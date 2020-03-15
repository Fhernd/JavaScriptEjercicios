// Ejercicio 551: Capturar datos del usuario usando la entrada estándar (teclado) usando Node.js.

const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('¿Cuál es su correo electrónico?: ', function(respuesta){
    console.log(`Su correo electrónico es: ${respuesta}`);

    interfazCaptura.close();
});
