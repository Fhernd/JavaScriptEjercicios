// Ejercicio 283: Ejecutar una función una vez se cargue un documento HTML.

function documentoCargado(){
    alert('El documento HTML se ha cargado.');
}

document.addEventListener('DOMContentLoaded', documentoCargado, false);
