// Ejercicio 359: Calcular la longitud de un arco circular dado el ángulo en grados.

function longitudArco(grados, radio){
    let radianes = grados * (Math.PI/180);

    return radianes * radio;
}

let resultado = longitudArco(180, 10);

console.log(resultado);
