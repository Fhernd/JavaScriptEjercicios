// Ejercicio 378: Validar con some() que algunos elementos de un arreglo superen una prueba.

function validarNombreColor(color){
    let re = /^[a-zA-Z]+$/;
    return re.test(color);
}

let colores = ['Blanco', 'Negro', 'Rojo', 'Verde', '@zul', 'gr1s'];

let resultado = colores.some(validarNombreColor);

console.log(resultado);
