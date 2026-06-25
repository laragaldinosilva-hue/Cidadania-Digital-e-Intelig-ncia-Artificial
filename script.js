// Variável de pontuação
let pontos = 0;

// Dicas de deepfake
function mostrarDica(texto){

    const dica =
    document.getElementById("dica");

    dica.textContent = texto;
}

// Quiz
function responder(correta){

    const resultado =
    document.getElementById("resultado");

    if(correta){

        pontos++;

        resultado.textContent =
        "✅ Resposta correta!";

    }else{

        resultado.textContent =
        "❌ Resposta incorreta!";
    }

    document.getElementById("placar")
    .textContent =
    "Pontos: " + pontos;
}

// Modo escuro
const temaBtn =
document.getElementById("temaBtn");

temaBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");
});

// Formulário
const formulario =
document.getElementById("pesquisaForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    document.getElementById("mensagem")
    .textContent =
    "Obrigado pela participação, " + nome + "!";
});
