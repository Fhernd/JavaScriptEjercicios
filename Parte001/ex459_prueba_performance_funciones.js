// Ejercicio 459: Usar jsPerf para ejecutar pruebas de rendimiento sobre tipos de funciones.

let colores = ['Blanco', '##', 'Rojo', '##', 'Verde', '##', 'Azul', 'Amarillo', 'Gris', '##'];

// Función nombrada:
function removerElementos(elemento){
    return elemento !== '##';
}

// Invocación de filter() con la función nombrada:
let resultado1 = colores.filter(removerElementos);

// Invocación de filter() con una función anónima:
let resultado2 = colores.filter(function(elemento){
    return elemento !== '##';
});
