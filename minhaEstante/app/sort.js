let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco;
    })
    exibirLivrosNaTela(livrosOrdenados);
}