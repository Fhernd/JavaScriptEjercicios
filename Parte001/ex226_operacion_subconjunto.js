// Ejercicio 226: Crear una función para proveer la operación de subconjunto.

Set.prototype.subconjunto = function(otroConjunto){
    if(this.size > otroConjunto.size){
        return false;
    } else {
        for (const e of this) {
            if (!otroConjunto.has(e)){
                return false;
            }
        }

        return true;
    }
};

let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([1, 2]);

console.log(B.subconjunto(A));

B = new Set([0, 1, 2]);
console.log(B.subconjunto(A));

B = new Set([1, 2, 3, 4, 5, 6, 7]);
console.log(B.subconjunto(A));
