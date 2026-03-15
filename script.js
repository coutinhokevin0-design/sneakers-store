
let produtoSelecionado = null;

function abrirModal(nome, preco, imagem) {
    produtoSelecionado = {
        nome: nome,
        preco: preco,
        imagem: imagem
    };
    document.getElementById("modal-tamanho").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal-tamanho").style.display = "none";
}

function selecionarTamanho(tamanho) {
    if (!produtoSelecionado) return;
    produtoSelecionado.tamanho = tamanho;
    localStorage.setItem("produtoCarrinho", JSON.stringify(produtoSelecionado));
    window.location.href = "carrinho.html";
}

// Fechar modal ao clicar fora
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal-tamanho");
    if (event.target === modal) {
        fecharModal();
    }
});