// Ejercicio 1188: Crear una función para formatear un número entero con separador de millares.

// 1234 => 1.234
// 1234567 => 1.234.567

function aplicarSeparadorMillares(numero, separador='.') {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        return null;
    }

    numero = String(numero);

    let partes = numero.replace(/\B(?=(\d{3})+(?!\d))/g, separador);

    return partes;
}

console.log(aplicarSeparadorMillares(1234));    // 1.234
console.log(aplicarSeparadorMillares(1234, ','));    // 1,234

console.log();

console.log(aplicarSeparadorMillares(1234567));    // 1.234.567
console.log(aplicarSeparadorMillares(1234567, ','));    // 1,234,567
