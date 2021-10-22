// Ejercicio 1278: Convertir una marca de tiempo Unix en una hora por medio de una función.

function convertirUnixAHora(unix) {
    let fecha = new Date(unix * 1000);

    let horas = fecha.getHours();
    let minutos = '0' + fecha.getMinutes();
    let segundos = '0' + fecha.getSeconds();

    return `${horas}:${minutos.substr(-2)}:${segundos.substr(-2)}`;
}

console.log(convertirUnixAHora(15123852273));
