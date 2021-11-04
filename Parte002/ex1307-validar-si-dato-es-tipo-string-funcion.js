// Ejercicio 1307: Validar si un dato específico es de tipo cadena de caracteres (String).

function esString(dato) {
    return Object.prototype.toString.call(dato) === '[object String]';
}

console.log(esString(123)); // false
console.log(esString('123')); // true
console.log(esString("123")); // true
console.log(esString(`123`)); // true
console.log(esString([1, 2, 3])); // false
