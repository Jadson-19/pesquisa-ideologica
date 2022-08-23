// RETORNO DO TEXTO HTML 

let inputDireita = document.getElementsByClassName("direita");
let inputEsquerda = document.getElementsByClassName("esquerda");

let resultado = document.getElementById("resultados");

function calcular() {

    let direita = inputDireita.class;
    let esquerda = inputEsquerda.class;

    resultado.innerHTML = direita;
    resultado.innerHTML = esquerda;

   let radiosDireita = document.getElementsByClassName("direita");
   let radiosEsquerda = document.getElementsByClassName("esquerda");


    let resultDireita = 0;
    let resultEsquerda = 0;

        for (i =0; i < radiosDireita.length; i++){

            if (radiosDireita[i].checked){
                resultDireita++;
                
            }
        }

        for (i =0; i < radiosEsquerda.length; i++){

            if (radiosEsquerda[i].checked){
                resultEsquerda++;
            }
        }


              
        if (resultDireita > resultEsquerda){
            resultado.innerHTML = "De acordo com as suas respostas fornecidas ao questionário, seu perfil político é de Direita Conservadora.";
            
        } 

        else if(resultDireita < resultEsquerda){
            resultado.innerHTML = "De acordo com as suas respostas fornecidas ao questionário, seu perfil político é de Esquerda.";
        }

        else if(resultDireita == resultEsquerda || resultDireita && resultEsquerda == 0){
            resultado.innerHTML = "De acordo com as suas respostas fornecidas ao questionário, seu perfil político é de Centro.";
       
        }


        if (resultDireita >= 8){
            resultado.innerHTML = "De acordo com as suas respostas fornecidas ao questionário, seu perfil político é de Extrema Direita.";
            console.log("chegou na de Direita")
        }

        else if(resultEsquerda >= 8){
            resultado.innerHTML = "De acordo com as suas respostas fornecidas ao questionário, seu perfil político é de Extrema Esquerda.";
            console.log("chegou na de Esquerda")
        }




        console.log("Calculando...");

}
