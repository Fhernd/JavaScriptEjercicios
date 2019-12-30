// Ejercicio 227: Crear una función para proveer la operación de diferencia de conjuntos.

Set.prototype.diferencia = function(B){
    let conjuntoDiferencia = new Set();

    for (const e of this) {
        if(!B.has(e)){
            conjuntoDiferencia.add(e);
        }
    }

    return conjuntoDiferencia;
};

let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([4, 5, 6, 7, 8]);

let resultado = A.diferencia(B);
console.log(resultado);

console.log();

resultado = B.diferencia(A);
console.log(resultado);
