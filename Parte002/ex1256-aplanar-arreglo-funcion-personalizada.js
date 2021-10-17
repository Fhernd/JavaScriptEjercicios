// Ejercicio 1256: Utilizar una función recursiva personalizada para aplanar un arreglo.

// [[1, 2], 3, [[4, 5]], [[[6]]]]
// [1, 2, 3, 4, 5, 6]

function aplanarArreglo(datos, acumuladora) {
    if (!Array.isArray(datos)) {
        return;
    } else {
        for (const e of datos) {
            if (Array.isArray(e)) {
                aplanarArreglo(e, acumuladora);
            } else {
                acumuladora.push(e);
            }
        }
    }
}

let resultado = [];
let datos = [[1, 2], 3, [[4, 5]], [[[6]]]];

aplanarArreglo(datos, resultado);
console.log(resultado);
console.log(resultado.length);
