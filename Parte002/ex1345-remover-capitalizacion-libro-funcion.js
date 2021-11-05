// Ejercicio 1345: Remover la capitalización tipo libro de un texto usando una función.

// Los Hermanos Karámazov
// los hermanos karámazov

function descapitalizarTituloLibro(titulo) {
    return titulo.replace(/\w\S*/g, function(coincidencia) {
        return coincidencia.charAt(0).toLowerCase() + coincidencia.substr(1);
    });
}

let frase = 'Los Hermanos Karámazov';
console.log(frase);

console.log();

console.log(descapitalizarTituloLibro(frase));
