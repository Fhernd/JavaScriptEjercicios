// Ejercicio 757: Crear una función personalizada para extraer el dígito menor de un número.

// 7593 => 3
// ['7', '5', '9', '3']

function extraerDigitoMenor(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        let caracteres = String(numero).split('');
        let digitos = caracteres.map(c => parseInt(c));
        let digitoMenor = digitos[0];

        digitos.forEach(d => digitoMenor = Math.min(digitoMenor, d));

        return digitoMenor;
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(extraerDigitoMenor(7593));  // 3
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitoMenor(1235));  // 1
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitoMenor('1235'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerDigitoMenor(1235.67));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
