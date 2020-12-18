// Ejercicio 938: Crear una función personalizada para convertir un valor en un entero seguro.

function convertirAEnteroSeguro(numero) {

    if (Number.isNaN(Number.parseInt(numero)) || Number.isNaN(Number.parseFloat(numero))) {
        return null;
    }

    return Math.round(Math.max(Math.min(numero, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
}

console.log(convertirAEnteroSeguro('3.3')); // 3
console.log(convertirAEnteroSeguro(Number.POSITIVE_INFINITY)); // nul
console.log(convertirAEnteroSeguro(Infinity)); // null
console.log(convertirAEnteroSeguro('-3.3')); // -3
