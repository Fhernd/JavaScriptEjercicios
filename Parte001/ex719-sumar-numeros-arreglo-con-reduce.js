// Ejercicio 719: Crear una función personalizada para sumar los números de un arreglo usando reduce().

function sumarArreglo(numeros) {
    if (numeros instanceof Array) {
        let suma = numeros.reduce((acumulador, numero) => acumulador + numero);

        return suma;
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(sumarArreglo([1, 2, 3, 4, 5])); // 15
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(sumarArreglo("[1, 2, 3, 4, 5]")); // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(sumarArreglo([1.1, 2.2, 3.3, 4.4, 5.5])); // 16.5
} catch (e) {
    console.log(e.message);
}
