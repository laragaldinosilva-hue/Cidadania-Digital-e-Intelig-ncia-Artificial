// Banco de dados do Quiz (Sua pergunta original + 3 novas)
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

// Função para renderizar a pergunta na tela
function carregarPergunta() {
    // Se as perguntas acabarem, mostra o resultado final
    if (perguntaAtual >= perguntas.length) {
        document.getElementById("pergunta-texto").textContent = "🏆 Quiz Concluído!";
        document.getElementById("botoes-container").innerHTML = "<p>Parabéns por completar o teste de cidadania digital!</p>";
        document.getElementById("btn-dica").style.display = "none";
        document.getElementById("dica").textContent = "";
        return;
    }

    const dados = perguntas[perguntaAtual];
    
    // Atualiza o texto da pergunta e limpa a dica/resultado anterior
    document.getElementById("pergunta-texto").textContent = `${perguntaAtual + 1}. ${dados.texto}`;
    document.getElementById("resultado").textContent = "";
    document.getElementById("dica").textContent = "";

    // Configura os botões com as novas opções
    const btn1 = document.getElementById("btn-opcao1");
    const btn2 = document.getElementById("btn-opcao2");

    btn1.textContent = dados.opcoes[0].texto;
    btn2.textContent = dados.opcoes[1].texto;

    // Remove eventos antigos para não duplicar cliques
    btn1.onclick = null;
    btn2.onclick = null;

    // Atribui a função de checar a resposta
    btn1.onclick = () => verificarResposta(dados.opcoes[0].correta);
    btn2.onclick = () => verificarResposta(dados.opcoes[1].correta);

    // Configura o botão de dica correspondente à pergunta
    document.getElementById("btn-dica").onclick = () => {
        document.getElementById("dica").textContent = dados.dica;
    };
}

// Função executada ao clicar em uma opção
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

    // Atualiza o placar na tela
    document.getElementById("placar").textContent = "Pontos: " + pontos;

    // Bloqueia cliques rápidos para dar tempo de ler o resultado antes de passar
    perguntaAtual++;
    setTimeout(carregarPergunta, 1500); // Avança após 1.5 segundos
}

// Inicializa o quiz assim que a página carrega
carregarPergunta();


/* ===================================================
   MANTENHA O RESTANTE DO SEU CÓDIGO (MODO ESCURO E FORMULÁRIO) ABAIXO:
   =================================================== */

// Modo escuro
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

// Formulário
const formulario = document.getElementById("pesquisaForm");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("mensagem").textContent = "Obrigado pela participação, " + nome + "!";
});
