const exercicio = document.querySelectorAll('.tabela__exercicio');
const peso = document.querySelectorAll('.tabela__peso');
const identificadorDeLista = document.querySelector("#treino")
const letraDaLista = identificadorDeLista.innerHTML;
const listaDeExercicio = JSON.parse(localStorage.getItem("exercicios")) || [{
	"lista": letraDaLista,
	"id": "0A",
	"treino": "",
	"peso": ""
}];
const listaFiltrada = novaLista(letraDaLista);
const elementoDoTreino = document.getElementById("tabela__elemento");


console.log(listaFiltrada);
function novaLista(testador){
	return listaDeExercicio.filter(elemento => {return elemento.lista === testador});
}
/*construirPagina(listaFiltrada)

function construirPagina(listaDeTreino){
    listaDeTreino.forEach(element => {
        elementoDoTreino.innerHTML += `
        <tr>
        <td class="tabela__elemento">
            <textarea name="Exercício" onkeypress="digitar(event)" tabIndex="${element.id}" class="tabela__exercicio" cols="17" rows="2">
            ${element.treino}
            </textarea>
        </td>
        <td class="tabela__elemento">
            <input type="number" name="Peso" class="tabela__peso" cols="2" rows="1" value="${element.peso}">
        </td>
        <td class="tabela__elemento">
            <input type="checkbox">
        </td>
    </tr>
        `
        
    });

}*/

// if(listaDeExercicio){
// 	for (var i = 0; i < listaDeExercicio.treinoA.length; i++){
// 		const item = listaDeExercicio.treinoA[i].treino;
// 		if(item){
// 			exercicio[i].value = item;
// 			peso
// 		}else{
// 			exercicio[i].value = "";
// 		}
// 	}
// }

exercicio.forEach(salvarTreino)
peso.forEach(salvarTreino)
