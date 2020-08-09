// Ejercicio 668: Comprobar si una cadena de caracteres empieza con el texto "Java".

function empiezaConJava(cadena) { 
    if (cadena === null || cadena === undefined || cadena.substring(0, 4) === "Java") {
        return cadena;
    } else {
        return 'Java' + cadena;
    }
}

console.log(empiezaConJava("Python"));  // JavaPython
console.log(empiezaConJava("java"));  // Javajava
console.log(empiezaConJava("JavaScript"));  // JavaScript
