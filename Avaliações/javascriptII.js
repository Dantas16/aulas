/**
 * Crie um array
 */

// var listStatus = ["aberto", "analise", "deferido", "indeferido"];
// var status = "aberto";



function verificaStatusAtendimento(status) {
    switch(status){
        case 'aberto':
            console.log('Atendimento em Aberto');
            break;
        case 'analise':
            console.log('Atendimento em Análise');
            break;
        case 'deferido':
            console.log('');
            break;
        default:
            console.log('');
            break;
    }
}


var alunos = [
    { id: 1, nome: 'Rafael', bim1: 6, bim2: 7, bim3: 8, bim4: 7, media: 0 },
    { id: 2, nome: 'Rafael 1', bim1: 6, bim2: 7, bim3: 8, bim4: 7, media: 0 },
    { id: 3, nome: 'Rafael 2', bim1: 6, bim2: 7, bim3: 8, bim4: 7, media: 0 },
    { id: 4, nome: 'Rafael 3', bim1: 6, bim2: 7, bim3: 8, bim4: 7, media: 0 },
    { id: 5, nome: 'Rafael 4', bim1: 6, bim2: 7, bim3: 8, bim4: 7, media: 0 }
]

for (var i = 0; i < alunos.length; i++) {
    alunos[i].media = (alunos[i].bim1 + alunos[i].bim2 + alunos[i].bim3 + alunos[i].bim4) / 4;

    console.log(`${alunos[i].nome} Media: ${alunos[i].media}`)

    
}
