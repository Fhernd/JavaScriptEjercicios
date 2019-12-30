// Ejercicio 43: Usar el método forEach para recorrer un arreglo.

let lenguajes = ['JavaScript', 'C#', 'PHP', 'Java', 'Python'];

lenguajes.forEach(function(valor, indice, lenguajes) {
    console.log(`${valor} se encuentra en el índice ${indice}`);
});

console.log();

function recorridoArreglo(valor, indice, lenguajes) {
    console.log(`${valor} se encuentra en el índice ${indice}`);
}

lenguajes.forEach(recorridoArreglo);

console.log();

lenguajes.forEach((valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el índice ${indice}`);
});

console.log();

let recorrerArreglo = (valor, indice, lenguajes) => {
    console.log(`${valor} se encuentra en el índice ${indice}`);
};

lenguajes.forEach(recorrerArreglo);
