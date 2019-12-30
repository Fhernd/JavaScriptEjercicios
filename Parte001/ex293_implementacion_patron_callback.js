// Ejercicio 293: Crear una implementación básica del patrón callback.

function exito(){
    console.log('La función se ejecutó de forma satisfactoria.');
}

function fallo(){
    console.error('La función falló.');
}

function ejecutarProceso(nombre, exito, fallo){
    if (nombre == 'Edward'){
        exito();
    } else {
        fallo();
    }
}

ejecutarProceso('Edgar', exito, fallo);
ejecutarProceso('Edward', exito, fallo);
