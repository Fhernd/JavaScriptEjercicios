// Ejercicio 489: Agregar soporte para encapsular miembros de datos privados en una librería.

let ManipulacionCadenas = function(){
    let caracterReemplazo = '##';

    this.reemplazarBarraInclinada = function(cadena) {
        return cadena.replace(/\\/g, caracterReemplazo);
    };

    this.reemplazarParentesisAngulares = function(cadena) {
        return cadena.replace(/</g, caracterReemplazo).replace(/>/g, caracterReemplazo);
    };
};

let reemplazo = new ManipulacionCadenas();
console.log(reemplazo.caracterReemplazo); // undefined
console.log(reemplazo.reemplazarBarraInclinada('\\JavaScript es \\génial'));
