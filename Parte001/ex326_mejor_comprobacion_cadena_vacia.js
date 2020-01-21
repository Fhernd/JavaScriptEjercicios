// Ejercicio 326: Mejora comprobación si una variable está definida, es cadena y no está vacía.

function validarVariable(cadena){
    return typeof cadena != 'undefined' && cadena != null && cadena.length > 0
        && typeof cadena.valueOf() == 'string';
}

console.log(validarVariable('JavaScript'));
//console.log(validarVariable(nombre));
console.log(validarVariable(''));
console.log(validarVariable([2, 3, 5]));
