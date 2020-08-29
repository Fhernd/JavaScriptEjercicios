// Ejercicio 822: Crear una función para generar colores aleatorios en formato hexadecimal.

function generarColorHexadecimal() {
    let colorHex = (Math.random() * 0xffffff * 1000000).toString(16);

    return `#${colorHex.slice(0, 6)}`;
}

console.log(generarColorHexadecimal());
