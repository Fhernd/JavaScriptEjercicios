// Ejercicio 856: Usar la función eval() para ejecutar código JavaScript representado como cadena.

let codigo = '2 + 3';
console.log(codigo);
console.log(typeof codigo);

console.log();

let resultado = eval(codigo);
console.log(resultado);
console.log(typeof resultado);

console.log(resultado == 5);

console.log();

codigo = '2 <= 3';
console.log(codigo);
console.log(typeof codigo);

console.log();

resultado = eval(codigo);
console.log(resultado);
console.log(typeof resultado);

console.log();


codigo = 'sumar 2 y 3';
try {
    resultado = eval(codigo);
    console.log(resultado);
} catch(e) {
    console.log(`Error: ${e}`);
}
