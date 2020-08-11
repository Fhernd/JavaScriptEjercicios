// Ejercicio 695: Reemplazar cada carácter de una cadena por el carácter que le sigue en el alfabeto.

function reemplazarCaracteres(texto) {
    texto = texto.split('');

    for(let i = 0; i < texto.length; ++i) {
        switch(texto[i]) {
            case 'z':
                texto[i] = 'a';
                break;
            case 'Z':
                texto[i] = 'A';
                break;
            default:
                texto[i] = String.fromCharCode(texto[i].charCodeAt(0) + 1);
        }
    }

    return texto.join('');
}

console.log(reemplazarCaracteres('ABC'));   // BCD
console.log(reemplazarCaracteres('ABCXYZ'));   // BCDYZA
console.log(reemplazarCaracteres('abc'));   // bcd
console.log(reemplazarCaracteres('abcxyz'));   // bcdyza
console.log(reemplazarCaracteres('JavaScript'));   // KbwbTdsjqu
console.log(reemplazarCaracteres('Python'));   // Qzuipo
