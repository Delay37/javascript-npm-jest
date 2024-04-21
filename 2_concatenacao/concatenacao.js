/*  Cola:
    É possível somar com a operação + e também com interpolação utilizando crase
    `texto ${variavel} texto`
*/

function concatenaTexto(texto1, texto2) {
    // Implemente a função que retorna a concatenação de texto1 e texto2
    return texto1 + texto2;
}

function concatenaTextoNumero(texto, numero) {
    // Implemente a função que retorna a concatenação de texto com numero
    return texto + numero;
}

function concatenaNumeroTexto(numero, texto) {
    // Implemente a função que retorna a concatenação de numero com texto
    return numero + texto;
}

module.exports = {
    concatenaTexto,
    concatenaTextoNumero,
    concatenaNumeroTexto
};