// Ejercicio 350: Medir el tiempo que ha transcurrido entre dos eventos.

let inicio = new Date();

setTimeout(function(){
    realizarTarea(inicio);
}, 25000);

function realizarTarea(fechaInicial){
    let fin = new Date();
    let diferencia = fin - fechaInicial;
    console.log(diferencia);
}
