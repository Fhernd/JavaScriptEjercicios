// Ejercicio 324: Simplificar función extracción lista de elementos a partir de una cadena.

function extraerListaElementos(frase){
    let inicio = frase.indexOf(':');
    let fin = frase.indexOf('.', inicio);

    let listado = frase.substring(inicio + 1, fin).split(',');

    listado.forEach((valor, indice, arreglo) => {
        arreglo[indice] = valor.trim();
    });
    
    return listado;
}

let frase = 'Lenguajes de programación. Los más populares son: JavaScript, Python, Java, C++.';
let resultado = extraerListaElementos(frase);

console.log(resultado.length);
console.log(resultado);
