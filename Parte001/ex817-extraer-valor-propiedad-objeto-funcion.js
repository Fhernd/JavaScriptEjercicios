// Ejercicio 817: Crear una función para extraer el valor de una propiedad de un objeto.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) === '[object Object]';
}

function extraerValorPropiedad(objeto, propiedad) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El primer argumento «objeto» debe ser un objeto estándar.');
    }

    if (typeof propiedad !== 'string') {
        throw TypeError('El segundo argumento «propiedad» debe ser una cadena de caracteres.');
    }

    return propiedad in objeto ? objeto[propiedad] 
        : Object.values(objeto).reduce((a, v) => {
            if (a !== undefined) {
                return a;
            }

            if (typeof v === 'object') {
                return extraerValorPropiedad(v, propiedad);
            }
        }, undefined);
}

let persona = {id: 1001, nombre: 'Daniela Ortiz', carrera: {
    carrera1: 'Arte',
    carrera2: 'Cine'
}};

try {
    console.log(extraerValorPropiedad(persona, 'id'));  // 1001
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerValorPropiedad(persona, 'nombre'));  // Daniela Ortiz
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerValorPropiedad(persona, 'carrera2'));  // Cine
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerValorPropiedad(persona, 'carrera3'));  // undefined
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(extraerValorPropiedad(new Set(), 'carrera3'));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
