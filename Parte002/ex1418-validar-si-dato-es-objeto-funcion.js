// Ejercicio 1418: Validar con una función si un dato específico es un objeto.

function esObjeto(dato) {
    let tipoDato = typeof dato;

    return tipoDato === 'function' || tipoDato === 'object' && !!dato;
}

console.log(esObjeto(new Array())); // true
console.log(esObjeto(new Object()));    // true
console.log(esObjeto(new Set()));   // true
console.log(esObjeto(new Map()));   // true
console.log(esObjeto(new Date()));  // true
console.log(esObjeto(new Number()));    // true
console.log(esObjeto(new Boolean()));   // true

console.log();

console.log(esObjeto('Abc'));   // false
console.log(esObjeto(123)); // false
console.log(esObjeto(19.17));   // false
console.log(esObjeto(true));    // false
console.log(esObjeto(false));   // false
