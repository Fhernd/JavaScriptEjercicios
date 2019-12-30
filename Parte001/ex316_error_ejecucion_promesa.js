// Ejercicio 316: Generación de error en la ejecución de un objeto Promise.

let promesa = new Promise(function(resolve, reject){
    throw new Error('MENSAJE: Se ha generado un error.');
});

promesa
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});
