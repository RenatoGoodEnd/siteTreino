const peso = document.querySelectorAll('.tabela__peso')
const listaDePeso = JSON.parse(localStorage.getItem("pesos")) || {
        "treinoC": [
        {
        }
    ]}
//console.log(exercicio);
//console.log(exercicio[1].innerHTML);
for (var i = 0; i < listaDePeso.treinoC.length; i++){
	const item = listaDePeso.treinoC[i].peso;
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
        listaDePeso.treinoC.splice(indice, 1, novoItem);
        localStorage.setItem("pesos", JSON.stringify(listaDePeso))
    });
}