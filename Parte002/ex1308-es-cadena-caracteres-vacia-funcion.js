// Ejercicio 1308: Comprobar si una cadena de caracteres está vacía por medio de una función.

function esCadenaVacia(cadena) {
    return cadena.length === 0;
}

console.log(esCadenaVacia('                ')); // false
console.log(esCadenaVacia("                ")); // false
console.log(esCadenaVacia(`                `)); // false

console.log();

console.log(esCadenaVacia('')); // true
console.log(esCadenaVacia("")); // true
console.log(esCadenaVacia(``)); // true
