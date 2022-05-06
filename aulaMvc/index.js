var lista_alunos = [
  'Walysson',
  'Rafael',
  'Maria Vitória',
  'Thayssa',
  'Ana Laura'
]

var produtosLista = [
  {
    id: 1,
    produtoNome: 'Coleira',
    valor: 'R$ 30,00',
    descricao: 'Plano ouro',
    imgUrl: 'https://m.media-amazon.com/images/I/61meFerCweL._AC_SX466_.jpg'
  }
]

var cores = [
  'red',
  'pink',
  'blue',
  'gray',
  'green'
]

/*setTimeout(function(){
  var img = document.getElementById('imagem');
  img.setAttribute('src', 'https://seduca.com.br/wp-content/uploads/2018/08/228211-x-estrategias-para-melhorar-o-desempenho-dos-alunos.jpg');
  console.log('Imagem trocada!')
}, 5000);

var index = 0;
var intervalo = setInterval(function() {
  console.log(lista_alunos[index]);

  document.body.style.backgroundColor = cores[index];

  if (index == lista_alunos.length) {
    clearInterval(intervalo)
  }

  index++
}, 2000);*/

function loadAlunos() {
  var ol = document.getElementById('lista');

  for(var i = 0; i < lista_alunos.length; i++) {

    var li = document.createElement('li');
    var textoLi = document.createTextNode(lista_alunos[i]);

    li.appendChild(textoLi)
    ol.appendChild(li)
  }

}

function alerta() {
  window.alert('Clickou')
}



document.addEventListener('DOMContentLoaded', function(){
  console.warn('Página carregada completamente')

  var btn = document.getElementById('loadAlunoSemClick');
  btn.addEventListener('click', alerta)
})