const alunos = [
  { nome: 'Walmir', turma: 1 },
  { nome: 'Isaque', turma: 3 },
  {  nome: 'Nicolly', turma: 2 },
  {  nome: 'Maria', turma: 3 },
  {  nome: 'Júlio', turma: 2 },
  {  nome: 'Joãozinho', turma: 1 },
  {  nome: 'Beatriz', turma: 4 },
  {  nome: 'Eduardo', turma: 4 },
]

for (var i = alunos.length - 1; i >= 0; i--) {
  console.log(alunos[i].nome)
}