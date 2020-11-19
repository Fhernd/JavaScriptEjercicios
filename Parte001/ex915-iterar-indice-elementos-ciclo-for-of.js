// Ejercicio 915: Iterar por los índices y elementos de un arreglo con un ciclo for...of.

let lenguajes = ['JavaScript', 'Python', 'C++', 'Java', 'Go', 'C'];

for(const [indice, lenguaje] of lenguajes.entries()) {
    console.log(`En el índice ${indice} se encuentra el valor ${lenguaje}.`);
}
