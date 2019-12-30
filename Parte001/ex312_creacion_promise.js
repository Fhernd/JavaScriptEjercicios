// Ejercicio 312: Creación de un objeto Promise para ejecución asíncrona.

let promesa = new Promise(function(resolve, reject){
    const a = 1;
    const b = 2;

    if (a == b){
        resolve()
    } else {
        reject();
    }
});

promesa
.then(function() {
    console.log('La ejecución ha sido satisfactoria.');
})
.catch(function(){
    console.log('La ejecución ha fallado.');
});
