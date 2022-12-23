const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];


//Filter retorna um novo array

const cidadesModificado = cidades.filter(x => x.length <= 8);

console.log(cidadesModificado);