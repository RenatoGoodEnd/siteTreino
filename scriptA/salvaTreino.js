function salvarTreino(valor, indice, arr){
    valor.addEventListener('focusout', () => {
        //console.log(lista.value)
		const elementoTreino = valor.value;
        const novaLista = listagem.innerHTML;
        const existe = listaDeExercicio.find(elemento => elemento.id === indice + novaLista)
        // const nome = ;
        // console.log(arr)
         
        

        if(existe){
            console.log(indice + novaLista)
            console.log(existe)
            listaDeExercicio[indice].treino = elementoTreino
        }else{
            // const elementoPeso = listaDeExercicio[0].peso;
            // const elementoLista = listaDeExercicio[0].lista;
            const novoItem = 
                    {
                        "lista": listagem.innerHTML,
                        "id": indice + novaLista,
                        "treino": elementoTreino,
                        "peso": ""
                    }
            listaDeExercicio.push(novoItem);
        }
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
    });
}





// se existe elemento na lista listaDeExercicio.id === valor.id

// se sim atualiza o item com o que consta no valor recebido

// se não cria um novo item completo