var listaProdutos = [
  {
    id: 1,
    nome: 'Coleira doguinho',
    descricao: 'Coleira estilosa para cachorro de rico',
    imgUrl: 'https://m.media-amazon.com/images/I/61meFerCweL._AC_SX679_.jpg',
    valor: 'R$ 50.00'
  }
]

function loadProdutos() {
  console.log('carregando produtos...')
  var cardProduto = document.querySelectorAll('.produto');
  
  var listProd = document.getElementById('listaProd');
  listProd.style.display = 'none';

  var alerta = document.getElementById('alerta');
  alerta.innerHTML = 'Carregando...'
}

document.addEventListener('DOMContentLoaded', function() {
  loadProdutos()
});