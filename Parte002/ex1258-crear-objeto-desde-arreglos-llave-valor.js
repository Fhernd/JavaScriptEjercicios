// Ejercicio 1258: Definir una función para crear un objeto a partir de dos arreglos.

// llaves = ['a', 'b', 'c']
// valores = [1, 2, 3]
// => {a: 1, b: 2, c: 3}

function crearObjeto(llaves, valores) {
    let objeto = {};

    for (let i = 0; i < llaves.length; i++) {
        objeto[llaves[i]] = valores[i];
    }

    return objeto;
}

console.log(crearObjeto(['a', 'b', 'c'], [1, 2, 3]));   // {a: 1, b: 2, c: 3}
