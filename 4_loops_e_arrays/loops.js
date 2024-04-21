/*
    Cola:
    Lembrem-se da condição de parada do loop.
    Dentro do loop, pode haver qualquer bloco de código que se repetirá
    Loops: for, while e do while
*/

function listaImpares(limite) {
    // Retorna um array contendo todos os números ímpares até 'limite'
    let impares = [];
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    return impares;
}

/*
    Cola: Texto é um array de caracteres,
    então você pode acessar cada caractere individualmente com texto[i]
*/
function contaCaracteres(texto, caracter) {
    // Retorna a quantidade de vezes que 'caracter' aparece em 'texto'
    const contador = texto.split(caracter).length - 1;
    return contador;
}

module.exports = {
    listaImpares,
    contaCaracteres,
};
