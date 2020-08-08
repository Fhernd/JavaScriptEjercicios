// Ejercicio 664: Computar la suma de dos números si son iguales, sino calcular el triple de la suma.

function sumarTriplicar(a, b) {
    if (a == b) {
        return a + b;
    } else {
        return (a + b) * 3;
    }
}

let numero1 = 3;
let numero2 = 3;
let resultado = sumarTriplicar(numero1, numero2);
console.log(resultado); // 6

console.log();

numero2 = 5;
resultado = sumarTriplicar(numero1, numero2);
console.log(resultado); // 24
