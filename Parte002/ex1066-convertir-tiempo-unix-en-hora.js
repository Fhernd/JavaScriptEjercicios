// Ejercicio 1066: Calcular la hora a partir de un tiempo dado en formato Unix.

function convertirUnixAHora(unix) {
    if (typeof unix != 'number' || !Number.isInteger(unix)) {
        throw TypeError('El argumento debe ser un número entero.');
    }

    let fecha = new Date(unix * 1000);
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    return {horas, minutos, segundos};
}

try {
    console.log(convertirUnixAHora(1620168209));    // ~ 17:44:13
} catch (e) {
    console.log(`Error: ${e.message}`);
}
