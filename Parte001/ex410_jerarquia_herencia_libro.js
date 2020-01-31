// Ejercicio 410: Crear una jerarquía de herencia con funciones constructoras usando Object.create().

function Libro(titulo, autor){
    this.obtenerTitulo = function () {
        return `Título: ${titulo}`;
    };

    this.obtenerAutor = function () {
        return `Autor: ${autor}`;
    };
}

function LibroLiteratura(titulo, autor, categoria){
    this.obtenerCategoria = function () {
        return `Categoría: ${categoria}`;
    };

    this.obtenerDatosCompletos = function () {
        return `Título: ${this.obtenerTitulo()} - Autor: ${this.obtenerAutor()} - Categoría: ${categoria}`;
    };

    Libro.apply(this, arguments);
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
