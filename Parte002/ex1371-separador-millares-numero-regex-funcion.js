// Ejercicio 1371: Usar una expresión regular para agregar separador de miles a un número.

function agregarSeparadorMiles(numero) {
    let partesNumero = numero.toString().split('.');

    partesNumero[0] = partesNumero[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return partesNumero.join('.');
}

console.log(agregarSeparadorMiles(1000));   // 1,000
console.log(agregarSeparadorMiles(1000000));    // 1,000,000
console.log(agregarSeparadorMiles(1000000.23));    // 1,000,000.23
