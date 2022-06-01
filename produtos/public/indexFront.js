
function helloWorld() {
    fetch('http://localhost:3200')
        .then(resposta => console.log(resposta) )
        .catch(error => console.error(error) )
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina carregada completamente');

    helloWorld();
})