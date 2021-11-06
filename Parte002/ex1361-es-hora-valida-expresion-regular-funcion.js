// Ejercicio 1361: Usar una expresión regular para validar si un texto es una hora.

function esHoraValida(texto) {
    let patron = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

    return patron.test(texto);
}

console.log(esHoraValida('09:30:31'));  // true
console.log(esHoraValida('19:30:31'));  // true
console.log(esHoraValida('23:59:59'));  // true

console.log();

console.log(esHoraValida('23:59:60'));  // false
console.log(esHoraValida('25:59:59'));  // false
