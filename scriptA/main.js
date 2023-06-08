const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('tabela__peso');
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [];
const lista = document.querySelectorAll('[data-lista]')

for (var i = 0; i < listaDeExercicio.treinoA.length; i++){
	const item = listaDeExercicio.treinoA[i].treino;
	if(item){
		exercicio[i].value = item;
	}else{
		exercicio[i].value = "";
	}
}

exercicio.forEach(salvarTreino);
peso.forEach(salvarTreino);