// Ejercicio 315: Crear un objeto Promise para ejecución fallida de código asíncrono.

let promesa = new Promise(function(resolve, reject) {
    reject('ERROR: El proceso ha fallado.');
});

promesa
.then(function(mensaje){
    console.log(mensaje);
}, function(error){
    console.log(error);
});
