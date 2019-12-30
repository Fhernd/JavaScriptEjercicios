// Ejercicio 288: Uso del evento onchange sobre el elemento select de HTML.

function seleccionarLenguaje(){
    let cbxLenguajes = document.getElementById('cbxLenguajes');
    let lenguaje = cbxLenguajes.value;

    document.getElementById('lblLenguajeSeleccionado').innerText = `Ud. ha seleccionado el lenguaje ${lenguaje}.`;
}
