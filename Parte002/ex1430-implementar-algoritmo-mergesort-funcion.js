// Ejercicio 1430: Implementar el algoritmo de ordenamiento mergesort en una función.

function mergesort(izquierda, derecha) {
    let i = 0;
    let j = 0;
    let resultados = [];

    while (i < izquierda.length || j < derecha.length) {
        if (i === izquierda.length) {
            resultados.push(derecha[j]);
            ++j;
        } else if (j === derecha.length || izquierda[i] <= derecha[j]) {
            resultados.push(izquierda[i])
            ++i;
        } else {
            resultados.push(derecha[j]);
            ++j;
        }
    }

    return resultados;
}

let datos1 = [2, 11, 13];
let datos2 = [5, 7, 19];

let resultado = mergesort(datos1, datos2);
console.log(resultado); // [2, 5, 7, 11, 13, 19]
console.log(resultado.length);  // 6
