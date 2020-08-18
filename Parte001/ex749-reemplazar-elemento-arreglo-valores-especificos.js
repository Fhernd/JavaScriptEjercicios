// Ejercicio 749: Crear una función para reemplazar un valor en un arreglo con otro valor específico.

function reemplazarValores(elementos, valorAnterior, ValorNuevo) {
    if (elementos instanceof Array) {
        if (elementos.length) {
            elementos.forEach((valor, indice) => {
                if (valor === valorAnterior) {
                    elementos[indice] = ValorNuevo;
                }
            });
        } else {
            throw Error('El arreglo debe tener al menos un elemento.');
        }
    } else {
        throw TypeError('El argumento elementos debe ser un arreglo.');
    }
}

try {
    let numeros = [1, 2, 2, 3, 5, 1, 1, 13];
    console.log(numeros);
    reemplazarValores(numeros, 1, 7);
    console.log(numeros);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let numeros = [1, 2, 2, 3, 5, 1, 1, 13];
    console.log(numeros);
    reemplazarValores('numeros', 1, 7); // Error
    console.log(numeros);
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    let lenguajes = ['Perl', 'JavaScript', 'Java', 'C', 'C++', 'Perl', 'Perl'];
    console.log(lenguajes);
    reemplazarValores(lenguajes, 'Perl', 'JavaScript');
    console.log(lenguajes);
} catch (e) {
    console.log(`Error: ${e.message}`);
}
