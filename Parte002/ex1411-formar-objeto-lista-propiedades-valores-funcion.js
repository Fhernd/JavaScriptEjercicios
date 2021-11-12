// Ejercicio 1411: Formar un objeto desde un arreglo de propiedades y valores.

function crearObjetoDesdeArreglo(datos) {
    let resultado = {};

    for (const e of datos) {
        resultado[e[0]] = e[1];
    }

    return resultado;
}

let propiedadesValores = [ [ 'id', 1001 ], [ 'nombre', 'Lina' ], [ 'email', 'lina@mail.co' ] ];

console.log(crearObjetoDesdeArreglo(propiedadesValores));
