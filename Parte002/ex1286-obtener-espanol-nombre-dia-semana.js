// Ejercicio 1286: Obtener el nombre del día en español usando un objeto y la función getDay().

function obtenerNombreDiaEspanol(fecha) {
    const diasSemana = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miércoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sábado'
    };

    return diasSemana[fecha.getDay()];
}

console.log(obtenerNombreDiaEspanol(new Date()));   // 2/Nov/2021 => Martes
console.log(obtenerNombreDiaEspanol(new Date(2021, 10, 1)));   // 2/Nov/2021 => Lunes
