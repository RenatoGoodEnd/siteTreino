function salvarTreino(valor, indice, arr){
    arr[indice].addEventListener('focusout', () => {
        console.log(lista.value)
		const elementoTreino = exercicio[indice].value;
        const elementoPeso = listaDeExercicio[0].peso;
        const elementoLista = listaDeExercicio[0].lista;
        const novoItem = 
                {
                    "lista": elementoLista,
                    "id": indice,
                    "treino": elementoTreino,
                    "peso": elementoPeso
                }
        listaDeExercicio.splice(indice, 1, novoItem);
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
    });
}
