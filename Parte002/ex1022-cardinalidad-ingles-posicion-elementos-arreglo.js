// Ejercicio 1022: Definir una función para obtener la cardinalidad (inglés) de los elementos de un arreglo.

// th, st, nd, rd

function ordinal(n) {
    let terminaciones = ['th', 'st', 'nd', 'rd'];

    let residuo = n % 100;

    return residuo + (terminaciones[(residuo - 20) % 10] || terminaciones[residuo] || terminaciones[0]);
}

let lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Perl'];

// JavaScript es la elección 1st

for(let n = 0; n < lenguajes.length; ++n) {
    let valor = n + 1;

    let resultado = `${lenguajes[n]} es la elección ${ordinal(valor)}`;

    console.log(resultado);
}
