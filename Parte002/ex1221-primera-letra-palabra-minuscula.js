// Ejercicio 1221: Dejar en minúscula la primera letra de cada palabra de una frase.

// JavaScript es tremendo
// => jAVASCRIPT eS tREMENDO

function cambiarCapitalizacion(frase) {
    if (typeof frase != 'string') {
        return null;
    }

    let palabras = frase.toUpperCase().split(' ');

    return palabras.map(p => p[0].toLocaleLowerCase() + p.slice(1)).join(' ');
}

console.log(cambiarCapitalizacion('JavaScript es tremendo'));   // jAVASCRIPT eS tREMENDO
