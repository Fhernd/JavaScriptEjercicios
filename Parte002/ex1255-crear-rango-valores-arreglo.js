// Ejercicio 1255: Crear un rango de valores por medio una función personalizada.

function crearRango(inicio, final) {
    let resultado = new Array(final - inicio);
    
    for (let i = 0; i < (final - inicio); i++) {
        resultado[i] = inicio + i;
    }

    return resultado;
}

let numeros = crearRango(0, 10);
console.log(numeros);
console.log(numeros.length);

console.log();

numeros = crearRango(5, 15);
console.log(numeros);
console.log(numeros.length);
