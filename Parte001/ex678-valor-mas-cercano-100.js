// Ejercicio 678: Crear una función personalizada para encontrar el número más cercano a 100.

function numeroMasCercanoA100(a, b) {
    if (a !== b) {
        let x = Math.abs(a - 100);
        let y = Math.abs(b - 100);

        if (x < y) {
            return a;
        }

        if (y < x) {
            return b;
        }

        return null;
    } else {
        return null;
    }
}

console.log(numeroMasCercanoA100(1003, 1002));  // 1002
console.log(numeroMasCercanoA100(-1003, -1002));  // -1002
console.log(numeroMasCercanoA100(0, 0));  // null
console.log(numeroMasCercanoA100(100, 100));  // null
console.log(numeroMasCercanoA100(99, 98));  // 99
console.log(numeroMasCercanoA100(101, 102));  // 101
console.log(numeroMasCercanoA100(98, 102));  // null
