// Ejercicio 1195: Definir una función para generar un rango de números de Hamming.

// Números de Hamming: son aquellos números que tienen cómo factores únicos los números primos 2, 3 y 5.

function esNumeroHamming(numero) {
    while (numero % 5 === 0) {
        numero /= 5;
    }
    
    while (numero % 3 === 0) {
        numero /= 3;
    }
    
    while (numero % 2 === 0) {
        numero /= 2;
    }

    return numero === 1;
}

function generarRangoNumerosHamming(maximo) {
    let numerosHamming = [1];
    let n = numerosHamming.length;
    let numero = 2;

    while(n < maximo) {
        if (esNumeroHamming(numero)) {
            numerosHamming[n] = numero;
            ++n;
        }

        ++numero;
    }

    return numerosHamming;
}

console.log(generarRangoNumerosHamming(5)); // [1, 2, 3, 4, 5]
console.log(generarRangoNumerosHamming(7)); // [1, 2, 3, 4, 5, 6, 8]
console.log(generarRangoNumerosHamming(20)); // [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, 30, 32, 36]
console.log(generarRangoNumerosHamming(20).length); // 20
