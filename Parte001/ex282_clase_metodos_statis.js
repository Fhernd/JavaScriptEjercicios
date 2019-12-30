// Ejercicio 282: Crear una clase con métodos static para simular Math.

console.log(Math.pow(2, 3));
console.log(Math.sin(Math.PI));
console.log(Math.cos(Math.PI));

class Calculadora{
    static potencia(base, potencia){
        return Math.pow(base, potencia);
    }

    static seno(radianes){
        return Math.sin(radianes);
    }

    static coseno(radianes){
        return Math.cos(radianes);
    }
}

console.log();

console.log(Calculadora.potencia(2, 3));
console.log(Calculadora.seno(Math.PI));
console.log(Calculadora.coseno(Math.PI));
