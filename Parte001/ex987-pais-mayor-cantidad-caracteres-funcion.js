// Ejercicio 987: Definir una función para encontrar el nombre de país con mayor número de caracteres.

function paisMayorLongitudCaracteres(paises) {
    if (!Array.isArray(paises)) {
        throw TypeError('El argumento paises debe ser un arreglo.');
    }

    if (!paises.every(e => typeof e == 'string')) {
        throw TypeError('El arreglo paises debe contener únicamente cadenas de caracteres.');
    }

    return paises.reduce((a, p) => a.length > p.length ? a : p, '');
}

let paises = ['Colombia', 'Uruguay', 'Argentina', 'Alemania', 'Bolivia', 'Estados Unidos de América', 'Perú'];

try {
    console.log(paisMayorLongitudCaracteres(paises));   // Estados Unidos de América
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(paisMayorLongitudCaracteres(['Colombia', 42, 'Argentina', 'Alemania', 'Bolivia', 'Estados Unidos de América', 'Perú']));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(paisMayorLongitudCaracteres({a: 1000}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
