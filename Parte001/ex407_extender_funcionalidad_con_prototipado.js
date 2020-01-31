// Ejercicio 407: Extender la funcionalidad de una función constructora con prototipado.

function MP3(cancion, artista){
    let _titulo = cancion;

    this.mostrarTitulo = function(){
        return `${artista} - ${_titulo}`;
    };
}

MP3.prototype.agregarCategoria = function(nombreCategoria){
    this.nombreCategoria = nombreCategoria;
};

MP3.prototype.mostrarCategoria = function() {
    return this.nombreCategoria;
};

let klavier = new MP3('Klavier', 'Rammstein');
console.log(klavier.mostrarTitulo());
klavier.agregarCategoria('Rock');
console.log(klavier.mostrarCategoria());
