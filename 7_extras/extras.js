

function encontrarAluno(nomeAluno, listaNomeAlunos) {
    // Retorna true se o nome do aluno está na lista, false caso contrário
    let cont = 0;
    while (cont != listaNomeAlunos.length){
        
        if (nomeAluno === listaNomeAlunos[cont]){
            return(true);
        }
        cont+=1;
    }
    return(false);
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    // Retorna uma lista de alunos que correspondem ao nome fornecido
    let cont = 0;
    let i = 0;
    let lista = [];
    while (cont != listaNomeAlunos.length){
        if (nomeAluno === listaNomeAlunos[cont]){
            lista[i] = nomeAluno;
            i+=1;
        }
        cont +=1;
    }
    return(lista)
}

function construirAluno(nomeAluno, idadeAluno) {
    // Constrói e retorna um objeto aluno com nome e idade
    let aluno = {
        nome: nomeAluno,
        idade: idadeAluno
    }
    return(aluno)
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
};
