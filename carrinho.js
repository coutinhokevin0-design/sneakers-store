const produto = JSON.parse(localStorage.getItem("produtoCarrinho"));

const container = document.getElementById("carrinho");

if(produto){

container.innerHTML = `
<h2>${produto.nome}</h2>
<p>Preço: ${produto.preco}</p>
<p>Tamanho: ${produto.tamanho}</p>
<button>Finalizar compra</button>
`;

}else{

container.innerHTML = `
<h2>Seu carrinho está vazio!</h2>
<p>Escolha alguns produtos para continuar comprando.</p>
`;

}