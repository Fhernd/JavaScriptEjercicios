// Ejercicio 1238: Calcular la diferencia entre dos conjuntos con una función personalizada.

// A = [2, 3, 5, 7]
// B = [11, 7, 13, 19]
// A - B = [2, 3, 5]
// B - A = [11, 13, 19]

function diferenciaAsimetrica(A, B) {
    let resultado = [];

    for(const e of A) {
        if (B.indexOf(e) == -1) {
            resultado.push(e)
        }
    };

    return resultado;
}

console.log(diferenciaAsimetrica([2, 3, 5, 7], [11, 7, 13, 19]));   // [2, 3, 5]
console.log(diferenciaAsimetrica([11, 7, 13, 19], [2, 3, 5, 7]));   // [11, 13, 19]
