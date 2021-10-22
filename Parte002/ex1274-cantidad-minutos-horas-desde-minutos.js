// Ejercicio 1274: Calcular la cantidad de horas y minutos que hay en un número de minutos dados.

function calcularHorasMinutos(minutos) {
    if (typeof minutos != 'number' || !Number.isInteger(minutos)) {
        throw TypeError('El argumento debe ser un número.');
    }

    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;

    return {
        horas, minutos: minutosRestantes
    };
}

console.log(calcularHorasMinutos(123)); // {horas: 2, minutos: 3}
