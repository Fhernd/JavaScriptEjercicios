// Ejercicio 869: Retornar un objeto Promise desde una función.

function procesoAsincrónico() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve('Mensaje desde una promesa.')
        }, 5000)
    })
}

async function ejecutarProcesoAsincronico() {
    console.log(await procesoAsincrónico());
}

console.log('Inicio ejecución...');
ejecutarProcesoAsincronico();
console.log('Fin ejecución...');
