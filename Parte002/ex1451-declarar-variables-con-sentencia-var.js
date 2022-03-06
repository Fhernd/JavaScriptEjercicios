// Ejercicio 1451: Declarar variables con la sentencia var dentro o fuera de una función.

function mostarMensaje(nombrePersona) {
    var mensaje = `¡Hola, ${nombrePersona}!`;
    console.log(mensaje);
}

function mostrarTexto() {
    texto = 'Esto es JavaScript';

    console.log(`Contenido de la variable "texto": ${texto}`);
}

var nombre = 'Lina';

console.log(nombre);    // Lina
console.log(typeof nombre); // string

console.log();

mostarMensaje(nombre);

// console.log(mensaje);   // ReferenceError

console.log();

mostrarTexto();

console.log();

console.log(texto);
