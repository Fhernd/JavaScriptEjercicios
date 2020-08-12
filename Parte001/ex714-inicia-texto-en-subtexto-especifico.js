// Ejercicio 714: Verificar que una cadena de caractereres empiece en una subcadena específica.

function empiezaCon(texto, subtexto) {
    if (subtexto.length <= texto.length) {
        return texto.slice(0, subtexto.length) === subtexto;
    } else {
        throw Error(`La longitud del subtexto debe ser menor o igual a la del texto.`);
    }
}

try {
    console.log(empiezaCon('JavaScript', 'Java'));  // true
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(empiezaCon('JavaScript', 'java'));  // false
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(empiezaCon('JavaScript', 'JavaScript'));  // true
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log(empiezaCon('JavaScript', 'JavaScript ES6'));  // Error
} catch (e) {
    console.log(e);
}
