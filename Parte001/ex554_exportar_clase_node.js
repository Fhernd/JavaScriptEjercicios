// Ejercicio 554: Exportar una clase personalizada desde un módulo Node.js.

let modulo = require('./ex554_modulo_clase_producto');

let computador = new modulo.Producto(1001, 'Computador', 'MSi', 759);

console.log(computador.getDatosProducto());
