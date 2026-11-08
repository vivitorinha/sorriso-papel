// SETINHAS DO PRODUTO
let produtos = ["papel.jpg", "papel.jpg", "papel.jpg"];
let atual = 0;
function trocarProduto(direcao) {
atual = atual + direcao;
if (atual < 0) atual = produtos.length - 1;
if (atual >= produtos.length) atual = 0;
document.getElementById("foto-produto").src = produtos[atual];
}
// ABAS DESCRIÇÃO / DETALHES
function mostrarAba(id, botao) {
document.getElementById("descricao").classList.add("escondido");
document.getElementById("detalhes").classList.add("escondido");
document.getElementById(id).classList.remove("escondido");
document.querySelectorAll(".aba").forEach(b => b.classList.remove("ativa"));
botao.classList.add("ativa");
}
// BOTÕES DAS AVALIAÇÕES
function curtir(botao) {
botao.innerText = "Útil (1) 💛";
botao.style.background = "#FAD564";
botao.style.color = "#1E404F";
}
function responder() {
alert("Abre a caixinha pra responder a avaliação!");
}
// BOTÃO DIAS PROMOCIONAIS
function avisarPromo() {
alert("Anotado! Manda um e-mail para sorrisopapel@gmail.com com seu nome e WhatsApp que a gente te avisa quando for a semana da promoção: UMA quarta e UMA sexta por mês!");
}
