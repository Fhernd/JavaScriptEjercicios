// Ejercicio 713: Verificar que una cadena de caractereres termine en una subcadena específica.

function terminaEn(texto, subtexto) {
    if (subtexto.length <= texto.length) {
        return texto.slice(-subtexto.length) === subtexto;
    } else {
        throw Error('La longitud del subtexto debe ser menor o igual a la del texto.');
    }
}

try {
    console.log(terminaEn('JavaScript', 'Script')); // true
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(terminaEn('JavaScript', 'script')); // false
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(terminaEn('JavaScript', 'JavaScript')); // true
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(terminaEn('JavaScript', 'JavaScript ES6')); // Error
} catch (e) {
    console.log(e);
}
