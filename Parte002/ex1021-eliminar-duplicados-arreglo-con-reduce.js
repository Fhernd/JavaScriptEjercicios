// Ejercicio 1021: Eliminar los elementos duplicados de un arreglo usando la función reduce().

let numeros = [5, 11, 7, 19, 23, 5, 5, 11, 11, 11, 7, 2, 3, 5];
console.log(numeros);
console.log(numeros.length);

console.log();

let resultado = numeros.reduce((a, e) => {
    if (!a.find(d => d == e)) {
        a.push(e)
    }

    return a;
}, []);

console.log(resultado);
console.log(resultado.length);
