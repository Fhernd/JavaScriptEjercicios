// Ejercicio 491: Usar patrón singleton para encapsular miembros de datos privados en una librería.

let ManipulacionCadenasSingleton = (function(){

    let instancia;

    function inicializacion() {

        let caracterReemplazo = '##';

        return {
            reemplazarBarraInclinada: function(cadena) {
                return cadena.replace(/\\/g, caracterReemplazo);
            },

            reemplazarParentesisAngulares: function(cadena) {
                return cadena.replace(/</g, caracterReemplazo).replace(/>/g, caracterReemplazo);
            }
        };
    }

    return {
        obtenerInstancia: function(){
            if (!instancia){
                instancia = inicializacion();
            }

            return instancia;
        }
    };
})();

let objeto1 = ManipulacionCadenasSingleton.obtenerInstancia();
let objeto2 = ManipulacionCadenasSingleton.obtenerInstancia();

console.log(objeto1 === objeto2);

console.log(objeto1.caracterReemplazo); // undefined
console.log(objeto1.reemplazarBarraInclinada('\\JavaScript es \\génial'));

console.log();

console.log(objeto2.caracterReemplazo); // undefined
console.log(objeto2.reemplazarBarraInclinada('\\JavaScript es \\génial'));
