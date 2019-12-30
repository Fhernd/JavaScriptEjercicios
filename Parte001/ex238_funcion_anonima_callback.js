// Ejercicio 238: Crear una función anónima para callback de la función setTimeout().

setTimeout(function(){
    console.log('El temporizador ha llegado a cero...');
}, 5000);

let mensaje = function(){
    console.log('Otro mensaje...');
};

setTimeout(mensaje, 7000);
