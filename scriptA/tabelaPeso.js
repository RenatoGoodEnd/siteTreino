const peso = document.querySelectorAll('.tabela__peso')
const listaDePeso = JSON.parse(localStorage.getItem("pesos")) || {
        "treinoA": [
        {
        }
    ]}
//console.log(exercicio);
//console.log(exercicio[1].innerHTML);
for (var i = 0; i < listaDePeso.treinoA.length; i++){
	const item = listaDePeso.treinoA[i].peso;
	if(item){
		peso[i].value = item;
	//console.log(exercicio[i]);
	}else{
		peso[i].value = "";
	}
}
peso.forEach(salvarPeso)

function salvarPeso(valor, indice, arr){
    valor.addEventListener('focusout', (e) => {
		const elementoPeso = valor.value;
        const novoItem = 
                {
                    "id": indice,
                    "peso": elementoPeso 
                }
        listaDePeso.treinoA.splice(indice, 1, novoItem);
        localStorage.setItem("pesos", JSON.stringify(listaDePeso))
    });
}