// Ejercicio 1316: Alternar entre minúsculas y mayúsculas las letras de un texto.

function alternarMinusculasMayusculas(texto) {
    return texto.replace(/([a-z]+)|([A-Z]+)/g, function(c, l) {
        return l ? c.toUpperCase() : c.toLowerCase();
    })
}

let lenguaje = 'JavaScript';
console.log(lenguaje);

console.log();

console.log(alternarMinusculasMayusculas(lenguaje));    // jAVAsCRIPT
