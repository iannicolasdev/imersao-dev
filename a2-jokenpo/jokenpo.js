function jogar(escolha) {
    let escolhaJogador = escolha;

    const escolhasPossiveis = ["pedra", "papel", "tesoura"];
    let indiceAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = escolhasPossiveis[indiceAleatorio];

    let mensagem = "";

    if (
        (escolhaJogador === "pedra" && escolhaComputador === "papel") ||
        (escolhaJogador === "papel" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "pedra")
    ) {
        mensagem = `Você PERDEU! Você jogou ${escolhaJogador}, e o computador jogou ${escolhaComputador}.`;
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        mensagem = `Você VENCEU! Você jogou ${escolhaJogador}, e o computador jogou ${escolhaComputador}.`;
    } else {
        mensagem = `Empate! Você jogou ${escolhaJogador}, e o computador jogou ${escolhaComputador}.`;
    }

    document.getElementById("resultado").innerText = mensagem;
}