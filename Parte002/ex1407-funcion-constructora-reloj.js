// Ejercicio 1407: Definir una función constructora para simular un reloj.

function Reloj() {
    this.fechaActual = new Date();
    this.horas = this.fechaActual.getHours();
    this.minutos = this.fechaActual.getMinutes();
    this.segundos = this.fechaActual.getSeconds();
}

Reloj.prototype.iniciar = function() {
    setInterval(this.actualizar.bind(this), 1000);
}

Reloj.prototype.actualizar = function() {
    this.actualizarTiempo(1);

    let tiempo = `${('0' + this.horas).slice(-2)}:${('0' + this.minutos).slice(-2)}:${('0' + this.segundos).slice(-2)}`;
    console.log(tiempo);
}

Reloj.prototype.actualizarTiempo = function(segundos) {
    this.segundos += segundos;

    if (this.segundos >= 60) {
        ++this.minutos;
        this.segundos = 0;
    }

    if (this.minutos >= 60) {
        ++this.horas;
        this.minutos = 0;
    }

    if (this.horas >= 24) {
        this.horas = 0;
    }
}

let relojDigital = new Reloj();
relojDigital.iniciar();
