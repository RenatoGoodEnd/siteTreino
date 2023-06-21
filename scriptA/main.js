const botaoAdd = document.getElementById("addTreino");

const identificadorDeLista = document.querySelector("#treino");
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [];

const listaFiltrada = novaLista(letraDaLista);
//console.log(listaFiltrada)
listaFiltrada.forEach(teste)
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
	
	//Limpa lista da lista do exercicio da pagina para reorganizar o id
	const listaSemTestador = listaDeExercicio.filter(elemento => {return elemento.lista != testador});
	localStorage.setItem("exercicios", JSON.stringify(listaSemTestador));
	
	//
	return listaDoTestador.map((lista, index) => {
	return {...lista, id: listaDoTestador.id = index}});
}


function teste(listaH){
	const listaDeExercicio2 = JSON.parse(localStorage.getItem("exercicios"))
	listaDeExercicio2.push(listaH);
	localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio2));
}



function excluirTreino(treinoExcluido, index){
	treinoExcluido.addEventListener('click', () => {
	const excluir = listaDeExercicio.filter(elemento => 
             (elemento.lista === letraDaLista && elemento.id != index) || elemento.lista != letraDaLista);
	console.log(treinoExcluido);
	localStorage.setItem("exercicios", JSON.stringify(excluir));
	location.reload();
	});	
}