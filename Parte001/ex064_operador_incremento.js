// Ejercicio 64: Uso del operador de preincremento o postincremento.

// ++

let i = 0;

console.log(i);
i = i + 1;
console.log(i);
i = i + 1;
console.log(i);

console.log();

i = 0;
console.log(i);
i += 1;
console.log(i);
i += 1;
console.log(i);

console.log();

i = 0;
console.log(i);
++i;
console.log(i);
++i;
console.log(i);

console.log();

i = 0;
console.log(i);
i++;
console.log(i);
i++;
console.log(i);

console.log();

i = 0;
console.log(++i);
console.log(++i);
console.log(i);

console.log();

i = 0;
console.log(i++);
console.log(i++);
console.log(i);

console.log();

let arreglo = [];

for (let k = 1; k <= 10; ++k){
    arreglo.push(k);
}
