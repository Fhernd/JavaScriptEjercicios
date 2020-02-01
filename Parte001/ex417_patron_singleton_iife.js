// Ejercicio 417: Implementar el patrón singleton usando una expresión IIFE.

let singleton = (function () {
    let instancia;

    function inicializacion() {
        function metodoPrivado() {
            console.log('Método privado');
        }

        let variablePrivada = 'Variable privada';
        let numeroAleatorio = Math.random();

        return {
            metodoPublico: function() {
                console.log('Método público.');
            },
            propiedadPublica: 'Propiedad pública',

            obtenerNumeroAleatorio: function(){
                return numeroAleatorio;
            }
        };
    };

    return {
        obtenerInstancia: function () {
            if (!instancia){
                instancia = inicializacion()
            }

            return instancia;
        }
    };
})();

let instancia1 = singleton.obtenerInstancia();
let instancia2 = singleton.obtenerInstancia();

console.log(instancia1.obtenerNumeroAleatorio());
console.log(instancia2.obtenerNumeroAleatorio());
console.log(instancia1.obtenerNumeroAleatorio() == instancia2.obtenerNumeroAleatorio());
