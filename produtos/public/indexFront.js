function helloWorld() {
    console.log("hello wolrd")
        fetch ('http://localhost:3500/produtos')
        .then(resp => resp.json())
        .then( resposta =>{
            try{
                var produtos = resposta
                console.log(produtos)
            } catch(maria){
                console.error(maria.message)
            }
        } )
        .catch(error => console.log(error))
        console.log("fim")
    }
    
    document.addEventListener('DOMContentLoaded',function() {
        console.log("Pagina carregada corretamente");
        helloWorld()
    })
    