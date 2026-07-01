// Banco de dados de perguntas do Quiz (Subcategoria A e D)
const perguntas = [ 
    {
        texto: "As Deepfakes são sempre fáceis de identificar visualmente?",
        opcoes: [
            { texto: "Sim, são óbvias", correta: false },
            { texto: "Não, podem ser muito reais", correta: true }
        ],
        dica: "Dica: Olhe sempre para os olhos e o movimento da boca em vídeos suspeitos!"
    },
    {  
        texto: "Se você receber um áudio de um familiar pedindo dinheiro urgente com voz idêntica, o que deve fazer?",
        opcoes: [
            { texto: "Fazer o PIX imediatamente para ajudar", correta: false },
            { texto: "Desconfiar e ligar por outro meio para confirmar", correta: true }
        ],
        dica: "Dica: Clonagem de voz por IA é usada em golpes. Sempre confirme a identidade por canais oficiais."
    },
    {
        texto: "Qual dessas opções é uma atitude de um bom cidadão digital contra desinformação?",
        opcoes: [
            { texto: "Verificar em várias fontes antes de compartilhar", correta: true },
            { texto: "Repassar rapidamente em grupos de mensagens", correta: false }
        ],
        dica: "Dica: O pensamento crítico é o seu maior escudo na internet."
    },
    {
        texto: "Imagens geradas por Inteligência Artificial sempre retratam fatos reais?",
        opcoes: [
            { texto: "Não, elas podem inventar cenários do zero", correta: true },
            { texto: "Sim, a IA só trabalha com fotos reais", correta: false }
        ],
        dica: "Dica: Geradores de imagem criam fotos ultra-realistas de eventos que nunca aconteceram."
    }
];

let pontos = 0;
let perguntaAtual = 0;

// Função que renderiza e atualiza o estado do Quiz no DOM
function carregarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        document.getElementById("pergunta-texto").textContent = "🏆 Quiz Concluído!";
        document.getElementById("botoes-container").innerHTML = "<p>Parabéns por completar o teste de cidadania digital!</p>";
        document.getElementById("btn-dica").style.display = "none";
        document.getElementById("dica").textContent = "";
        return;
    }

    const dados = perguntas[perguntaAtual];
    
    document.getElementById("pergunta-texto").textContent = `${perguntaAtual + 1}. ${dados.texto}`;
    document.getElementById("resultado").textContent = "";
    document.getElementById("dica").textContent = "";

    const btn1 = document.getElementById("btn-opcao1");
    const btn2 = document.getElementById("btn-opcao2");

    btn1.textContent = dados.opcoes[0].texto;
    btn2.textContent = dados.opcoes[1].texto;

    btn1.onclick = null;
    btn2.onclick = null;

    btn1.onclick = () => verificarResposta(dados.opcoes[0].correta);
    btn2.onclick = () => verificarResposta(dados.opcoes[1].correta);

    document.getElementById("btn-dica").onclick = () => {
        document.getElementById("dica").textContent = dados.dica;
    };
}

// Validador de respostas do Quiz
function verificarResposta(correta) {
    const resultado = document.getElementById("resultado");

    if (correta) {
        pontos++;
        resultado.textContent = "✅ Resposta correta!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "❌ Resposta incorreta!";
        resultado.style.color = "red";
    }

    document.getElementById("placar").textContent = "Pontos: " + pontos;

    perguntaAtual++;
    setTimeout(carregarPergunta, 1500);
}

// Inicialização do Quiz
carregarPergunta();

// Controle do Botão de Acessibilidade (Modo Escuro)
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

// Interação com o Formulário de Ajuda
const ajudaForm = document.getElementById("ajudaForm");
ajudaForm.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("respostaAjuda").textContent = "🔍 Análise solicitada! Lembre-se: antes de compartilhar, pesquise o texto em sites de checagem de fatos.";
});
