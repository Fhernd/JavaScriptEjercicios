// Ejercicio 1330: Truncar una frase hasta cierta cantidad de palabras con una función.

function truncarFrase(frase, cantidadPalabras) {
    return frase.split(' ').splice(0, cantidadPalabras).join(' ');
}

let frase = 'Truncar una frase hasta cierta cantidad de palabras con una función';
console.log(frase);

console.log();

console.log(truncarFrase(frase, 3));     // Truncar una frase
console.log(truncarFrase(frase, 5));    // Truncar una frase hasta cierta
console.log(truncarFrase(frase, 7));    // Truncar una frase hasta cierta cantidad de
