const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const primeiraLetraMaiuscula = frutas.map((x, i) => `${i} - ${x.slice(0, 1).toUpperCase()
    + x.slice(1).toLowerCase()}`);

console.log(primeiraLetraMaiuscula);