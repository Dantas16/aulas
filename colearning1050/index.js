
function alerta(exibe, msg){
  var divAlerta = document.getElementById('alerta-msg');

  if (exibe) {
    divAlerta.innerHTML = msg;
    divAlerta.style.display = 'flex';
  } else {
    divAlerta.style.display = 'none';
  }
}

var formulario = {
  titulo: false,
  descricao: false
}

function inputTituloForm() {
  var inputTitulo = document.getElementById('titulo');
  inputTitulo.addEventListener('keyup', function(){
    
    btnSalvar()

    if (inputTitulo.value == '') {
      formulario.titulo = false;
      alerta(true, 'Insira um título para a tarefa');
      inputTitulo.style.borderColor = 'red';
    } else {
      inputTitulo.style.borderColor = 'green';
      alerta(false)
    }

    var spanAlerta = inputTitulo.nextElementSibling;
    if (inputTitulo.value.length < 3) {
      formulario.titulo = false;
      spanAlerta.style.display = 'inline-flex';
    } else {
      formulario.titulo = true
      spanAlerta.style.display = 'none';
    }
  });
}

function inputDescForm() {
  var descricaoForm = document.getElementById('descricao');

  descricaoForm.addEventListener('keyup', function() {
    var valorDigitado = descricaoForm.value.trim();
    var spanMensagem = descricaoForm.nextElementSibling;
    btnSalvar();

    alerta(false)

    if (valorDigitado === "") {
      formulario.descricao = false;
      alerta(true, "Digite a descrição da tarefa")
    } else if (valorDigitado.length < 10) {
      formulario.descricao = false;
      spanMensagem.style.display = 'inline-flex';
    } else {
      formulario.descricao = true;
      spanMensagem.style.display = "none";
    }
  })
}

function btnSalvar() {
  var btnSalvar = document.getElementById('btn-salvar');

  if (!formulario.titulo || !formulario.descricao) {
    btnSalvar.removeAttribute('disabled');
  } else {
    btnSalvar.setAttribute('disabled', true);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var textDescricao = document.getElementById('descricao');

  inputTituloForm();
  inputDescForm();

});