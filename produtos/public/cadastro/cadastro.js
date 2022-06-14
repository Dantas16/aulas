function validaForm() {
  const inputs = document.getElementsByTagName('input');

  if (inputs.email.value == '') {
    return document.getElementById('alerta').innerHTML = 'Informe um e-mail';
  }

  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
  if (regexEmail.test(inputs.email.value) == false) {
    return document.getElementById('alerta').innerHTML = 'E-mail inválido!';
  }

  document.getElementById('alerta').innerHTML = '';
  console.warn('Formulário validado');
}

document.addEventListener('DOMContentLoaded', function(){
  console.log('página carregada')
})