// Ejercicio 1022: Definir una función para obtener la cardinalidad (inglés) de los elementos de un arreglo.

// th, st, nd, rd

function ordinal(n) {
    let terminaciones = ['th', 'st', 'nd', 'rd'];

    let residuo = n % 100;

    return residuo + (terminaciones[(residuo - 20) % 10] || terminaciones[residuo] || terminaciones[0]);
}
