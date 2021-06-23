// Ejercicio 1166: Multiplicar el contenido de un arreglo y validar que los elementos seas numéricos.

function esNumerico(dato) {
    return !isNaN(parseFloat(dato)) && isFinite(dato);
}

function multiplicarContenidoArreglo(contenido) {
    if (!Array.isArray(contenido)) {
        return null;
    }

    let multiplicacion = 1;

    for (let i = 0; i < contenido.length; i++) {
        const elemento = contenido[i];
        
        if (esNumerico(elemento)) {
            multiplicacion *= parseFloat(elemento);
        }
    }

    return multiplicacion;
}

console.log(multiplicarContenidoArreglo([1, 2, 3, 4, 5]));    // 120
console.log(multiplicarContenidoArreglo([2, 3, 5]));    // 30
console.log(multiplicarContenidoArreglo([2, 3, 5, 'A', 7]));    // 210
console.log(multiplicarContenidoArreglo([2, 3, 5, 'A', 7, undefined, null, '']));    // 210
