// Ejercicio 1438: Implementar el algoritmo de ordenamiento burbuja con una función (solución alternativa).

// ES6

function ordenarBurbuja(datos) {
    let intercambiado = false;
    let auxiliar = [...datos];

    for (let i = 1; i < datos.length - 1; i++) {
        intercambiado = false;
        
        for (let j = 0; j < datos.length; j++) {
            if (auxiliar[j] > auxiliar[j + 1]) {
                [auxiliar[j], auxiliar[j + 1]] = [auxiliar[j + 1], auxiliar[j]];
                intercambiado = true;
            }
        }

        if (!intercambiado) {
            return auxiliar;
        }
    }

    return auxiliar;
}

let primos = [13, 2, 19, 5, 3, 7, 11, 23];
console.log(primos);

console.log();

let resultado = ordenarBurbuja(primos);
console.log(resultado);
