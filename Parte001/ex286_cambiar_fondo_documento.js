// Ejercicio 286: Cambiar el fondo de un documento HTML después de 5 segundos.

function cambiarColorFondo(){
    setTimeout(() => {
        document.body.style.backgroundColor = 'green';
    }, 5000);
}
