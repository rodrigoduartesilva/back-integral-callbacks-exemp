const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
let i = 0;

const retornoJogadores = function imprimirJogadores() {
    if (i === jogadores.length) {
        console.log('A rodada terminou!');
        clearInterval(intervalo);
    } else {
        console.log(jogadores[i]);
        i++;
    }
}


const intervalo = setInterval(retornoJogadores, 2000);