// Ejercicio 1211: Usar la función Array.from() para clonar el contenido entero de un arreglo.

// 1209: creamos una función personalizada para clonar un arreglo
// 1210: utilizamos el operador de propagación (...)

let primos = [2, 3, 5, 7];
console.log(primos);
console.log(primos.length);

console.log();

let copiaPrimos = Array.from(primos);
console.log(copiaPrimos);
console.log(copiaPrimos.length);
