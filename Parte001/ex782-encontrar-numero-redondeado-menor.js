// Ejercicio 782: Encontrar el número redondeado más pequeño pero mayor a un valor dado.

function redondearNumero(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        while(numero % 10) {
            ++numero;
        }

        return numero;
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(redondearNumero(17));   // 20
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(redondearNumero(21));   // 30
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(redondearNumero(50));   // 50
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(redondearNumero({}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
