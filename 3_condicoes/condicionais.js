/*
    Cola:
    Utilizar if e else para condicionais, sempre com uma condição que resulta em true ou false
*/

function classificaIdade(idade) {
    // Retorna "criança" se idade < 12, "adolescente" se 12 <= idade < 18, e "adulto" se idade >= 18
    if (idade < 12) {
        return "criança";
    } else if (idade < 18) {
        return "adolescente";
    } else {
        return "adulto";
    }
}

function ehPar(numero) {
    // Retorna "par" se o número é par, e "ímpar" se o número é ímpar
    return numero % 2 === 0 ? "par" : "ímpar";
}

function podeVotar(idade) {
    // Retorna "pode votar" se idade >= 16, caso contrário retorna "não pode votar"
    return idade >= 16 ? "pode votar" : "não pode votar";
}

function encontraMaior(a, b, c) {
    // Retorna o maior entre os três números a, b e c
    return Math.max(a, b, c);
}

module.exports = {
    classificaIdade,
    ehPar,
    podeVotar,
    encontraMaior
};