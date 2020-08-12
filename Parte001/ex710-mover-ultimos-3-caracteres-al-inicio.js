// Ejercicio 710: Mover los tres últimos caracteres de una cadena al principio de la misma.

function moverUltimos3Caracteres(texto) {
    if (texto.length >= 3) {
        return texto.slice(-3) + texto.slice(0, -3);
    } else {
        throw 'El texto debe tener al menos 3 caracteres.';
    }
}

try {
    console.log(moverUltimos3Caracteres('JavaScript')); // iptJavaScr
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(moverUltimos3Caracteres('C')); // Error
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(moverUltimos3Caracteres('C++')); // C++
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(moverUltimos3Caracteres('PHP')); // PHP
} catch (e) {
    console.log(`Error: ${e}`);
}
