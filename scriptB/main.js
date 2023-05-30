const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = JSON.parse(localStorage.getItem("exerciciosB")) || {
        "treinoB": [
        {
        }
    ]}

for (var i = 0; i < listaDeExercicio.treinoB.length; i++){
	const item = listaDeExercicio.treinoB[i].treino;
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
        listaDeExercicio.treinoB.splice(indice, 1, novoItem);
        localStorage.setItem("exerciciosB", JSON.stringify(listaDeExercicio))
    });
}
