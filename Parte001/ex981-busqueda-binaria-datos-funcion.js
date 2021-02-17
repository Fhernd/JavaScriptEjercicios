// Ejercicio 981: Definir una función personalizada para realizar una búsqueda binaria de datos.

function busquedaBinaria(datos, dato) {
    let medio = Math.floor(datos.length / 2);

    if (datos[medio] === dato) {
        return medio;
    } else if (datos.length == 1) {
        return null;
    } else if (datos[medio] < dato) {
        let datosTemporal = datos.slice(medio + 1);

        let resultado = busquedaBinaria(datosTemporal, dato);

        if (resultado == null) {
            return null;
        } else {
            return medio + 1 + resultado;
        }
    } else {
        let datosTemporal = datos.slice(0, medio);

        return busquedaBinaria(datosTemporal, dato);
    }
}

let numeros = [2, 3, 5, 7, 11, 13, 17];
console.log(busquedaBinaria(numeros, 7));   // 3

console.log(busquedaBinaria(numeros, 19));   // null

console.log(busquedaBinaria(numeros, 17));   // 6

console.log(busquedaBinaria(numeros, 3));   // 1
