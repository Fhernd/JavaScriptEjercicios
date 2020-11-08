// Ejercicio 905: Definir una función para tomar/seleccionar ciertas propiedades de un objeto.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) == '[object Object]';
}

function selecionarPropiedadesObjeto(objeto, propiedades) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El primer argumento debe ser un objeto.')
    }

    if (!Array.isArray(propiedades)) {
        throw TypeError('El segundo argumento debe ser un arreglo.');
    }

    if (!propiedades.length) {
        return objeto;
    }

    if (!propiedades.every(e => typeof e == 'string')) {
        throw TypeError('Todos los elementos del segundo argumento deben ser cadenas de caracteres.');
    }

    return propiedades.reduce((a, p) => (p in objeto && (a[p] = objeto[p]), a), {});
}

let computador = {id: 1001, marca: 'MSi', ram: 32, cpu: 'Intel', ssd: 512};

try {
    console.log(selecionarPropiedadesObjeto(computador, ['ram', 'cpu']));
    // {ram: 32, cpu: 'Intel'}
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(selecionarPropiedadesObjeto(new Map(), ['ram', 'cpu']));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(selecionarPropiedadesObjeto(computador, []));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(selecionarPropiedadesObjeto(computador, [1, 2, 3]));    // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
