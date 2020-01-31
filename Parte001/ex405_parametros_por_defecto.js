// Ejercicio 405: Especificar un parámetro con un valor por defecto.

function crearCadena(cadena, delimitadorIzquierda="'", delimitadorDerecha="'"){
    return `${delimitadorIzquierda}${cadena}${delimitadorDerecha}`;
}

console.log(crearCadena('JavaScript'));
console.log(crearCadena("Python"));
console.log(crearCadena(`C#`));

console.log(crearCadena('JavaScript', '-', '-'));
console.log(crearCadena('JavaScript', '-'));
