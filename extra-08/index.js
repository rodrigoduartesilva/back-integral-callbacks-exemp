const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda'];

const nomesFiltrados = nomes.filter((x) => {
    return x.substr(0, 1).toLowerCase() == 'a';
});

console.log(nomesFiltrados);