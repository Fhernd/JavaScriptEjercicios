// Ejercicio 692: Comprobar que un número específico se encuentre en un rango dado.

function numeroEnRango(numero, inicio, final) {
    if (inicio < final) {
        return numero >= inicio && numero <= final;
    } else {
        return false;
    }
}

console.log(numeroEnRango(5, 10, 20));  // false
console.log(numeroEnRango(5, 30, 20));  // false
console.log(numeroEnRango(15, 10, 20));  // true
