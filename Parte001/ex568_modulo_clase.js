// Ejercicio 568: Crear un módulo para exportar una clase para ser utilizada en RequireJS.

class Producto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

define(function(){
    return Producto;
});
