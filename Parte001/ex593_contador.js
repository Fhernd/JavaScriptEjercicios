let contador = 0;

function incrementarContador(){
    ++contador;
    postMessage(contador);

    setTimeout(incrementarContador, 1000);
}

incrementarContador();
