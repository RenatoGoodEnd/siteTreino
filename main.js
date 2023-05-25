const exercicio = document.getElementById('teste');
const listaDeExercicio = JSON.parse(localStorage.getItem("listaDeExercicio")) || []
console.log(exercicio.innerHTML)
exercicio.innerHTML = listaDeExercicio.exercicio;
teste(exercicio)

function teste(exercicio){
exercicio.addEventListener('focusout', () => {
    console.log(listaDeExercicio);
    const elemento = exercicio.innerHTML;
    const novoItem ={
        "exercicio": elemento
    }
    localStorage.setItem("listaDeExercicio", JSON.stringify(novoItem))
    
    console.log(exercicio)});
}
