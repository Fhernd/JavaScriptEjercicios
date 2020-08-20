// Ejercicio 768: Definir una función para calcular la suma de las fracciones n/2^i.

// n: es un número que se provee a la función
// i: es un número que va desde 0..n

function calcularSumaFracciones(n) {
    if (typeof n === 'number' && Number.isInteger(n)) {
        if (n >= 0) {
            let sumaFracciones = 0;

            for(let i = 0; i <= n; ++i) {
                sumaFracciones += n/Math.pow(2, i);
            }

            return sumaFracciones;
        } else {
            throw Error('El argumento debe ser un número mayor o igual a 0.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(calcularSumaFracciones(5)); // 5 + 5/2 + 5/4 + 5/8 + 5/16 + 5/32 = 9.84375
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularSumaFracciones('cinco')); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(calcularSumaFracciones(-10)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
