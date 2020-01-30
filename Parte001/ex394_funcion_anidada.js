// Ejercicio 394: Retornar una función desde otra función.

function multiplicar(n) {
    return function(p) {
        return n * p;
    }
}

let duplicar = multiplicar(2);
console.log(duplicar(2));
console.log(duplicar(3));
console.log(duplicar(5));
console.log(duplicar(10));

console.log();

let triplicar = multiplicar(3);
console.log(triplicar(2));
console.log(triplicar(3));
console.log(triplicar(5));
console.log(triplicar(10));
