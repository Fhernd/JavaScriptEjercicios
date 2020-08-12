// Ejercicio 705: Crear una función para generar n copias de los 3 primeros caracteres de un texto.

function repetirCaracteres(texto, n) {
    if (texto.length >= 3) {
        if (n >= 0) {
            return texto.substring(0, 3).repeat(n);
        } else {
            throw 'El número de copias debe ser un número positivo.';
        }
    } else {
        throw 'La cadena debe tener al menos 3 caracteres para efectuar esta operación.';
    }
}

try {
    console.log(repetirCaracteres('JavaScript', 3));    // JavJavJav
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirCaracteres('Go', 3));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirCaracteres('PHP', 10));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirCaracteres('Python', 20));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirCaracteres('Python', -20));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(repetirCaracteres('XYZ', 0));
} catch (e) {
    console.log(`Error: ${e}`);
}
