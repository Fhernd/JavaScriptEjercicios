// Ejercicio 1186: Limitar un número para que esté dentro de un rango específico.

// [1, 9]
// n = 13
// => 9
// n = 0
// => 1
// n = 5
// 5

function limitarNumero(minimo, maximo, valor) {
    return valor < minimo ? minimo : (valor > maximo ? maximo : valor);
}

console.log(limitarNumero(1, 9, 15));   // 9
console.log(limitarNumero(1, 9, -5));   // 1
console.log(limitarNumero(1, 9, 5));   // 5
