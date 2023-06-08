function salvarTreino(valor, indice, arr){
    arr[indice].addEventListener('focusout', () => {
		const elementoTreino = exercicio[indice].value;
        const elementoPeso = peso[indice].value;
        const elementoLista = lista[indice].value;
        const novoItem = 
                {
                    "lista": elementoLista,
                    "id": indice,
                    "treino": elementoTreino,
                    "pese": elementoPeso
                }
        listaDeExercicio.splice(indice, 1, novoItem);
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
    });
}
