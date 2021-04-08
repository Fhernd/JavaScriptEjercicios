// Ejercicio 1028: Definir una función recursiva para aplanar un arreglo.

// [1, [[2]], 3, [[[[5]]]], 7, 11, [13]]
// [1, 2, 3, 5, 7, 11, 13]

function aplanarArreglo(datos, acumulador) {

    for(let i = 0; i < datos.length; ++i) {

        if (Array.isArray(datos[i])) {
            aplanarArreglo(datos[i], acumulador);
        } else {
            acumulador.push(datos[i]);
        }
    }
}

let numeros = [1, [[2]], 3, [[[[5]]]], 7, 11, [13]];
let resultado = [];
aplanarArreglo(numeros, resultado);
console.log(resultado); // [1, 2, 3, 5, 7, 11, 13]
