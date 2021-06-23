// Ejercicio 1167: Aplicar el teorema de Pitágoras a través de una función.

// c^2 = x^2 + y^2
// c = (x^2 + y^2)^(1/2) = sqrt(x^2 + y^2)

function teoremaPitagoras(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        return null;
    }

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

console.log(teoremaPitagoras(2, 3));    // Math.sqrt(13) = 3.?
console.log(teoremaPitagoras(4, 3));    // Math.sqrt(25) = 5
