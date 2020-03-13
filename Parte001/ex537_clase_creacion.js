// Ejercicio 537: Crear una jerarquía de herencia para las clases Libro y LibroClasificado.

class Libro{
    constructor(titulo, autor, fechaPublicacion){
        this.titulo = titulo;
        this.autor = autor;
        this.fechaPublicacion = fechaPublicacion;
    }

    getInformacionLibro(){
        return `Autor: ${this.autor} - Título: ${this.titulo} - Fecha publicación: ${this.fechaPublicacion}`;
    }
}

class LibroClasificado extends Libro {
    constructor(titulo, autor, fechaPublicacion, categoria){
        super(titulo, autor, fechaPublicacion);

        this.categoria = categoria;
    }

    getInformacionLibro(){
        return `${super.getInformacionLibro()} - Categoría: ${this.categoria}`;
    }
}

let crimenYCastigo = new LibroClasificado('Crimen y castigo', 'Fyodor Dostoevsky', '1867-01-01', 'Literatura');
console.log('Tipo de dato:', typeof crimenYCastigo);
console.log(crimenYCastigo.getInformacionLibro());
