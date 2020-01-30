// Ejercicio 401: Reducir la aridad (número de argumentos) de una función con bind().

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    return `${delimitadorIzquierda}${cadena}${delimitadorDerecha}`;
}

let comillasSimples = crearCadena.bind(undefined, "'", "'");

let textoGuiones = crearCadena.bind(undefined, "-", "-");

let crearEntidadNombrada = crearCadena.bind(undefined, "&#", ";");

console.log(comillasSimples('Python'));
console.log(textoGuiones('Python'));
console.log(crearEntidadNombrada(169));
