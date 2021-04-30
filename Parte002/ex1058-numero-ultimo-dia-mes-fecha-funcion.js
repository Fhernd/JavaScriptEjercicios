// Ejercicio 1058: Obtener el número del último día del mes con una función personalizada.

function numeroUltimoDiaMes(agnio, mes) {
    if (typeof agnio != 'number' || !Number.isInteger(agnio)) {
        throw TypeError('El primer argumento debe ser un número entero.');
    }
    
    if (typeof mes != 'number' || !Number.isInteger(mes)) {
        throw TypeError('El segundo argumento debe ser un número entero.');
    }

    return new Date(agnio, mes + 1, 0).getDate();
}

try {
    console.log(numeroUltimoDiaMes(2021, 3));   // 30
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numeroUltimoDiaMes(2020, 1));   // 29
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numeroUltimoDiaMes(2021, 1));   // 28
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(numeroUltimoDiaMes(2021.1, 1));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
