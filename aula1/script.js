function converter(moeda) {
    const taxas = {
        real: 0.0038,
        dolar: 0.00075,
        euro: 0.00069
    };

    let valorWon = Number(document.getElementById("valor").value);
    let resultado = valorWon * taxas[moeda];

    let valorFormatado = resultado.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

    let simbolo = moeda === "real" ? "R$" : moeda === "dolar" ? "$" : "€";

    document.getElementById("resultado").innerText = `Valor convertido: ${simbolo}${valorFormatado}`;
}
