// Ejercicio 553: Exportar una función desde un módulo Node.js.

let moduloAleatorio = require('./ex553_modulo_numero_aleatorio_rango');

for(let i = 1; i <= 10; ++i){
    console.log(moduloAleatorio.generarEnteroAleatorio(1, 10));
}
