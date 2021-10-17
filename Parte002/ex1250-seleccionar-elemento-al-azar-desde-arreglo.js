// Ejercicio 1250: Seleccionar al azar un elemento de un arreglo usando la función random().

function seleccionarDatoAlAzar(datos) {
    return datos[Math.floor(Math.random() * datos.length)]
}

let paises = ['Colombia', 'Corea del Sur', 'Nicaragua', 'Perú', 'Taiwan'];

console.log(seleccionarDatoAlAzar(paises));
