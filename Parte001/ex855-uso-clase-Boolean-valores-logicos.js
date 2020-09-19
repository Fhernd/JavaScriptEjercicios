// Ejercicio 855: Uso del constructor Boolean() para crear valores lógicos (true y false).

let valorLogico = new Boolean();
console.log(valorLogico);

valorLogico = new Boolean('');
console.log(valorLogico);

valorLogico = new Boolean("");
console.log(valorLogico);

valorLogico = new Boolean(``);
console.log(valorLogico);

valorLogico = new Boolean(0);
console.log(valorLogico);

valorLogico = new Boolean(23);
console.log(valorLogico);

valorLogico = new Boolean(-23);
console.log(valorLogico);

valorLogico = new Boolean(null);
console.log(valorLogico);

valorLogico = new Boolean(undefined);
console.log(valorLogico);

valorLogico = new Boolean('      ');
console.log(valorLogico);

valorLogico = new Boolean('JavaScript');
console.log(valorLogico);

valorLogico = new Boolean(new Map());
console.log(valorLogico);

valorLogico = new Boolean('false');
console.log(valorLogico);

valorLogico = new Boolean([]);
console.log(valorLogico);

valorLogico = new Boolean({});
console.log(valorLogico);

console.log();

valorLogico = new Boolean(true);
console.log(valorLogico);

valorLogico = new Boolean(false);
console.log(valorLogico);
