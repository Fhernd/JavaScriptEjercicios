// Ejercicio 1409: Crear una función para listar todos los métodos que tiene un objeto.

function listarMetodosObjeto(objeto) {
    return Object.getOwnPropertyNames(objeto).filter((p) => {
        return typeof objeto[p] == 'function';
    });
}

console.log(listarMetodosObjeto(Math));

console.log();

console.log(listarMetodosObjeto(Array));

console.log();

console.log(listarMetodosObjeto(String));
