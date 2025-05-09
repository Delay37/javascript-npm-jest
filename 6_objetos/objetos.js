
function retornaPropriedade(objeto, propriedade) {
    // Retorna o valor da propriedade especificada do objeto
    const valor = objeto[propriedade];
    return(valor);
}

function adicionaPropriedade(objeto, propriedade, valor) {
    // Adiciona uma nova propriedade ao objeto com o valor especificado
    objeto[propriedade] = valor;
    return(objeto);
}

module.exports = {
    retornaPropriedade,
    adicionaPropriedade,
};
