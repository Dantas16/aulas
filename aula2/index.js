// Importação de dependência
const moment = require('moment')


// Criação de uma constante do tipo array
const produtos = [
  { id: 1, nome: 'Arroz 5kg', valor: 20.00, qtd: 1 },
  { id: 2, nome: 'Feijão', valor: 6, qtd: 1 },
  { id: 3, nome: 'Açucar', valor: 4.25, qtd: 1 },
  { id: 4, nome: 'Batata', valor: 5.90, qtd: 1 },
  { id: 5, nome: 'Carne', valor: 20.00, qtd: 1 },
  { id: 6, nome: 'Miojo', valor: 1.99, qtd: 1 }
]

console.log('----------- Mercado DH ----------')

// Criação de variável e uso da dependência importada para formatar uma data no padrão pt-br
let data = moment().format('DD/MM/YYYY hh:mm')

console.log('----- Lista Produtos - ' + data + ' -----')
let valorTotal = 0;
for (let i=0; i < produtos.length; i++) {
  valorTotal += produtos[i].qtd * produtos[i].valor

  console.log(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd}`)
}
console.log('---> Total R$: ' + valorTotal)
