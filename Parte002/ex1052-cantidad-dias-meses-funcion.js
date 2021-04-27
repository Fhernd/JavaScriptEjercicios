// Ejercicio 1052: Definir una función para obtener la cantidad de días en un mes y año dados.

function cantidadDias(mes, año) {
    return new Date(año, mes, 0).getDate();
}

console.log(cantidadDias(1, 2019));
console.log(cantidadDias(2, 2020)); // 29
console.log(cantidadDias(4, 2021)); // 30
