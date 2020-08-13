// Ejercicio 717: Tomar n cantidad de caracteres al inicio y al final de un texto.

function tomarCaracteresInicioFin(texto, n) {
    if (n >= 0) {
        if (texto.length % 2 === 0 && n <= texto.length / 2) {
            return texto.substring(0, n) + texto.substring(texto.length - n);
        } else if (texto.length % 2 === 1 && n <= texto.length / 2 - 1) {
            return texto.substring(0, n) + texto.substring(texto.length - n);
        } else {
            throw Error('El argumento n (cantidad de caracteres a remover) no cumple con ninguna condición.');
        }
    } else {
        throw Error('La cantidad de caracteres a tomar no debe ser un número negativo.');
    }
}

try {
    console.log(tomarCaracteresInicioFin('JavaScript', 2)); // Japt
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(tomarCaracteresInicioFin('JavaScript', 10)); // Japt
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(tomarCaracteresInicioFin('Python', -1)); // Japt
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(tomarCaracteresInicioFin('Python', 1)); // Pn
} catch (e) {
    console.log(e);
}
