// Ejercicio 789: Cambiar los caracteres de un texto: a por z, b por y, c por x, ..., z por a

// python => kbgslm

// a b c ... x y z

function cambiarCaracteres(texto) {
    if (typeof texto === 'string') {
        if (texto.length) {
            
            let resultado = [];

            for(let i = 0; i < texto.length; ++i) {

                let codigo = texto.charCodeAt(i) - 'a'.charCodeAt(0);
                let nuevoCodigo = 25 - codigo + 'a'.charCodeAt(0)

                resultado.push(String.fromCharCode(nuevoCodigo));
            }

            return resultado.join('');
            
        } else {
            throw Error('El texto debe tener al menos un carácter');
        }
    } else {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }
}

try {
    console.log(cambiarCaracteres('python'));   // kbgslm
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(cambiarCaracteres(new Array()));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}
