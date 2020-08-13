// Ejercicio 718: Crear una función personalizada para sumar los números de un arreglo.

function sumarNumerosArreglo(numeros) {
    if (numeros instanceof Array) {
        let suma = 0;

        for(let i = 0; i < numeros.length; ++i) {
            suma += numeros[i];
        }

        return suma;
    } else {
        throw TypeError('El argumento debe ser un arreglo.');
    }
}

try {
    console.log(sumarNumerosArreglo([1, 2, 3, 4, 5]));  // 15
} catch (error) {
    console.log(error);
}

console.log();

try {
    console.log(sumarNumerosArreglo("[1, 2, 3, 4, 5]"));  // Error
} catch (error) {
    console.log(error);
}

console.log();

try {
    console.log(sumarNumerosArreglo([1.1, 2.2, 3.3, 4.4, 5.5]));  // 16.5
} catch (error) {
    console.log(error);
}
