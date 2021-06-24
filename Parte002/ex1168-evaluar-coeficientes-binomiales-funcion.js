// Ejercicio 1168: Usar una función para evaluar coeficientes binomiales.

function calcularCoeficientesBinomales(n, k) {
    if (typeof n != 'number' || typeof k != 'number') {
        return null;
    }

    let coeficiente = 1;

    for(let x = n - k + 1; x <= n; ++x) {
        coeficiente *= x;
    }

    for(let x = 1; x <= k; ++x) {
        coeficiente /= x;
    }

    return coeficiente;
}

console.log(calcularCoeficientesBinomales(8, 3));   // 56
console.log(calcularCoeficientesBinomales(7, 5));   // 21
console.log(calcularCoeficientesBinomales(10, 2));   // 45
