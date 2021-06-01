// Ejercicio 1115: Contar el número de ocurrencias de una subcadena en un texto con una función.

function contarOcurrencias(texto, subcadena) {
    if (!subcadena.length) {
        return 0;
    }

    let resultado = subcadena.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    return (texto.match(new RegExp(resultado, 'gi')) || []).length;
}

console.log(contarOcurrencias('JavaScript es tremendo. Con JavaScript podemos crear aplicaciones Web. Uno de los lenguajes más utilizados es JavaScript.', 'JavaScript'));  // 3

console.log();

console.log(contarOcurrencias('JavaScript es tremendo. Con JavaScript podemos crear aplicaciones Web. Uno de los lenguajes más utilizados es JavaScript.', 'JS'));  // 0

console.log();

console.log(contarOcurrencias('JavaScript es tremendo. Con JavaScript podemos crear aplicaciones Web. Uno de los lenguajes más utilizados es JavaScript.', 'JAVASCRIPT'));  // 0
