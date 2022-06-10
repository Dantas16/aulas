function helloWorld() {
	console.log("hello wolrd")
	fetch('http://localhost:3500/produtos')
		.then(resp => resp.json())
		.then(resposta => {
			try {
				var produtos = resposta
				if (produtos.length == 0) {
					console.log('vazio');
				}
				console.log(produtos)
			} catch (error) {
				console.error('Erro caiu aqui: ', error.message)
			}
		})
		.catch(error => {
			var divAlerta = document.getElementById('alerta');
			divAlerta.innerHTML = 'Infelizmente não estamos num bom dia, tente mais tarde :)';
		})
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
