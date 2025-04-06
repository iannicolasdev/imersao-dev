let rodada = 1;
let jogoAtivo = true;

function escolher(escolhaJogador) {
  if (!jogoAtivo || rodada > 3) return;

  const pisoQuebrado = Math.floor(Math.random() * 3) + 1;

  let mensagem = "";

  if (pisoQuebrado === escolhaJogador) {
    mensagem = `Você perdeu! O vidro quebrou na rodada ${rodada}. O número era ${pisoQuebrado}.`;
    jogoAtivo = false;
  } else {
    mensagem = `Você passou! O vidro quebrado era ${pisoQuebrado}. Continue para a rodada ${rodada + 1}.`;
    rodada++;
  }

  if (rodada > 3 && jogoAtivo) {
    mensagem = "Parabéns! Você venceu todas as rodadas!";
    jogoAtivo = false;
  }
  document.getElementById("resultado").innerText = mensagem;
}

function reiniciarJogo() {
    rodada = 1;
    jogoAtivo = true;
    document.getElementById("resultado").innerText = "Jogo reiniciado! Faça sua escolha.";
  }  