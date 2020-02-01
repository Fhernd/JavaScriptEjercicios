// Ejercicio 420: Encadenar invocación de métodos de un objeto.

// document.getElementById('resultado').setAttribute('class', 'resaltar');

function Libro(titulo, autor){
    this.obtenerTitulo = function () {
        return `Título: ${titulo}`;
    };

    this.obtenerAutor = function () {
        return `Autor: ${autor}`;
    };

    this.sustituirAutor = function(nuevoAutor){
        autor = nuevoAutor;
    }
}

function LibroLiteratura(titulo, autor, categoria){
    this.obtenerCategoria = function () {
        return `Categoría: ${categoria}`;
    };

    this.obtenerDatosCompletos = function () {
        return `Título: ${this.obtenerTitulo()} - Autor: ${this.obtenerAutor()} - Categoría: ${categoria}`;
    };

    Libro.apply(this, arguments);

    this.cambiarAutor = function(nuevoAutor){
        this.sustituirAutor(nuevoAutor);

        return this;
    };
}

LibroLiteratura.prototype = Object.create(Libro.prototype);
LibroLiteratura.prototype.constructor = LibroLiteratura;

let libro = new LibroLiteratura('¿Para qué sirve la filosofía?', 'Darío Sztajnszrajber', 'Filosofía');
console.log(libro);

console.log();

console.log(libro.obtenerAutor());
console.log(libro.obtenerTitulo());
console.log(libro.obtenerCategoria());
console.log(libro.obtenerDatosCompletos());

console.log();

console.log(libro.obtenerAutor());
console.log(libro.cambiarAutor('Darío S.').obtenerAutor());
