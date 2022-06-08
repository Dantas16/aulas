function helloWorld() {
	console.log("hello wolrd")
	fetch('http://localhost:3500/produtos')
		.then(resp => resp.json())
		.then(resposta => {
			try {
				var produtos = resposta
				console.log(produtos)
			} catch (maria) {
				console.error(maria.message)
			}
		})
		.catch(error => console.log(error))
	console.log("fim")
}

function enviarDados(dados) {
	fetch('http://localhost:3500/produtos', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'
		},
		body: JSON.stringify(dados)
	})
		.then(resp => resp.json())
		.then(resp => {
			console.log('resp post: ', resp)
		})
}

document.addEventListener('DOMContentLoaded', function () {
	console.log("Pagina carregada corretamente");
	helloWorld()
})
