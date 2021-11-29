// Ejercicio 1450: Comprobar si un arreglo se encuentra ordenado usando una función personalizada.

function arregloEstaOrdenado(datos) {
    if (datos.length <= 1) {
        return true;
    }

    const DIRECCION = datos[1] - datos[0];

    for (let i = 2; i < datos.length; i++) {
        if ((datos[i] - datos[i - 1]) * DIRECCION < 0) {
            return false;
        }
    }

    return true;
}

console.log(arregloEstaOrdenado([1, 2, 3]));    // true
console.log(arregloEstaOrdenado([1, 3, 2]));    // false
console.log(arregloEstaOrdenado([1, 3, 11, 13]));    // true
console.log(arregloEstaOrdenado([1]));    // true
console.log(arregloEstaOrdenado([]));    // true
