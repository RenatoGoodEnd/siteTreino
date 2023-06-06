const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = JSON.parse(localStorage.getItem("exerciciosC")) || {
        "treinoC": [
        {
        }
    ]}

for (var i = 0; i < listaDeExercicio.treinoC.length; i++){
	const item = listaDeExercicio.treinoC[i].treino;
	if(item){
		exercicio[i].value = item;
	}else{
		exercicio[i].value = "";
	}
}

function digitar(e){
    if(e.keyCode == 13){
        e.preventDefault();
        exercicio[e.target.tabIndex + 1].focus();
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
        listaDeExercicio.treinoC.splice(indice, 1, novoItem);
        localStorage.setItem("exerciciosC", JSON.stringify(listaDeExercicio))
    });
}
