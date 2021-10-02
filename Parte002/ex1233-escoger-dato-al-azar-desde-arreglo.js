// Ejercicio 1233: Obtener de forma aleatoria un dato desde un arreglo.

function seleccionAleatoria(datos) {
    let n = datos.length;

    let indiceAleatorio = Math.floor(Math.random() * n);

    return datos[indiceAleatorio];
}

let numeros = [1, 2, 3, 4, 5];

for (let i = 1; i <= 10; i++) {
    console.log(seleccionAleatoria(numeros));
}
