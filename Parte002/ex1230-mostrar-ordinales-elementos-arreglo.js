// Ejercicio 1230: Utilizar una función para generar los ordinales de los elementos de un arreglo.

function ordinal(n) {
    const ORDINALES = ['th', 'st', 'nd', 'rd'];

    let indice = n % 100;

    return indice + (ORDINALES[(indice - 20) % 10] || ORDINALES[indice] || ORDINALES[0]);
}

let lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'PHP', 'Go'];

for (let i = 0; i < lenguajes.length; i++) {
    let valorOrdinal = i + 1;

    console.log(ordinal(valorOrdinal));    
}
