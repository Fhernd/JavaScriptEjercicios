// Ejercicio 734: Crear una función para sumar dos números enteros positivos sin llevar.

// 937
// 254 +
//-----
// 181

function sumarSinLlevar(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (Number.isInteger(a) && Number.isInteger(b)) {
            if (a > 0 && b > 0) {
                let suma = 0;
                let magnitud = 1;

                while (a > 0 && b > 0) {
                    suma += ((a + b) % 10) * magnitud;
                    a = Math.floor(a / 10);
                    b = Math.floor(b / 10);

                    magnitud *= 10;
                }

                return suma;
            } else {
                throw Error('Los dos números deben ser positivos.');
            }
        } else {
            throw Error('Los dos números deben ser enteros.');
        }
    } else {
        throw TypeError('Los dos argumentos deben ser números.');
    }
}

try {
    console.log(sumarSinLlevar(937, 254));  // 181
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarSinLlevar('937', 254));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarSinLlevar(937, '254'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarSinLlevar(937.12, 254));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarSinLlevar(937, 254.73));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarSinLlevar(-937, 254));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarSinLlevar(937, -254));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
