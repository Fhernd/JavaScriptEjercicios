// Ejercicio 722: Comprobar si el primer y último elemento de un arreglo son iguales.

function primerUltimoElementoIguales(elementos) {
    if (elementos instanceof Array) {
        if (elementos.length) {
            return elementos[0] === elementos[elementos.length - 1];
        } else {
            throw Error('El arreglo debe tener al menos un elemento.');
        }
    } else {
        throw TypeError('El argumento `elementos` debe ser un arreglo.');
    }
}

try {
    console.log(primerUltimoElementoIguales(['JS', 'C', 'C++', 'JS'])); // true
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(primerUltimoElementoIguales(['JS', 'C', 'C++', 'JavaScript'])); // false
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(primerUltimoElementoIguales([])); // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(primerUltimoElementoIguales(Array())); // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(primerUltimoElementoIguales(new Array())); // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(primerUltimoElementoIguales(new Array(0))); // Error
} catch (e) {
    console.log(e.message);
}

console.log();

try {
    console.log(primerUltimoElementoIguales([1, 0, 1])); // true
} catch (e) {
    console.log(e.message);
}
