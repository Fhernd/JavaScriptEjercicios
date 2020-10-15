// Ejercicio 885: Crear una expresión de flecha para represantar una función.

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3));   // 5

console.log();

let sumarValores = (a, b) => a + b;

console.log(sumarValores(2, 3));    // 5

sumarValores = (a, b) => {
    let suma = a + b;

    return suma;
}

console.log(sumarValores(2, 3));    // 5

console.log();

let numeros = [1, 2, 3, 4, 5];

let numerosCuadrados = numeros.map(function (n) {
    return n * n
});

console.log(numeros);
console.log(numerosCuadrados);

console.log();

numerosCuadrados = numeros.map((n) => n * n);
console.log(numerosCuadrados);

// Nota: En el contexto de una expresión de flecha la variable this corresponde con el cuerpo de declaración
// desde donde está invocando esa función.
