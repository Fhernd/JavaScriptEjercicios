// Ejercicio 1133: Usar una función para poner en mayúscula la primera letra de cada palabra de una frase.

// JavaScript es tremendo
// JavaScript Es Tremendo

function tituloLibro(frase) {
    if (frase.constructor != String) {
        return null;
    }

    let patron = /\w\S*/g;

    return frase.replace(patron, (p) => p.charAt(0).toUpperCase()  + p.substring(1).toLowerCase());
}

console.log(tituloLibro('JavaScript es tremendo')); // Javascript Es Tremendo

console.log();

console.log(tituloLibro(42));   // null
