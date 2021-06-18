// Ejercicio 1153: Función para formatear un número hasta determinada cantidad de decimales.

function formatearNumero(numero, decimales) {
    numero = parseFloat(numero);

    return numero.toFixed(decimales);
}

console.log(formatearNumero(Math.PI, 3));   // 3.142
console.log(formatearNumero(Math.PI, 5));   // 3.14159
console.log(formatearNumero(Math.PI, 7));   // 3.1415927
console.log(formatearNumero(Math.PI, 11));  // 3.14159265359
