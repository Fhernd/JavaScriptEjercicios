// Ejercicio 325: Comprobar si una variable está definida, es una cadena y no está vacía.

function validarVariable(cadena){
    return typeof cadena === 'string' && cadena.length > 0;
}

console.log(validarVariable('JavaScript'));
//console.log(validarVariable(nombre));
console.log(validarVariable(''));
