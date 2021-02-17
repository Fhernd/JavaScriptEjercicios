// Ejercicio 980: Definir una función para contar las ocurrencias de cada letra de una palabra o frase.

function contarCaracteres(frase) {
    if (typeof frase != 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let conteo = {};

    frase.replace(/\S/g, function(p) {
        conteo[p] = (isNaN(conteo[p]) ? 1 : conteo[p] + 1);
    });

    return conteo;
}

try {
    console.log(contarCaracteres('JavaScript')); // {J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarCaracteres('Fernando')); // {F: 1, e: 1, r: 1, n: 2, d: 1, o: 1}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarCaracteres(42)); // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
