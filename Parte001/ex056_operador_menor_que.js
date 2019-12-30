// Ejercicio 56: Uso del operador relacional menor que.

// < 

// 3 < 5 => true; 7 < 5 => false

if (3 < 5){
    console.log('3 es menor que 5');
}

if (7 < 5) {
    console.log('7 es menor que 5');
}

if (5 < 5) {
    console.log('5 es menor que 5');
}

let a = 6;
let b = 10;

if (a < b){
    console.log(`${a} es menor que ${b}`);
}

if (a < 10){
    console.log(`${a} es menor que ${10}`);
}

console.log();

if ('5' < '7'){ // ToNumber
    console.log("5 es menor que 7");
}

if ('b' < '7'){ // ToNumber
    console.log("b es menor que 7");
}

if (NaN < '7'){ // ToNumber
    console.log("NaN es menor que 7");
}
