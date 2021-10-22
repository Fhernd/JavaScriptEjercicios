// Ejercicio 1279: Definir una función para calcular la edad a partir de una fecha específica.

function calcularEdad(fecha) {
    let diferencia = Date.now() - fecha.getTime();

    fecha = new Date(diferencia);

    return Math.abs(fecha.getUTCFullYear() - 1970);
}

console.log(calcularEdad(new Date(1964, 9, 8)));    // 57
console.log(calcularEdad(new Date(2000, 8, 11)));    // 21
