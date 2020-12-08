// Ejercicio 928: Aplicar el patrón de diseño singleton al momento de crear una aplicación.

let aplicacion = new class {
    constructor(nombre) {
        this.nombre = nombre;
    }

    iniciar() {
        console.log(`La aplicación ${this.nombre} se está iniciando...`);
    }
}('Gestor Clientes');

aplicacion.iniciar();
