// Ejercicio 1235: Encontrar los elementos duplicados de un arreglo por medio de una función.

function encontrarDuplicados(datos) {
    let duplicados = [];

    for (let i = 0; i < datos.length; ++i) {
        console.log(datos.slice(i + 1));
        if (i + 1 < datos.length && datos.slice(i + 1).indexOf(datos[i]) != -1 && duplicados.indexOf(datos[i]) == -1) {
            duplicados.push(datos[i]);
        }
    }

    return duplicados;
}

let numeros = [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7];
console.log(numeros);
console.log(numeros.length);

console.log();

let resultado = encontrarDuplicados(numeros);
console.log(resultado);
