const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', filtrarLivros);
});

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibiidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivros(livrosFiltrados);
        exibirValorTotalLivrosNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibiidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosNaTela(valorTotal)  {
    elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
}