// Ejercicio 1437: Implementar el algoritmo de ordenamiento burbuja con una función.

function ordenarBurbuja(datos) {
    let n = datos.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0, k = n - i; j < k; j++) {
            if (datos[j] > datos[j + 1]) {
                [datos[j], datos[j + 1]] = [datos[j + 1], datos[j]];
            }
        }
    }

    return datos;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = ordenarBurbuja(primos);
console.log(resultado);
