

const btnSoma = document.getElementById("+");
const btnSubtracao = document.getElementById("-");
const btnMultiplicacao = document.getElementById("*");
const btnDivisao = document.getElementById("/");
const btnResultado = document.getElementById("=");
const btndel = document.getElementById("del")

const allBtns = [...document.querySelectorAll(".btn")];
const allBtnsNumbers = [...document.querySelectorAll(".numeros")];
const allBtnsOperations = [...document.querySelectorAll(".operadores")];



let tela = document.querySelector(".apresentacao p");
let arrayDados = []
let conta;



allBtnsNumbers.map((el)=>{
    el.addEventListener("click",(evt)=>{
        adicionarNaTela(el.value);
    })
})

allBtnsOperations.map((el)=>{
    el.addEventListener("click",(evt)=>{
        adicionarNaTela(el.value);
    })
})

btndel.addEventListener("click",(evt)=>{
    limparTela()
    
})

btnResultado.addEventListener("click",(evt)=>{
    resultadoConta(tela.innerHTML);
    
})


function adicionarNaTela(val){
    
    arrayDados.push(val);
    tela.innerHTML = arrayForString(arrayDados);
    return arrayDados;

}

function limparTela(){
    tela.innerHTML = ''
    arrayDados.length = 0
}

function arrayForString (array){
    let modificador = array.toString();
    modificador = modificador.replace(/,/g,"");
    return modificador;
}

function resultadoConta(valor){
    valor.toString()
    valor = valor.replace(/[x]/g,"*");
    tela.innerHTML =  math.evaluate(valor); 

    if( math.evaluate(valor)==13){
        playAudio()
    }
    arrayDados.length = 0; 
    arrayDados.push(math.evaluate(valor));
    
}


function playAudio(){
    let audio = document.getElementById("audioLula");
    audio.play();
}
