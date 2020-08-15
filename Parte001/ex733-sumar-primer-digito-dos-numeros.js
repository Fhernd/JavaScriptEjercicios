// Ejercicio 733: Crear una función para sumar el primer dígito (unidades) de dos números enteros.

// a = 123 -> 3 = 123 % 10
// b = 522 -> 2 = 522 % 10
// 3 + 2

function sumarPrimerDigito(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (Number.isInteger(a) && Number.isInteger(b)) {
            return a % 10 + b % 10;
        } else {
            throw Error('Los argumentos además de ser numéricos, deben ser tipo entero.');
        }
    } else {
        throw TypeError('Los argumentos deben ser de tipo numérico.');
    }
}

console.log(typeof 123); // true

try {
    console.log(sumarPrimerDigito(123, 522));   // 5
} catch (e) {
    console.log(`Error: ${e.message}`);    
}

console.log();

try {
    console.log(sumarPrimerDigito('123', 522));   //    Error
} catch (e) {
    console.log(`Error: ${e.message}`);    
}

console.log();

try {
    console.log(sumarPrimerDigito(123, '522'));   //    Error
} catch (e) {
    console.log(`Error: ${e.message}`);    
}

console.log();

try {
    console.log(sumarPrimerDigito(123.13, 32));   //    Error
} catch (e) {
    console.log(`Error: ${e.message}`);    
}

console.log();

try {
    console.log(sumarPrimerDigito(123, 32.29));   //    Error
} catch (e) {
    console.log(`Error: ${e.message}`);    
}

console.log();

try {
    console.log(sumarPrimerDigito(12597, 9573));   //    10
} catch (e) {
    console.log(`Error: ${e.message}`);    
}
