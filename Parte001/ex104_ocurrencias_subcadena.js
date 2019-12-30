// Ejercicio 104: Contar el número de ocurrencias de una subcadena de caracteres.

function contarOcurrencias(cadena, subcadena){
    let contadorOcurrencias = 0;
    let posicion = 0;

    while ((posicion = cadena.indexOf(subcadena, posicion)) !== -1){
        ++contadorOcurrencias;

        posicion += subcadena.length;
    }

    return contadorOcurrencias;
}


let cadena = 'JavaScript es un lenguaje de programación. La versión más reciente de JavaScript es ES6 (2015). JavaScript es un lenguaje interpretado que corre en un navegador Web.';

console.log(contarOcurrencias(cadena, 'javascript'));
