function salvarTreino(valor, indice){
    valor.addEventListener('focusout', () => {
        //console.log(lista.value)
        const elementoPeso = peso[indice].value;
		const elementoTreino = exercicio[indice].value;
        const existe = listaDeExercicio.find(elemento => elemento.id === indice + letraDaLista);
 
        if(existe){
            //console.log(indice + letraDaLista);
            //console.log(existe);
            existe.treino = elementoTreino;
            existe.peso = elementoPeso;
        }else{
            // const elementoPeso = listaDeExercicio[0].peso;
            // const elementoLista = listaDeExercicio[0].lista;
            const novoItem = 
                    {
                        "lista": letraDaLista,
                        "id": indice + letraDaLista,
                        "treino": elementoTreino,
                        "peso": elementoPeso
                    }
            listaDeExercicio.push(novoItem);
        }
        localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
    });
}



// se existe elemento na lista listaDeExercicio.id === valor.id

// se sim atualiza o item com o que consta no valor recebido

// se não cria um novo item completo