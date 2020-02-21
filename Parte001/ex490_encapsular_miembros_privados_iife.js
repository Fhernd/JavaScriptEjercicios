// Ejercicio 490: Usar una IIFE para encapsular miembros de datos privados en una librería.

let ManipulacionCadenas = (function(){
    let caracterReemplazo = '##';

    this.api = {

        reemplazarBarraInclinada: function(cadena) {
            return cadena.replace(/\\/g, caracterReemplazo);
        },

        reemplazarParentesisAngulares: function(cadena) {
            return cadena.replace(/</g, caracterReemplazo).replace(/>/g, caracterReemplazo);
        }
    };

    return this.api;
})();

console.log(ManipulacionCadenas.caracterReemplazo); // undefined
console.log(ManipulacionCadenas.reemplazarBarraInclinada('\\JavaScript es \\génial'));
