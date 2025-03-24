/*
    Cola:
    Lembrem-se da condição de parada do loop.
    Dentro do loop, pode haver qualquer bloco de código que se repetirá
    Loops: for, while e do while
*/

function listaImpares(limite) {
    // Retorna um array contendo todos os números ímpares até 'limite'
    let cont = 0;
    let i = 0;
    let numeros = [];
    while (cont != limite){
        cont +=1;
        if (cont % 2 != 0){
            numeros[i] = cont;
            i +=1;
        }
    }
    return(numeros);
}

/*
    Cola: Texto é um array de caracteres,
    então você pode acessar cada caractere individualmente com texto[i]
*/
function contaCaracteres(texto, caracter) {
    // Retorna a quantidade de vezes que 'caracter' aparece em 'texto'
    let cont = 0;
    let quantidade = 0;
    while (cont != texto.length) {  // Corrigido para 'texto.length'
        if (texto[cont] === caracter) {
            quantidade += 1;
        }
        cont += 1;
    }
    return quantidade;
}

module.exports = {
    listaImpares,
    contaCaracteres,
};
