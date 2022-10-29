"use strict";

async function consultaCep(e) {
  e.preventDefault();
  var input = document.getElementById("input-cep");

  if (input.value == "") {
    return window.alert("Informe um CEP!");
  }

  if (input.value.length != 8) {
    return window.alert("Informe um CEP válido!");
  }

  try {
    var response = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
    var endereco = await response.json();

    var tr = document.createElement('tr');
    for (var attr in endereco) {
      if (['gia', 'ibge', 'siafi'].includes(attr)) continue;
      var td = document.createElement('td');
      td.innerHTML = endereco[attr];
      tr.appendChild(td);
    }
    var tbEndereco = document.getElementById('tb-endereco');
    tbEndereco.appendChild(tr);

  } catch (error) {
    console.error(error);
    window.alert("Erro ao buscar o endereço!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  //Obtém o button de consultar
  var btn = document.querySelector("#btn-consultar");
  btn.addEventListener("click", consultaCep);
  //Evita submit no formulário
  document.getElementsByTagName("form")[0].onsubmit = function (e) {
    e.preventDefault();
  };
});
