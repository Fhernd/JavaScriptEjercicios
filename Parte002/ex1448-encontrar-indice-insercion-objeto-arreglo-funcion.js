// Ejercicio 1448: Encontrar el índice de inserción de un objeto en un arreglo de objetos.

function encontrarIndiceInsercion(objetos, objeto, funcionInsercion) {
    let esDescendente = funcionInsercion(objetos[0]) > funcionInsercion(objetos[objetos.length - 1]);
    let valor = funcionInsercion(objeto);

    let indice = objetos.findIndex(e => esDescendente ? valor >= funcionInsercion(e) : valor <= funcionInsercion(e));

    return indice == -1 ? objetos.length : indice;
}

let objetos = [{a: 3}, {a: 7}];
console.log(objetos);

console.log();

let objeto = {a: 5};
console.log(objeto);

console.log();

let indice = encontrarIndiceInsercion(objetos, objeto, o => o.a);
console.log(indice);    // 1

console.log();

objeto = {a: 11};
console.log(objeto);
indice = encontrarIndiceInsercion(objetos, objeto, o => o.a);
console.log(indice);    // 2
