const peso = document.querySelectorAll('.tabela__peso')
const listaDePeso = JSON.parse(localStorage.getItem("pesos")) || {
        "treinoB": [
        {
        }
    ]}
//console.log(exercicio);
//console.log(exercicio[1].innerHTML);
for (var i = 0; i < listaDePeso.treinoB.length; i++){
	const item = listaDePeso.treinoB[i].peso;
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
        listaDePeso.treinoB.splice(indice, 1, novoItem);
        localStorage.setItem("pesos", JSON.stringify(listaDePeso))
    });
}