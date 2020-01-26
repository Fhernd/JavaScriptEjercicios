// Ejercicio 377: Validar con every() que todos los elementos de un arreglo superen una prueba.

let colores = ['Blanco', 'Negro', 'Rojo', 'Verde', '@zul', 'gr1s'];

function validarNombresColores(color){
    let re = /^[a-zA-Z]+$/;
    return re.test(color);
}

let resultado = colores.every(validarNombresColores);
console.log(resultado);

colores[4] = 'Azul';
colores[5] = 'Gris';
resultado = colores.every(validarNombresColores);
console.log(resultado);
