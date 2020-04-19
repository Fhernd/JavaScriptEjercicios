// Ejercicio 648: Creación de un objeto Promise para gestionar un temporizador.

function mensajePostergado(mensaje, remitente, tiempoEspera) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Remitente: ${remitente} - Mensaje: ${mensaje}`)
        }, tiempoEspera);
    });
}

mensajePostergado('¡JavaScript es tremendo!', 'John Ortiz Ordoñez', 5000)
.then((mensajeRecibido) => {
    console.log(mensajeRecibido);
});
