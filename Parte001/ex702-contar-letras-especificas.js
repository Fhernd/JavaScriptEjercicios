// Ejercicio 702: Crear una función para determinar si hay la misma cantidad de letras a y e en un texto.

function igualdadCantidadLetrasAE(texto) {
    return texto.replace(/[^a]/g, '').length === texto.replace(/[^e]/g, '').length;
}

console.log(igualdadCantidadLetrasAE('cae'));   // true
console.log(igualdadCantidadLetrasAE('perro'));   // false
console.log(igualdadCantidadLetrasAE('letra'));   // true
console.log(igualdadCantidadLetrasAE('false'));   // true
console.log(igualdadCantidadLetrasAE('true'));   // false
