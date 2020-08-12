// Ejercicio 708: Crear una función para remover el primer y último carácter de un texto.

 // JavaScript => avaScrip

 function extraerCaracteres(texto) {
    if (texto.length >= 2) {
        return texto.substring(1, texto.length - 1);
    } else {
        throw 'El texto no tiene dos o más caracteres.';
    }
 }

try {
    console.log(extraerCaracteres('Python'));   // ytho
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerCaracteres('T'));
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerCaracteres('Go'));   // ''
} catch (e) {
    console.log(`Error: ${e}`);
}

console.log();

try {
    console.log(extraerCaracteres('PHP'));   // H
} catch (e) {
    console.log(`Error: ${e}`);
}
