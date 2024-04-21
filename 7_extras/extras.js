

function encontrarAluno(nomeAluno, listaNomeAlunos) {
    // Retorna true se o nome do aluno está na lista, false caso contrário
    return listaNomeAlunos.includes(nomeAluno);
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    // Retorna uma lista de alunos que correspondem ao nome fornecido
    return listaNomeAlunos.filter(aluno => aluno === nomeAluno);
}

function construirAluno(nomeAluno, idadeAluno) {
    // Constrói e retorna um objeto aluno com nome e idade 
    return {
        nome: nomeAluno,
        idade: idadeAluno
    };
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
};
