const quizDados=[
    {
        pergunta:"Qual das alternativas abaixo não se trata de um periférico de saída:",
        a:"Impressora",
        b:"Monitor",
        c:"Projetor",
        d:"Teclado",
        certa:"d"
    },
    {
        pergunta:"Qual a linguagem mais usada em 2021",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        certa:"a"
    },
    {
        pergunta:"Quem inventou o Linux?",
        a:"Donald Trump",
        b:"Bill Gates",
        c:"Hugo Resende",
        d:"Linus Torvalds",
        certa:"d"
    },
    {
        pergunta:"Quais são as teclas de atalho para criar uma nova pasta no computador?",
        a:"Ctrl+N",
        b:"Ctrl+T",
        c:"Ctrl+Shift+N",
        d:"Ctrl+Shift+M",
        certa:"c"
    },
    {
        pergunta:"O que significa RAM?",
        a:"Read Only Memory",
        b:"Read Access Memory",
        c:"Random Air Mate",
        d:"Rolling Ants Mob",
        certa:"b"
    },
    {
        pergunta:"O que é o Windows da Microsoft?",
        a:"É um navegador de internet",
        b:"Não serve para ser instalado",
        c:"É um sistema operacional",
        d:"Componenete do pacote office",
        certa:"c"
    }
    
]

const main = document.getElementById('main')
const res = document.querySelectorAll('.res')
const perg = document.getElementById('pergunta')
const resA = document.getElementById('a_texto')
const resB = document.getElementById('b_texto')
const resC = document.getElementById('c_texto')
const resD = document.getElementById('d_texto')
const envia = document.getElementById('sub')

let pergAtual = 0
let score = 0

loadQuizz();

function loadQuizz() {
    limpaEscolha()
    const dados = quizDados[pergAtual]

    perg.innerText = dados.pergunta
    resA.innerText = dados.a
    resB.innerText = dados.b
    resC.innerText = dados.c
    resD.innerText = dados.d
}

function limpaEscolha() {
    res.forEach ((e)=> {
        e.checked = false
    })
}

function getEscolha() {
    let resposta 
    res.forEach((res) => {
        if (res.checked) {
            resposta = res.id
            
        }
    })
    console.log(resposta)
    return resposta
}



envia.addEventListener('click', () => {
    const x = getEscolha();
    
    if (x) {
        if ( x === quizDados[pergAtual].certa){
            score++
        }
        pergAtual++
        if (pergAtual < quizDados.length) {
            loadQuizz();
        } else {
            main.innerHTML = `
                <h2 style="text-align:center;">Respondeu corretamente a ${score}/${quizDados.length} perguntas.</h2>
                <button onclick="location.reload()">Carregar</button>
            `
      }
    }
})