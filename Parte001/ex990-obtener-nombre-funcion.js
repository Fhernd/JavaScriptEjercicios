// Ejercicio 990: Obtener el nombre de una función con la variable especial arguments.

function mostrarMensaje() {
    console.log(arguments.callee.name); // mostrarMensaje
}

mostrarMensaje();
