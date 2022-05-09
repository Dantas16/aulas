
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});

  var descricao = document.querySelector('.descricao');
  var paragrafos = descricao.getElementsByTagName('p');

  var card = document.querySelector('.card');
  card.addEventListener('mouseenter', function() {
    descricao.style.display = 'block';
    var loading = descricao.getElementsByTagName('img')[0];

    setTimeout(function(){
      paragrafos[0].style.display = 'block';
      loading.style.display = 'none'
    }, 1000)
  })

  card.addEventListener('click', function(){
    paragrafos[1].style.display = 'block';
  })

  card.addEventListener('dblclick', function() {
    var linhaProduto = document.querySelector('.linha-produto');
    var linhaClonada = linhaProduto.cloneNode(true);
    document.body.appendChild(linhaClonada)
  })

  var checkboxtp = document.querySelectorAll('.tpizza');
  checkboxtp.forEach(checkbox => {
    checkbox.addEventListener('click', function(){
      var value = checkbox.getAttribute('value');
      if (value == 'pizzagrande') {
        window.alert('Para toda família!')
      } else if (value == 'remover') {
        var linhaPai = checkbox.closest('div.linha-produto');
        linhaPai.remove();
      }
    })
  })

});