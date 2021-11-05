// Ejercicio 1341: Rellenar con ceros y signo un número usando una función personalizada.

function rellenarConCeros(numero, ancho, signo) {
    let valorAbsoluto = '' + Math.abs(numero);
    let anchoNumero = ancho - valorAbsoluto.length;
    let signoNumero = numero >= 0 && signo == '+';

    return (signoNumero ? (signo ? '+' : '') : '-') + Math.pow(10, Math.max(0, anchoNumero)).toString().substr(1) + numero;
}

console.log(rellenarConCeros(235, 5, '-')); // -00235
console.log(rellenarConCeros(235, 5, '+')); // +00235
