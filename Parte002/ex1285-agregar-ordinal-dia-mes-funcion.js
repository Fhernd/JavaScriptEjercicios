// Ejercicio 1285: Crear una función que permita obtener el ordinal (inglés) del día del mes.

// 1 => 1st
// 2 => 2nd

function obtenerOrdinalIngles(fecha) {
    let dia = fecha.getDate();

    return dia + (dia % 10 == 1 && dia != 11 ? 'st' : (dia % 10 == 2 && dia != 12 ? 'nd' : (dia % 10 == 3 && dia != 13 ? 'rd' : 'th')));
}

console.log(obtenerOrdinalIngles(new Date())); // 2nd
console.log(obtenerOrdinalIngles(new Date(2019, 0, 4))); // 4th
console.log(obtenerOrdinalIngles(new Date(2019, 0, 3))); // 3rd
console.log(obtenerOrdinalIngles(new Date(2019, 0, 10))); // 10th
console.log(obtenerOrdinalIngles(new Date(2019, 0, 1))); // 1st
