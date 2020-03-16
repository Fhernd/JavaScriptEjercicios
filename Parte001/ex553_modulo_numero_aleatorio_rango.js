// Ejercicio 553: Exportar una función desde un módulo Node.js.

function generarEnteroAleatorio(limiteInferior, limiteSuperior){
    let aleatorio = limiteInferior + Math.round(Math.random() * limiteInferior);

    return aleatorio;
}

module.exports.generarEnteroAleatorio = generarEnteroAleatorio;
