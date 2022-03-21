let tortas = ['morango','brigadeiro', 'sequilho', 'ameixa', 'doce de leite' ];
let pedidos = [
  { codigo: 1, torta: 'brigadeiro', cliente: 'Walmir' },
  { codigo: 2, torta: 'ameixa', cliente: 'Gutemberg' }
]

let tortaVenda = tortas[3]
console.log("Torta vendida: " + tortaVenda) 

function listaTortasEPedidos(a){
  for (let i = 0; i < a.length ; i++){
    if (a[i].codigo) {
      console.log(a[i].codigo + ' - ' + a[i].torta)
    } else {
      console.log(a[i]);
    }
  }
}

listaTortasEPedidos(tortas)
console.log()
listaTortasEPedidos(pedidos)
console.log()
listaTortasEPedidos(['Ana', 'Walmir', 'Laura'])