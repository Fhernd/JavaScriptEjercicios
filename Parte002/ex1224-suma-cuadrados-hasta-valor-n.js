// Ejercicio 1224: Calcular la suma de los n primeros números enteros cuadrados.

// n = 5
// 1 ^ 2 + 2 ^ 2 + 3 ^ 2 + 4 ^ 2 + 5 ^ 2:
// 1 + 4 + 9 + 16 + 25 = 55

function calcularSumaNCuadrados(n = 5) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += Math.pow(i, 2); // i * i
    }

    return suma;
}

console.log(calcularSumaNCuadrados(5)); // 55
console.log(calcularSumaNCuadrados(10)); // 385
console.log(calcularSumaNCuadrados()); // 55
