// Ejercicio 385: Pasar una función como argumento de otra función.

function calcular(fn, x, y){
    return fn(x, y);
}

let sumar = function(a, b){
    return a + b;
}

let resultado = calcular(sumar, 2, 3);
console.log(resultado);

let restar = function(a, b){
    return a - b;
}
resultado = calcular(restar, 2, 3);
console.log(resultado);
