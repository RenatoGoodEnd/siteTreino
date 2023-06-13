function salvarTreino(valor, indice, arr){
    arr[indice].addEventListener('focusout', () => {
        //console.log(lista.value)
		const elementoTreino = exercicio.value;
        const novoId = valor.id
        const existe = listaDeExercicio.find(elemento => elemento.id === novoId)

        if(existe){
            listaDeExercicio[indice].treino = elementoTreino
        }else{
            // const elementoPeso = listaDeExercicio[0].peso;
            // const elementoLista = listaDeExercicio[0].lista;
            const novoItem = 
                    {
                        "lista": "A",
                        "id": indice,
                        "treino": elementoTreino,
                        "peso": ""
                    }
            listaDeExercicio.splice(indice, 1, novoItem);
        }
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
    });
}





// se existe elemento na lista listaDeExercicio.id === valor.id

// se sim atualiza o item com o que consta no valor recebido

// se não cria um novo item completo