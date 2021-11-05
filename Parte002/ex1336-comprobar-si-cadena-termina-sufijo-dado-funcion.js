// Ejercicio 1336: Comprobar si una cadena de caracteres termina en un sufijo dado.

function terminaEn(cadena, sufijo) {
    return cadena.indexOf(sufijo, cadena.length - sufijo.length) !== -1;
}

let frase = 'JavaScript es tremendo';
let sufijo = 'tremendo';

console.log(terminaEn(frase, sufijo));  // true

console.log();

sufijo = 'Tremendo';

console.log(terminaEn(frase, sufijo));  // false
