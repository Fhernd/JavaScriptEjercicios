// Ejercicio 255: Pasar un arreglo como argumento de una función generadora.

function * iterarValores(arreglo){
    for (const e of arreglo) {
        yield e;
    }
}

let generador = iterarValores([2, 3, 5, 7, 11, 13]);

for (const valor of generador) {
    console.log(valor);
}

console.log(generador.next());
