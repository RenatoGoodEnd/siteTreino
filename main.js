const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || {
        "treinoA": [
        {
        }
    ]}

for (var i = 0; i < listaDeExercicio.treinoA.length; i++){
	exercicio[i].value = listaDeExercicio.treinoA[i].treino;
	console.log(exercicio[i]);
}

exercicio.forEach(salvarECarregarTreino)

function salvarECarregarTreino(valor, indice, arr){
    arr[indice].addEventListener('focusout', (e) => {
		const elemento = arr[indice].value;
        const novoItem = 
                {
                    "id": indice,
                    "treino": elemento,
                    "peso": "" 
                }
        listaDeExercicio.treinoA.splice(indice, 1, novoItem);
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio))
    });
}


