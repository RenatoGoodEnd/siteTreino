const exercicio = document.querySelectorAll('.tabela__exercicio')
const listaDeExercicio = JSON.parse(localStorage.getItem("lista")) || []
console.log(exercicio[2])
exercicio.forEach(teste)
//exercicio.value = listaDeExercicio.exercicio

function teste(valor, indice, arr){
    exercicio[indice].value = listaDeExercicio.treinoA.exercicio
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
        
        localStorage.setItem("lista", JSON.stringify(novoItem))
        
        });
}

