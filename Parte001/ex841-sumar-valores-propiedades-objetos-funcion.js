// Ejercicio 841: Sumar los valores de las propiedades de un objeto usando una función específica.

// [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}, ..., {a: 10, b: 11}]
// a: 19
// b: 23
// o => o.a = 19
// o => o.b = 23

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function sumarValoresPropiedades(datos, fn) {
    if (!Array.isArray(datos)) {
        throw TypeError('El argumento «datos» debe ser un arreglo.');
    }

    if(!datos.every(d => esObjetoEstandar(d))) {
        throw TypeError('El arreglo «datos» debe contener únicamente objetos.');
    }

    return datos.map(typeof fn === 'function' ? fn : d => d[fn]).reduce((a, v) => a + v, 0);
}

let datos = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}, {a: 10, b: 11}];

try {
    console.log(sumarValoresPropiedades(datos, 'a'));   // 19
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarValoresPropiedades(datos, 'b'));   // 23
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarValoresPropiedades(datos, o => o.a));   // 19
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarValoresPropiedades(datos, o => o.b));   // 23
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

function seleccionarPropiedad(objeto) {
    return objeto.a;
}

try {
    console.log(sumarValoresPropiedades(datos, seleccionarPropiedad));   // 23
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarValoresPropiedades(new Map(), seleccionarPropiedad));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(sumarValoresPropiedades([1, 2, 3, 4], seleccionarPropiedad));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
