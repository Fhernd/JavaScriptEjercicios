// Ejercicio 972: Definir una función para obtener el tipo de dato de un argumento.

function obtenerTipoDato(valor) {
    let tipoDatos = [Set, Map, Function, RegExp, Number, String, Boolean, Object];

    if (typeof valor === 'object' || typeof valor === 'function') {
        
        for(let i = 0, longitud = tipoDatos.length; i < longitud; ++i) {
            if (valor instanceof tipoDatos[i]) {
                return tipoDatos[i];
            }
        }
    }

    return typeof valor;
}

try {
    console.log(obtenerTipoDato('JavaScript')); // string
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTipoDato({a: 1000})); // object
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTipoDato(new Set())); // Set
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTipoDato(new Map())); // Map
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTipoDato(1000)); // number
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(obtenerTipoDato(function() {})); // Function
} catch (e) {
    console.log(`Error: ${e.message}`);
}
