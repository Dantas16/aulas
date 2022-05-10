
function alerta(exibe, msg = ''){
  var divAlerta = document.getElementById('alerta-msg');

  if (exibe) {
    divAlerta.innerHTML = msg;
    divAlerta.style.display = 'flex';
  } else {
    divAlerta.style.display = 'none';
  }
}

function inputTituloForm() {
  var inputTitulo = document.getElementById('titulo');
  inputTitulo.addEventListener('keyup', function(){
    if (inputTitulo.value == '') {
      alerta(true, 'Insira um título para a tarefa');
      inputTitulo.style.borderColor = 'red';
    } else {
      inputTitulo.style.borderColor = 'green';
      alerta(false)
    }

    var spanAlerta = inputTitulo.nextElementSibling;
    if (inputTitulo.value.length < 3) {
      spanAlerta.style.display = 'inline-flex';
    } else {
      spanAlerta.style.display = 'none';
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  var textDescricao = document.getElementById('descricao');
  var btnSalvar = document.getElementById('btn-salvar');

  inputTituloForm();

});