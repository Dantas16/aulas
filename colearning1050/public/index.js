/*let formulario = {
  titulo: false,
  descricao: false
}

function alerta(exibe, msg){
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

    btnSalvar()

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
      formulario.titulo = false;
    } else {
      spanAlerta.style.display = 'none';
      formulario.titulo = true;
    }
  });
}

function inputDescForm () {
  var descricaoForm = document.getElementById('descricao')

  descricaoForm.addEventListener('keyup', function() {
    var valorDigitado = descricaoForm.value.trim()
    var spanMensagem = descricaoForm.nextElementSibling
    alerta(false)

    if (valorDigitado === '') {
      console.log('Campo vazio')
      alerta(true, 'Digite a descrição da tarefa')
    } else if (valorDigitado.length < 10) {
      console.log('Menos de 10 caracteres')
      spanMensagem.style.display = 'inline-flex'
    }
     else {
      console.log('Maior ou igual a 10 caracteres')
      spanMensagem.style.display = 'none'
    }
  })
}

function btnSalvar() {
  var btnSalvar = document.getElementById('btn-salvar');

  if (formulario.titulo || formulario.descricao) {
    btnSalvar.removeAttribute('disabled')
  } else {
    btnSalvar.setAttribute('disabled', true)
  }
} */

function salvar(formulario) {
  console.log(formulario)
}

document.addEventListener('DOMContentLoaded', function() {
  inputTituloForm();
  inputDescForm()
  salvar(formulario)

});
            