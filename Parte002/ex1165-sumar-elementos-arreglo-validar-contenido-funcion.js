// Ejercicio 1165: Sumar el contenido de un arreglo y validar que el contenido sea numérico.

function esNumerico(dato) {
    return !isNaN(parseFloat(dato)) && isFinite(dato);
}

function sumarContenidoArreglo(contenido) {
    if (!Array.isArray(contenido)) {
        return null;
    }

    let suma = 0;

    for (let i = 0; i < contenido.length; i++) {
        const elemento = contenido[i];
        
        if (esNumerico(elemento)) {
            suma += parseFloat(elemento);
        }
    }

    return suma;
}

console.log(sumarContenidoArreglo([1, 2, 3, 4, 5]));    // 15
console.log(sumarContenidoArreglo([2, 3, 5]));    // 10
console.log(sumarContenidoArreglo([2, 3, 5, 'A', 7]));    // 17
console.log(sumarContenidoArreglo([2, 3, 5, 'A', 7, undefined, null, '']));    // 17
