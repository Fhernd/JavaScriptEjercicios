// Ejercicio 124: Uso del operador a nivel de bits and (&).

let numero1 = 7; // 111
let numero2 = 6; // 110

// 111 & 110 = 110 [2] = 6 [10]

let resultado = numero1 & numero2;

console.log(numero1, numero2, resultado);

console.log();

console.log(0b111 & 0b110);
