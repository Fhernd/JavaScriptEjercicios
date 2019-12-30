// Ejercicio 225: Crear una función para proveer la operación de intersección entre dos conjuntos.

Set.prototype.interseccion = function(otroConjunto){
    let conjuntoInterseccion = new Set();

    for (const e of otroConjunto) {
        if (this.has(e)){
            conjuntoInterseccion.add(e);
        }
    }

    return conjuntoInterseccion;
};

let A = new Set([1, 2, 3, 4, 5, 6]);
let B = new Set([5, 6, 7, 8, 9, 10]);

let resultado = A.interseccion(B);
console.log(resultado);

resultado = B.interseccion(A);
console.log(resultado);

console.log();

let C = new Set([0, 11, 13]);

resultado = A.interseccion(C);
console.log(resultado);
