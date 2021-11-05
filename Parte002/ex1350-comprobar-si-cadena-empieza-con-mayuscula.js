// Ejercicio 135: Comprobar si una cadena empieza con mayúscula usando una expresión regular.

function empiezaConMayuscula(texto) {
    let patron = /^[A-Z]/;

    return patron.test(texto);
}

console.log(empiezaConMayuscula('JavaScript')); // true
console.log(empiezaConMayuscula('JS')); // true
console.log(empiezaConMayuscula('js')); // false
