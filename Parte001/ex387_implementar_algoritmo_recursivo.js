// Ejercicio 387: Implementar algoritmo recursivo para invertir el contenido de un arreglo.

function invertirArreglo(arreglo, indice, cadena){
    return indice == 0 ? cadena : invertirArreglo(arreglo, --indice, (cadena += ' ' + arreglo[indice]))
}

let lenguajes = ['Python', 'JavaScript', 'Java', 'C++', 'PHP'];

let resultado = invertirArreglo(lenguajes, lenguajes.length, '');
console.log(resultado);
