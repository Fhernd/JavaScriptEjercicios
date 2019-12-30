// Ejercicio 122: Intercambiar el contenido de dos variables sin usar una variable temporal.

// Solución:


function intercambiarNumeros(numero1, numero2){
    numero2 = numero2 - numero1;
    numero1 = numero1 + numero2;
    numero2 = numero1 - numero2;

    return [numero1, numero2]
}


let a = 100;
let b = 50;
console.log(`a = ${a} - b = ${b}`);

// a = 50, b = 100

let c = a;
a = b;
b = c;
console.log(`a = ${a} - b = ${b}`);

console.log();    

a = 100;
b = 50;
console.log(`a = ${a} - b = ${b}`);

[a, b] = intercambiarNumeros(a, b);
console.log(`a = ${a} - b = ${b}`);
