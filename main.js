const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = []


console.log(exercicio[2])
exercicio.forEach(teste)
//exercicio.value = listaDeExercicio.exercicio

function teste(valor, indice){
    //listaDeExercicio = JSON.parse(localStorage.getItem("lista")) || []
    //exercicio[indice].value = listaDeExercicio.treinoA.exercicio
    exercicio[indice].addEventListener('focusout', () => {
        console.log(exercicio[indice].value)
  

        const elemento = exercicio[indice].value;
        
        const novoItem = {
            "treinoA": [
                {
                    "id": indice,
                    "exercicio": elemento,
                    "peso": "" 
                }
            ]
            //"exercicio": elemento,
            //"peso": peso
        }
        if(!listaDeExercicio.id){
        listaDeExercicio.push(novoItem);
        localStorage.setItem("lista", JSON.stringify(listaDeExercicio))}
        
        });
}

