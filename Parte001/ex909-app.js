import {Calculadora} from './ex909-calculadora.js';

window.onload = function() {
    document.getElementById('calcular').onclick = function() {
        let calculadora = new Calculadora();

        let numero1 = parseInt(document.getElementById('numero1').value);
        let numero2 = parseInt(document.getElementById('numero2').value);

        let suma = calculadora.sumar(numero1, numero2);
        let resta = calculadora.restar(numero1, numero2);
        let multiplicacion = calculadora.multiplicar(numero1, numero2);
        let division = calculadora.dividir(numero1, numero2);

        document.getElementById('suma').textContent = suma;
        document.getElementById('resta').textContent = resta;
        document.getElementById('multiplicacion').textContent = multiplicacion;
        document.getElementById('division').textContent = division;
    }
}
