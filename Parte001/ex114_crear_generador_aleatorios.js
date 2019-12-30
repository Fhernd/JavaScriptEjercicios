// Ejercicio 114: Crear una función para la generación de números aleatorios.

function generarAleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

for(let i = 1; i <= 10; ++i){
    console.log(generarAleatorio(1, 6));
}
