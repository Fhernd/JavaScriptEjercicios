// Ejercicio 416: Especificar un nombre de espacio para los objetos personalizados.

let nsLibreria = {
    obtenerElemento: function(id){
        return document.getElementById(id);
    },

    removerBarrasDiagonales: function (texto){
        return texto.replace(/\\/g, '').replace('/', '');
    },

    removerMenorMayorQue: function(texto){
        return texto.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
};

let html = '<div>JavaScript\ es \/<span>tremendo</span></div>';
console.log(html);
let resultado = nsLibreria.removerBarrasDiagonales(html);
console.log(resultado);

console.log();

resultado = nsLibreria.removerMenorMayorQue(html);
console.log(resultado);
