// Ejercicio 978: Definir una función para calcular la potenciación de dos números.

// a ^ b ~= a ** b

function calcularPotenciacion(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw TypeError('Ambos parámetros deben ser números.');
    }

    let potenciacion = 1;

    for (let i = 1; i <= b; ++i) {
        potenciacion *= a;
    }

    return potenciacion;
}

try {
    console.log(calcularPotenciacion(2, 3));    // 8
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(calcularPotenciacion(3, 4));    // 81
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(calcularPotenciacion(2, 4));    // 16
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(calcularPotenciacion({a: 10}, 4));    // Error
} catch (e) {
    console.log(`Error: ${e.message}.`);
}

console.log();

try {
    console.log(calcularPotenciacion(2, new Map()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}.`);
}
