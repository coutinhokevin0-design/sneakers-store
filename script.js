
// abre o modal de tamanhos quando o usuário clicar em comprar

const modal = document.getElementById("modal-tamanhos");
const botoesComprar = document.querySelectorAll(".comprar");
const fechar = document.querySelector(".fechar");

botoesComprar.forEach(function(botao){

    botao.addEventListener("click", function(){
        modal.style.display = "flex";
    });

});

fechar.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
});

let produtoSelecionado = null;

botoesComprar.forEach(function(botao){

    botao.addEventListener("click", function(){

        const produto = botao.parentElement;
        const nome = produto.querySelector("h3").innerText;
        const preco = produto.querySelector(".preco").innerText;

        produtoSelecionado = {
            nome: nome,
            preco: preco
        };

        modal.style.display = "flex";

    });

});


const tamanhos = document.querySelectorAll(".tamanhos button");

tamanhos.forEach(function(botao){

    botao.addEventListener("click", function(){

        // remove seleção anterior
        tamanhos.forEach(function(b){
            b.classList.remove("ativo");
        });

        // adiciona seleção no botão clicado
        botao.classList.add("ativo");

        const tamanhoEscolhido = botao.innerText;

        produtoSelecionado.tamanho = tamanhoEscolhido;

        localStorage.setItem("produtoCarrinho", JSON.stringify(produtoSelecionado));

        window.location.href = "carrinho.html";

    });

});