const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || {
        "treinoA": [
        {
        }
    ]}

exercicio.forEach(teste)

function teste(valor, indice){
    valor.value = listaDeExercicio.treinoA[indice].exercicio
    valor.addEventListener('focusout', (e) => {
        const elemento = valor.value
        const novoItem = 
                {
                    "id":indice,
                    "exercicio": elemento,
                    "peso": "" 
                }
    listaDeExercicio.treinoA.splice(indice, 1, novoItem);
    localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio))
    });
}


