const identificadorDeLista = document.querySelector("#treino");
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [{
	"lista": letraDaLista,
	"id": "0A",
	"treino": "",
	"peso": ""
}];
const elementoDoTreino = document.getElementById("tabela__elemento");
const listaFiltrada = novaLista(letraDaLista);

construirPagina(listaFiltrada)

const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('.tabela__peso');

exercicio.forEach(salvarTreino)
peso.forEach(salvarTreino)

function novaLista(testador){
	return listaDeExercicio.filter(elemento => {return elemento.lista === testador});
}
