// Ejercicio 552: Capturar una cantidad indefinida de números y sumarlos usando Node.js.

const readline = require('readline');
let suma = 0;

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Ingrese varios números por cada línea. Ingrese "Salir" para terminar la captura.');

interfazCaptura.setPrompt('>> ');
interfazCaptura.prompt();

interfazCaptura.on('line', function(entrada){
    entrada = entrada.trim();

    if(entrada === 'Salir'){
        interfazCaptura.close();
        return;
    } else {
        entrada = Number(entrada);

        suma += entrada;
    }
});

interfazCaptura.on('close', function(){
    console.log(`El total de los números es igual a ${suma}`);

    process.exit(0);
});
