// Ejercicio 1162: Redondear un número real hasta cierta cantidad de decimales.

function redondear(numero, decimales) {
    if (typeof numero != 'number' || typeof decimales != 'number') {
        return null;
    }

    let signo = numero >= 0 ? 1 : -1;

    return (Math.round((numero * Math.pow(10, decimales)) + (signo * 0.0001)) / Math.pow(10, decimales)).toFixed(decimales);
}

console.log(redondear(13.477, 2));  // 13.48
console.log(redondear(2.17, 1));  // 2.2
console.log(redondear(3.14179, 3));  // 3.142
