// Ejercicio 355: Crear una función personalizada para convertir radianes a grados.

function convertirRadianesGrados(radianes){
    return radianes * (180/Math.PI);
}

console.log(convertirRadianesGrados(Math.PI/2));
console.log(convertirRadianesGrados(Math.PI));
console.log(convertirRadianesGrados(Math.PI*2));
