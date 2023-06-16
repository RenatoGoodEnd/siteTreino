const botaoAdd = document.getElementById("addTreino");

const identificadorDeLista = document.querySelector("#treino");
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [];

const listaFiltrada = novaLista(letraDaLista);
const elementoDoTreino = document.getElementById("tabela__elemento");
construirPagina(listaFiltrada);

const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('.tabela__peso');
const excluir = document.querySelectorAll('.btn__exTreino');

exercicio.forEach(salvarTreino)
peso.forEach(salvarTreino)
excluir.forEach(excluirTreino)
	
botaoAdd.addEventListener('click', () => {
	const novoItem2 = 
	{
		"lista": letraDaLista,
		"id": listaFiltrada.length,
		"treino": "",
		"peso": ""
	}		
	listaDeExercicio.push(novoItem2);
	localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
	location.reload();
	});

function novaLista(testador){
	return listaDeExercicio.filter(elemento => {return elemento.lista === testador});
}

function excluirTreino(treinoExcluido){
	treinoExcluido.addEventListener('click', () => {
	console.log(treinoExcluido.offsetParent.parentElement);
	
	});
	
}