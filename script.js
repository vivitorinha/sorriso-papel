// ===== BOTÕES - FUNCIONAMENTO =====

// 1. SETINHAS DO PRODUTO
let produtos = ["produto1.jpg", "produto2.jpg", "produto3.jpg"];
let atual = 0;

function trocarProduto(direcao) {
  atual = atual + direcao;
  if (atual < 0) atual = produtos.length - 1;
  if (atual >= produtos.length) atual = 0;
  document.getElementById("foto-produto").src = produtos[atual];
}

// 2. ABAS DESCRIÇÃO / DETALHES
function mostrarAba(id, botao) {
  document.getElementById("descricao").classList.add("escondido");
  document.getElementById("detalhes").classList.add("escondido");
  document.getElementById(id).classList.remove("escondido");

  document.querySelectorAll(".aba").forEach(b => b.classList.remove("ativa"));
  botao.classList.add("ativa");
}

// 3. BOTÕES DAS AVALIAÇÕES
function curtir(botao) {
  botao.innerText = "Útil (1) 💛";
  botao.style.background = "#FEDF00";
  botao.style.color = "#006437";
}

function responder() {
  alert("Abre a caixinha pra responder a avaliação!");
}
