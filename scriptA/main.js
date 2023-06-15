const botaoAdd = document.getElementById("addTreino");
const identificadorDeLista = document.querySelector("#treino");
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [{
		"lista": letraDaLista,
		"id": 0,
		"treino": "",
		"peso": ""
	}];

const listaFiltrada = novaLista(letraDaLista);
const elementoDoTreino = document.getElementById("tabela__elemento");
construirPagina(listaFiltrada)

const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('.tabela__peso');

exercicio.forEach(salvarTreino)
peso.forEach(salvarTreino)

botaoAdd.addEventListener('click', () => {
	const novoItem2 = 
	{
		"lista": letraDaLista,
		"id": listaFiltrada.length,
		"treino": "",
		"peso": ""
	}
	elementoDoTreino.innerHTML += `
        <tr>
        <td class="tabela__elemento">
            <textarea name="Exercício" onkeypress="digitar(event)" tabIndex="${novoItem2.id}" class="tabela__exercicio" cols="15" rows="2">
            ${novoItem2.treino}
            </textarea>
        </td>
        <td class="tabela__elemento">
            <input type="number" name="Peso" class="tabela__peso" cols="2" rows="1" value="${novoItem2.peso}">
        </td>
        <td class="tabela__check">
            <input type="checkbox">
        </td>
        <td class="tabela__btn container__btn--exTreino">
            <input type="button" class="btn btn__exTreino" value="🗑️">
        </td>
    </tr>
        `
			
	listaDeExercicio.push(novoItem2);
	listaFiltrada.push(novoItem2);
	localStorage.setItem("exercicios", JSON.stringify(listaDeExercicio));
	});

function novaLista(testador){
	return listaDeExercicio.filter(elemento => {return elemento.lista === testador});
}