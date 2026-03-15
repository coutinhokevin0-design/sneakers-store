const produto = JSON.parse(localStorage.getItem("produtoCarrinho"));
const container = document.getElementById("carrinho");

if (produto) {
    container.innerHTML = `
        <div class="produto-card">
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <div class="produto-info">
                <h3 class="produto-nome">${produto.nome}</h3>
                <p class="produto-preco">R$ ${produto.preco},00</p>
                <p class="produto-tamanho">Tamanho: ${produto.tamanho}</p>
            </div>
        </div>
        <div class="botoes-carrinho">
            <button class="btn-finalizar">Finalizar compra</button>
            <a href="index.html" class="btn-explorar">Explorar produtos</a>
        </div>
    `;
} else {
    container.innerHTML = `
        <div class="carrinho-vazio">
            <h2>Seu carrinho está vazio!</h2>
            <p>Escolha alguns produtos para continuar comprando.</p>
            <a href="index.html" class="btn-explorar">Explorar produtos</a>
        </div>
    `;
}