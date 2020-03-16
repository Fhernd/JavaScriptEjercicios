// Ejercicio 554: Exportar una clase personalizada desde un módulo Node.js.

class Producto{
    constructor(id, nombre, marca, precio){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }

    getDatosProducto(){
        return `ID: ${this.id} - Nombre: ${this.nombre} - Marca: ${this.marca} - Precio: ${this.precio}`;
    }
}

module.exports.Producto = Producto;
