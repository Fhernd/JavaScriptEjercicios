// Ejercicio 18: Comprobar si una función retorna valor.

function funcion1(){
    return;
}

function funcion2(){
    const A = 3;
}

function funcion3(){
    return 2 + 2;
}

function funcion4(){
    return true;
}

function funcion5(){
    return {};
}

let fn1 = funcion1();
console.log('`funcion1` retorna:', fn1)
console.log()

let fn2 = funcion2();
console.log('`funcion2` retorna:', fn2)
console.log()

let fn3 = funcion3();
console.log('`funcion3` retorna:', fn3)
console.log()

let fn4 = funcion4();
console.log('`funcion4` retorna:', fn4)
console.log()

let fn5 = funcion5();
console.log('`funcion5` retorna:', fn5)
console.log()

if(fn1 === undefined){
    console.log('`funcion1` no retorna nada.')
}

console.log()

if(fn3 === undefined){
    console.log('`funcion3` no retorna nada.')
} else {
    console.log('`funcion3` retorna un valor.')
}

console.log()

console.log(fn5 === undefined)

console.log(typeof fn2 === 'undefined')
