// Ejercicio 1410: Listar todas las propiedades y valores de un objeto sobre un arreglo.

function listarPropiedadesValores(objeto) {
    let propiedades = Object.keys(objeto);

    let resultado = [];

    for (const p of propiedades) {
        resultado.push([p, objeto[p]]);
    }

    return resultado;
}

let persona = {
    id: 1001,
    nombre: 'Lina',
    email: 'lina@mail.co'
}

console.log(listarPropiedadesValores(persona));
