// Ejercicio 1228: Remover los elementos duplicados de un arreglo usando un ciclo for.

function removerDuplicados(datos) {
    let noDuplicados = [];

    for (const e of datos) {
        if (noDuplicados.indexOf(e) == -1) {
            noDuplicados.push(e);
        }
    }

    return noDuplicados;
}

let letras = ['a', 'b', 'a', 'a', 'e', 'b', 'c', 'a'];
console.log(letras);
console.log(letras.length); // 8

console.log();

let resultado = removerDuplicados(letras);
console.log(resultado);
console.log(resultado.length);  // 4
