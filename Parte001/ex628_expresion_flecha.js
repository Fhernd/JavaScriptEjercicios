// Ejercicio 628: Uso de expresiones flecha de ECMAScript 2015 (ES6).

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(`Contenido de la variable numeros:`, numeros);

console.log();

let pares1 = numeros.filter(function(valor) {
    return valor % 2 == 0;
});

console.log(`Contenido de la variable pares1:`, pares1);

console.log();

let pares2 = numeros.filter((valor) => {return valor % 2 == 0;});

console.log(`Contenido de la variable pares2:`, pares2);
