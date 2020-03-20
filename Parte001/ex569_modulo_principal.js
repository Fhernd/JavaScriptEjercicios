// Ejercicio 569: Crear una aplicación para importar dos módulos con RequireJS.

require(['./ex567_modulo_funciones.js', './ex568_modulo_clase.js'], function(aritmetica, Producto){

    let a = 2;
    let b = 3;

    console.log('Suma:', aritmetica.suma(a, b));
    console.log('Resta:', aritmetica.resta(a, b));
    console.log('Producto:', aritmetica.multiplicacion(a, b));
    console.log('Division:', aritmetica.division(a, b));

    let computador = new Producto(1001, 'Computador portátil', 1299);

    console.log(computador);
});
