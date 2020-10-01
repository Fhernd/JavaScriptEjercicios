// Ejercicio 868: Crear una demostración básica de ejecución de una función asincrónica.

async function funcionAsincronica() {
    return 10;
}

funcionAsincronica().then((v) => console.log(v));   // 10

console.log();

async function funcionAsincronicaConPromesa() {
    return Promise.resolve(10);
}

funcionAsincronicaConPromesa().then((v) => console.log(v)); // 10
