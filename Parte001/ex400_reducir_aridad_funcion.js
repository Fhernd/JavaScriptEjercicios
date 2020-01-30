// Ejercicio 400: Reducir la aridad (número de argumentos) de una función.

function crearCadena(delimitadorIzquierda, cadena, delimitadorDerecha){
    return `${delimitadorIzquierda}${cadena}${delimitadorDerecha}`;
}

function comillasSimples(cadena){
    return crearCadena("'", cadena, "'");
}

function textoGuiones(cadena){
    return crearCadena("-", cadena, "-")
}

function crearEntidadNombrada(codigo){
    return crearCadena("&#", codigo, ";")
}

console.log(crearCadena("'", 'Python', "'"));
console.log(crearCadena("-", 'Python', "-"));
console.log(crearCadena("&#", 169, ";"));

console.log();

console.log(comillasSimples('Python'));
console.log(textoGuiones('Python'));
console.log(crearEntidadNombrada(169));
