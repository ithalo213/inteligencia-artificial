const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "oque você pretende fazer quando terminar o enino médio?",
        alternativas: [
            {
                texto: "eu pretendo trabalhar!",
                afirmacao: "eu pretendo prestar um vestibular e fazer uma faculdade!"
            },
            {
                texto:  "eu pretendo prestar um vestibular e fazer uma faculdade!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "você gostria de estudar em sua cidade natal ou prefere ir para uma cidade diferente?",
        alternativas: [
            {
                texto: "cidade natal.",
                afirmacao: "cidade diferente."
            },
            {
                texto: "cidade diferente",
                afirmacao: "cidade diferente"
            }
        ]
    },
    {
        enunciado: "você está animado para a sua formatura?",
        alternativas: [
            {
                texto: "sim,mal posso esperar para celebrar com meus amigos e familiares!",
                afirmacao: "Não muito,estou focado nos próximos passos e nas responsabilidade qoue virão."
            },
            {
                texto: "Não muito,estou focado nos próximos passos e nas responsabilidade que virão.",
                afirmacao: "Não muito,estou focado nos próximos passos e nas responsabilidade qoue virão."
            }
        ]
    },
    {
        enunciado: "vocẽ acha que a escola te preparou bem para o seu futuro?",
        alternativas: [
            {
                texto: "Sim, sinto que estou bem preprado para oque vem a seguir!",
                afirmacao: "não, acho que faltou preparação em algumas áreas"
            },
            {
                texto: "não, acho que faltou preparação em algumas áreas!",
                afirmacao: "Sim, sinto que estou bem preprado para oque vem a seguir!"
            }
        ]
    },
    {
        enunciado: "comp você se sente em relação ao término do ensino médio ",
        alternativas: [
            {
                texto: "Animado e preparado para a proxima etapa!",
                afirmacao: "Ansioso e um pouco incerto sobre o futuro"
            },
            {
                texto: "Ansioso e um pouco incerto sobre o futuro!",
                afirmacao: " Animado e preparado para a proxima etapa!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
