// Ejercicio 1364: Validar si un texto es un código postal canadiense válido con una expresión regular.

function esCodigoPostalCanadienseValido(texto) {
    let patron = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;

    return patron.test(texto);
}

console.log(esCodigoPostalCanadienseValido('K9V5Y3'));      // true
console.log(esCodigoPostalCanadienseValido('123456'));      // false
