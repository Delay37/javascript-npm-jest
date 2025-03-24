/*  Cola:
    É possível somar com a operação + e também com interpolação utilizando crase
    `texto ${variavel} texto`
*/

function concatenaTexto(texto1, texto2) {
    let textoConcatenado = texto1 + texto2;
    return(textoConcatenado);
}

function concatenaTextoNumero(texto, numero) {
    let textoNumeroConcatenado = texto + numero;
    return(textoNumeroConcatenado)
}

function concatenaNumeroTexto(numero, texto) {
    let numeroTextoConcatenado = numero + texto;
    return(numeroTextoConcatenado)
}

module.exports = {
    concatenaTexto,
    concatenaTextoNumero,
    concatenaNumeroTexto
};