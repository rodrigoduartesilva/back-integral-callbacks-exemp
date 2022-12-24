const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33]

const arrayNumeroUnico = [];

notas.forEach(function (item) {
    const verificaExistencia = arrayNumeroUnico.find(function (valor) {
        return valor == item;
    });

    if (!verificaExistencia) {
        arrayNumeroUnico.push(item);
    }
});

console.log(arrayNumeroUnico);