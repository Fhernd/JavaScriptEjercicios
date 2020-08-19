// Ejercicio 758: Crear una función personalizada para extraer el dígito mayor de un número.

// 7593 => 9
// '7593' => ['7', '5', '9', '3'] => [7, 5, 9, 3]

function extraerDigitoMayor(numero) {
    if(typeof numero === 'number' && Number.isInteger(numero)) {
        let digitos = String(numero).split('').map(c => parseInt(c));

        let digitoMayor = digitos[0];

        digitos.forEach(d => digitoMayor = Math.max(digitoMayor, d));

        return digitoMayor;
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(extraerDigitoMayor(7593));    // 9
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitoMayor('7593'));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitoMayor(7593.13));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
