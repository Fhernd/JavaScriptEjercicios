// Ejercicio 1254: Usar la función filter() para remover los valores similares a null.

// null: undefined, false, 0, '', "", ``, !true

let datos = [123, undefined, '    ', {a: 42}, false, 0, '', true, "", 'JS', 123.47, 0.0, ``, !true]

let resultado = datos.filter((e) => e);

console.log(resultado);
console.log(resultado.length);
