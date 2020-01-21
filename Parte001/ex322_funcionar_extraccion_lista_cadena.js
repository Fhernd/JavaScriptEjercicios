// Ejercicio 322: Función extracción lista de elementos a partir de una cadena de caracteres.

function extraerListaElementos(frase){
    let inicio = frase.indexOf(':');
    let fin = frase.indexOf('.', inicio);

    let listadoCadena = frase.substring(inicio + 1, fin);

    let lenguajes = listadoCadena.split(',');
    
    return lenguajes;
}

let frase = 'Lenguajes de programación. Los más populares son: JavaScript, Python, Java, C++.';
let resultado = extraerListaElementos(frase);

console.log(resultado.length);
console.log(resultado);
