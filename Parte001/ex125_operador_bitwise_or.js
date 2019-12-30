// Ejercicio 125: Uso del operador a nivel de bits or (|).

let numero1 = 7; // 111 [2]
let numero2 = 6; // 110 [2]

// 111 | 110 = 111 [2] = 7 [10]

let resultado = numero1 | numero2;

console.log(numero1);
console.log(numero2);
console.log(resultado);

console.log();

console.log(0b111 | 0b110);
