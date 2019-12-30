// Ejercicio 224: Crear una función para proveer la operación de unión entre conjuntos.

Set.prototype.union = function(otroConjunto){
    let conjuntoUnion = new Set();

    for (const e of this) {
        conjuntoUnion.add(e);
    }

    for (const e of otroConjunto) {
        conjuntoUnion.add(e);
    }

    return conjuntoUnion;
}

let A = new Set([1, 2, 3, 4, 5, 6]);
let B = new Set([5, 6, 7, 8, 9, 10]);

let resultado = A.union(B);

console.log(resultado);

resultado = B.union(A);

console.log(resultado);
