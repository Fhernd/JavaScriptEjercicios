// Ejercicio 655: Encontrar los años en un rango, cuyo primero de enero es un domingo.

let agnioInicio = 2000;
let agnioFin = 3000;

for(let agnio = agnioInicio; agnio <= agnioFin; ++agnio) {
    let fecha = new Date(agnio, 0, 1);

    if (fecha.getDay() === 0) {
        console.log(`El primero de enero es un domingo para el año ${agnio}`);
    }
}
