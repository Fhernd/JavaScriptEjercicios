// Ejercicio 314: Crear un objeto Promise para ejecución satisfactoria de código asíncrono.

let promesa = new Promise(function(resolve, reject) {
    resolve('¡La ejecución del proceso ha sido satisfactoria!');
});

promesa
.then(function(mensaje) {
    console.log(mensaje);
}, function(error) {
    console.log(error);
});
