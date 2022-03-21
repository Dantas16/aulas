const alunos = [
  { codigo: 4, nome: 'Walmir', turma: 1 },
  { codigo: 6, nome: 'Isaque', turma: 3 },
  { codigo: 3, nome: 'Nicolly', turma: 2 },
  { codigo: 1, nome: 'Maria', turma: 3 },
  { codigo: 2, nome: 'Júlio', turma: 2 },
  { codigo: 5, nome: 'Joãozinho', turma: 1 },
  { codigo: 7, nome: 'Beatriz', turma: 4 },
  { codigo: 8, nome: 'Eduardo', turma: 4 },
]

// A diferença entre map e for é que no map ele percorre todos os ítens de um array, 
// enquanto no for podemos escolher a partir de qual ítem e até onde ele percorre
alunos.map(aluno => {

  switch(aluno.turma) {
    case 1:
      console.log(aluno.nome + ' vai para Búzios')
      break;
    case 2:
      console.log(aluno.nome + ' vai para Fernando Noronha')
      break;
    case 3: 
      console.log(aluno.nome + ' vai para Osasco')
      break;
    default:
      console.log(aluno.nome + ' vai para Primavera do Leste')
      break;
  }

})