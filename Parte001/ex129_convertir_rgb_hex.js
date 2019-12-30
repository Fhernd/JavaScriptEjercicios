// Ejercicio 129: Convertir un color en RGB (Red, Green, Blue) a Hexadecimal.

function rgbAHex(r, g, b){
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

let rojo = 255;
let verde = 255;
let azul = 255;

let hex = rgbAHex(rojo, verde, azul);
console.log(hex);

console.log();

verde = 0;
azul = 0;
hex = rgbAHex(rojo, verde, azul);
console.log(hex);
