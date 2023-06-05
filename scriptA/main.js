//iniciando versão 2.0
const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || {
        "treinoA": [
        {
        }
    ]}

for (var i = 0; i < listaDeExercicio.treinoA.length; i++){
	const item = listaDeExercicio.treinoA[i].treino;
	if(item){
		exercicio[i].value = item;
	}else{
		exercicio[i].value = "";
	}
}

exercicio.forEach(salvarTreino)

function salvarTreino(valor, indice, arr){
    arr[indice].addEventListener('focusout', (e) => {
		const elementoTreino = arr[indice].value;
        const novoItem = 
                {
                    "id": indice,
                    "treino": elementoTreino,
                }
        listaDeExercicio.treinoA.splice(indice, 1, novoItem);
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio))
    });
}
