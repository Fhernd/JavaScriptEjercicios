// Ejercicio 1352: Comprobar si un valor dado corresponde con el formato de una tarjeta de crédito.

function esNumeroTarjetaCredito(dato) {
    let patron = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    return patron.test(dato);
}

console.log(esNumeroTarjetaCredito('378282246310007'));
console.log(esNumeroTarjetaCredito('111182246310007'));
