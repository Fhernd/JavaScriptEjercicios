// Ejercicio 1314: Capitalizar la primera letra de una frase con las funciones toUpperCase() y slice().

function capitalizarFrase(frase) {
    return frase.charAt(0).toUpperCase() + frase.slice(1);
}

let frase = 'javascript es tremendo';
console.log(frase);

console.log();

console.log(capitalizarFrase(frase));
