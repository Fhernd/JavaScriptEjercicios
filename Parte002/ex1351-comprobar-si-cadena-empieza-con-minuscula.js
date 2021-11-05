// Ejercicio 1351: Comprobar si una cadena empieza con minúscula usando una expresión regular.

function empiezaConMinuscula(texto) {
    let patron = /^[a-z]/;

    return patron.test(texto);
}

console.log(empiezaConMinuscula('JavaScript')); // false
console.log(empiezaConMinuscula('JS')); // false
console.log(empiezaConMinuscula('js')); // true
