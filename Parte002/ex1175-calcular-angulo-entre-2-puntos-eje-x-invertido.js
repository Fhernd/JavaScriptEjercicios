// Ejercicio 1175: Calcular el ángulo entre dos puntos con el eje Y invertido.

function calcularAngulo(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}

console.log(calcularAngulo(1, 0, 12, 0));   // 0
console.log(calcularAngulo(1, 0, 1, 10));   // 90
