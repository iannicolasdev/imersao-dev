let userTeam = [];
let mensagem = "";

function selecionarPersonagem(nome) {
  const idFormatado = nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const botao = document.getElementById(idFormatado);

  if (!botao) {
    console.error(`Botão com id "${idFormatado}" não encontrado.`);
    return;
  }

  const jaSelecionado = userTeam.includes(nome);

  if (jaSelecionado) {
    userTeam = userTeam.filter(p => p !== nome);
    botao.classList.remove("selecionado");
    mensagem = "";
  } else {
    if (userTeam.length >= 3) {
      mensagem = "Você já escolheu 3 personagens!";
      atualizarMensagem();
      return;
    }
    userTeam.push(nome);
    botao.classList.add("selecionado");
    mensagem = "";
  }

  atualizarMensagem();
  console.log("Equipe atual:", userTeam);
}

function confirmarEscolhas() {
  if (userTeam.length !== 3) {
    mensagem = "Você precisa selecionar exatamente 3 personagens!";
  } else {
    mensagem = "Equipe confirmada: " + userTeam.join(", ");
  }
  atualizarMensagem();
}

function atualizarMensagem() {
  document.getElementById("resultado").innerText = mensagem;
}
