var lista_alunos = [
  'Walysson',
  'Rafael',
  'Maria Vitória',
  'Thayssa',
  'Ana Laura'
]

var cores = [
  'red',
  'pink',
  'blue',
  'gray',
  'green'
]

setTimeout(function(){
  var img = document.getElementById('imagem');
  img.setAttribute('src', 'https://seduca.com.br/wp-content/uploads/2018/08/228211-x-estrategias-para-melhorar-o-desempenho-dos-alunos.jpg');
  console.log('Imagem trocada!')
}, 5000);

var index = 0;
var intervalo = setInterval(function() {
  console.log(lista_alunos[index]);
  index++

  document.body.style.backgroundColor = cores[index];

  if (index == lista_alunos.length) {
    clearInterval(intervalo)
  }
}, 2000);

function loadAlunos() {
  var ol = document.getElementById('lista');

  for(var i = 0; i < lista_alunos.length; i++) {

    var li = document.createElement('li');
    var textoLi = document.createTextNode(lista_alunos[i]);

    li.appendChild(textoLi)
    ol.appendChild(li)
  }

}