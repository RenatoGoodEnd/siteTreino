const exercicio = document.querySelector('#teste')
const listaDeExercicio = JSON.parse(localStorage.getItem("lista")) || []
exercicio.value = listaDeExercicio.exercicio
	
exercicio.addEventListener('focusout', () => {
    const elemento = exercicio.value;
    
	const novoItem = {
        "exercicio": elemento,
        //"peso": peso
    }
	
    localStorage.setItem("lista", JSON.stringify(novoItem))
    
    });


