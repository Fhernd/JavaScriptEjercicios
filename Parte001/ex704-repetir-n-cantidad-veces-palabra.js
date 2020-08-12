// Ejercicio 704: Crear una función personalizada para repetir n cantidad de veces una palabra.

function repetirPalabra(palabra, n) {
    if (n >= 0) {
        return palabra.repeat(n);
    } else {
        throw 'El número de repeticiones debe ser un número positivo.';
    }
}

try {
    console.log(repetirPalabra('C++', 5));
} catch (e) {
    console.log(`Error: ${e}`);    
}

console.log();

try {
    console.log(repetirPalabra('C++', -5));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirPalabra('C++', 0));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirPalabra('C++', 10));
} catch (e) {
    console.log(`Error: ${e}`);
}
