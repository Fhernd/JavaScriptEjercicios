// Ejercicio 128: Convertir colores en hexadecimal a RGB (Red, Green, Blue).

function hexARgb(hex){
    return {
        red: hex >> 16,
        green: hex >> 8 & 255,
        blue: hex & 255
    };
}

let colorHex = 0xFFFFFF;
let colorRgb = hexARgb(colorHex);
console.log(colorRgb);

console.log();

colorHex = 0x372554;
colorRgb = hexARgb(colorHex);
console.log(colorRgb);
