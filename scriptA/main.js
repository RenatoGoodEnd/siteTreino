const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('tabela__peso');
const lista = document.querySelectorAll('[data-lista]')
console.log(lista[0].innerHTML)
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [{
	"lista": "",
	"id": "",
	"treino": "",
	"peso": ""
}];


// if(listaDeExercicio){
// 	for (var i = 0; i < listaDeExercicio.treinoA.length; i++){
// 		const item = listaDeExercicio.treinoA[i].treino;
// 		if(item){
// 			exercicio[i].value = item;
// 			peso
// 		}else{
// 			exercicio[i].value = "";
// 		}
// 	}
// }
exercicio.forEach(salvarTreino)
peso.forEach(salvarTreino)