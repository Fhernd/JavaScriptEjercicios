// Ejercicio 1355: Con una expresión regular validar si una cadena representa una fecha válida.

// DD/MM/AA

function esFechaValida(cadena) {
    let patron = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

    return patron.test(cadena);
}

console.log(esFechaValida('06/11/2021'));   // true
console.log(esFechaValida('06/11/2023'));   // true
console.log(esFechaValida('06/11/2143'));   // true

console.log();

console.log(esFechaValida('32/11/2143'));   // false
console.log(esFechaValida('01/13/2143'));   // true
console.log(esFechaValida('13/13/2143'));   // false
console.log(esFechaValida('01/05/123456'));   // false
