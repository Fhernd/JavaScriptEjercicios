// Ejercicio 1408: Ordenar un conjunto de objetos a partir de una propiedad específica.

function ordenarObjetos(propiedad, sentido, funcionOrdenamiento) {
    let llaveOrdenamiento = funcionOrdenamiento ? 
        function(objeto) {
            return funcionOrdenamiento(objeto[propiedad]);
        } : function(objeto) {
            return objeto[propiedad];
        }
    
        sentido = !sentido ? 1 : -1;

        return function (objeto1, objeto2) {
            return objeto1 = llaveOrdenamiento(objeto1), objeto2 = llaveOrdenamiento(objeto2), sentido * ((objeto1 > objeto2) - (objeto2 > objeto1));
        }
}

let biblioteca = [
    {
        titulo: 'Crimen y castigo',
        autor: 'Dostoevsky',
        estadoLectura: true
    },
    {
        titulo: 'Steve Jobs',
        autor: 'Walter Isaacson',
        estadoLectura: true
    },
    {
        titulo: 'The Sixth Extinction',
        autor: 'Elizabeth Kolbert',
        estadoLectura: false
    }
];

let resultado = biblioteca.sort(ordenarObjetos('titulo', true));

console.log(biblioteca);
console.log(resultado);

console.log();

resultado = resultado.sort(ordenarObjetos('autor', false));

// console.log(biblioteca);
console.log(resultado);
