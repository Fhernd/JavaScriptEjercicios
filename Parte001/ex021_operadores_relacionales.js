// Ejercicio 21: Uso de los operadores relacionales.

// <, <=, >, >=, ==, ===

let numero = 5;

if (numero < 7){
    console.log(`${numero} es menor a 7`)
} else {
    console.log(`${numero} no es menor a 7`)
}

if (numero <= 5){
    console.log(`${numero} es menor o igual a 5`)
} else {
    console.log(`${numero} no es menor o igual a 5`)
}

if (numero > 7){
    console.log(`${numero} es mayor a 7`)
} else {
    console.log(`${numero} no es mayor a 7`)
}

if (numero >= 5){
    console.log(`${numero} es mayor a 5`)
} else {
    console.log(`${numero} no es mayor a 5`)
}

console.log(numero == 5)
console.log(numero == '5')

console.log()

console.log(numero === 5)
console.log(numero === '5')

console.log(numero != 5)
