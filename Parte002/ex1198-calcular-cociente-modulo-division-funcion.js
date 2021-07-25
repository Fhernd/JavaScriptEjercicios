// Ejercicio 1198: Definir una función para calcular el cociente y el módulo de la división.

function calcularCocienteModulo(dividendo, divisor) {
    if (typeof dividendo != 'number' || typeof divisor != 'number') {
        return null;
    }

    return [Math.floor(dividendo / divisor), dividendo % divisor];
}

console.log(calcularCocienteModulo(5, 2));  // [2, 1]
console.log(calcularCocienteModulo(17, 7));  // [2, 3]
console.log(calcularCocienteModulo(100, 7));  // [14, 2]

console.log();

console.log(calcularCocienteModulo('17', 7));  // null
