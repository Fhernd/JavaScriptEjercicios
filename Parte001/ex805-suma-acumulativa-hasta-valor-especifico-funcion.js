// Ejercicio 805: Definir una función para obtener la suma acumulativa hasta cierto valor dado.

// valor = 10
// sumaAcumulativa = 0, 1, 3, 6, 10, 15

function obtenerSumaAcumulativa(valor) {
    if (typeof valor !== 'number' || !Number.isInteger(valor)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    if (valor <= 0) {
        return null;
    }

    let sumaAcumulativa = 0;
    let contador = 0;

    while (sumaAcumulativa <= valor) {
        sumaAcumulativa += contador++;
    }

    return sumaAcumulativa;
}

try {
    console.log(obtenerSumaAcumulativa(10));    // 15
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaAcumulativa(5));    // 6
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaAcumulativa(new Set()));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerSumaAcumulativa(-10));    // null
} catch (e) {
    console.log(`Error: ${e.message}`);
}
