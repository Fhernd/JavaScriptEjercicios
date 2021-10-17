// Ejercicio 1257: Crear una función para juntar los elementos de dos arreglos diferentes.

// unzip

// A = ['A', 1, true]
// B = ['B', 2, false]
// => [['A', 'B'], [1, 2], [true, false]]

function juntarArreglos(datos1, datos2) {
    let contenido = [datos1, datos2];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}

A = ['A', 1, true];
B = ['B', 2, false];

let C = juntarArreglos(A, B);
console.log(C);
