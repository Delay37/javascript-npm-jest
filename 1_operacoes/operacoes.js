
function soma(numeroUm, numeroDois) {
    let resultadoSoma = numeroUm + numeroDois;
    return(resultadoSoma);
}

function subtracao(numeroUm, numeroDois) {
    let resultadoSubtracao = numeroUm - numeroDois;
    return(resultadoSubtracao);
}

function multiplicacao(numeroUm, numeroDois) {
    let resultadoMultiplicacao = numeroUm * numeroDois;
    return(resultadoMultiplicacao)
}

function divisao(numeroUm, numeroDois) {
    let resultadoDivisao = numeroUm / numeroDois;
    return(resultadoDivisao);
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
};
