const botaoAdd = document.getElementById("addTreino");

const identificadorDeLista = document.querySelector("#treino");
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [];

const listaFiltrada = novaLista(letraDaLista);
console.log(listaFiltrada)
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
	const listaDoTestador = listaDeExercicio.filter(elemento => {return elemento.lista === testador});
	const listaSemTestador = listaDeExercicio.filter(elemento => {return elemento.lista != testador});
	console.log(listaSemTestador)
	console.log(listaDoTestador)
	
	return listaDoTestador.map((lista, index) => {
	return {...lista, id: listaDoTestador.id = index}});
}



function excluirTreino(treinoExcluido, index){
	treinoExcluido.addEventListener('click', () => {
	//listaDeExercicio.splice(index, 1);
	const excluir = listaDeExercicio.filter(elemento => 
             (elemento.lista === letraDaLista && elemento.id != index) || elemento.lista != letraDaLista);
	//console.log(excluir);
	localStorage.setItem("exercicios", JSON.stringify(excluir));
	location.reload();
	});	
}