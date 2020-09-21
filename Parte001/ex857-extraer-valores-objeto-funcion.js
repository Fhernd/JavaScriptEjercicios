// Ejercicio 857: Crear una función para extraer los valores de propiedades de un objeto.

function esObjetoEstandar(objeto) {
    return Object.prototype.toString.call(objeto) == '[object Object]';
}

function obtenerValores(objeto, ...propiedades) {
    if (!esObjetoEstandar(objeto)) {
        throw TypeError('El argumento debe ser un objeto.');
    }

    if (!propiedades.every(p => typeof p == 'string')) {
        throw TypeError('Todas los nombres de las propiedades deben ser cadenas de caracteres.');
    }

    return [...propiedades].map(p => 
        p.replace(/\[([^\[\]]*)\]/g, '.$1.')
        .split('.')
        .filter(p => p !== '')
        .reduce((a, v) => a && a[v], objeto)
    );
}

let persona = {
    id: 1000,
    nombre: 'Daniela Ortiz',
    estudios: {
        secundaria: 'Colegio Nacional',
        profesional: 'Universidad del Bosque'
    },
    edad: 29
};

try {
    console.log(obtenerValores(persona, 'nombre', 'estudios.secundaria', 'estudios.profesional', ));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerValores(new Map(), 'nombre', 'estudios.secundaria', 'estudios.profesional', ));  // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
