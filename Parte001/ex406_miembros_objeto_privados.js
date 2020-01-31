// Ejercicio 406: Crear miembros de instancia de un objeto como privados.

function MP3(cancion, artista){
    let _titulo = cancion;

    this.mostrarTitulo = function(){
        return `${artista} - ${_titulo}`;
    };
}

let klavier = new MP3('Klavier', 'Rammstein');
console.log(klavier.titulo);
console.log(klavier.mostrarTitulo());

console.log();

klavier.titulo = 'Piano';
console.log(klavier.titulo);
console.log(klavier.mostrarTitulo());
