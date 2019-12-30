// Ejercicio 253: Especificar parámetros por defecto en el encabezado de una función.

// Previo a ES6:

function mostrarMensaje(texto){
    texto = typeof texto !== 'undefined' ? texto : 'Valor por defecto';

    console.log(texto);
}

mostrarMensaje();
mostrarMensaje('¡JavaScript es tremendo!');

console.log();

// ES6:

function visualizarMensaje(texto='Valor por defecto'){
    console.log(texto);
}

visualizarMensaje();
visualizarMensaje('¡JavaScript es tremendo!');
