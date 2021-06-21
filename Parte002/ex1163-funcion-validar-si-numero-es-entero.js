// Ejercicio 1163: Determinar si un valor numérico dado es entero o no a través de una función.

// Z = {-, ..., -3, -2, -1, 0, 1, 2, 3,..., +}

function esEntero(numero) {
    if (typeof numero != 'number') {
        return null;
    }

    return !isNaN(numero) && parseInt(Number(numero)) == numero 
            && !isNaN(parseInt(numero, 10));
}

console.log(esEntero(10));  // true
console.log(esEntero(-10)); // true
console.log(esEntero(-3));  // true
console.log(esEntero(100)); // true
console.log(esEntero(-1.3E6));  // true
console.log(esEntero(1.3E6));   // true

console.log();

console.log(esEntero(1.3)); // false 
console.log(esEntero(-1.3));    // false
console.log(esEntero(Math.PI)); // false
