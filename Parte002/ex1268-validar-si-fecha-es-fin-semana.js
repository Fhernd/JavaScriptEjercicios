// Ejercicio 1268: Crear una función para validar si una fecha corresponde con el fin de semana.

// domingo: 0, lunes: 1, ..., sábado: 6.

function esFinDeSemana(fecha) {
    return fecha.getDay() == 0 || fecha.getDay() == 6;
}

console.log(esFinDeSemana(new Date())); // false
console.log(esFinDeSemana(new Date(2021, 9, 17))); // true
console.log(esFinDeSemana(new Date(2021, 9, 16))); // true
