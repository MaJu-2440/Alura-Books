let livros = [];
const endpointAPI = 'https://maju-2440.github.io/Alura-Books/requisicao.json';
buscarLivrosAPI();

const elementoDaLista = document.getElementById('livros');
const elementoDoTituloDaLista = document.getElementById('categoria__titulo');

async function buscarLivrosAPI() {
    let res = await fetch(endpointAPI);
    livros = await res.json()
    console.table(livros)
    filtrarLivros(livros);
}

function exibirLivrosNaTela(livrosFiltrados) {
    elementoDaLista.innerHTML = '';

    livrosFiltrados.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
        
        elementoDaLista.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <div class="livro__informacoes">
                    <h2 class="livro__titulo">
                        ${livro.titulo}
                    </h2>
                    <p class="livro__descricao">${livro.autor}</p>
                    <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                    <div class="tags">
                        <span class="tag">${livro.categoria}</span>
                    </div>
                </div>
            </div>
        `;
    })
}

function filtrarLivros(livros) {
    const btns = document.querySelectorAll('.menu-lista__item');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            let categoria = btn.dataset.value;
            
            // quando a categoria for selecionada coloca algumas seções com display none
            const categoriaSelecionada = document.querySelectorAll('.categoria-selecionada');
            categoriaSelecionada.forEach(categoria => {
                categoria.style.display = 'none';
            });
            
            elementoDoTituloDaLista.textContent = categoria;
            let livrosFiltrados = filtrarPorCategoria(categoria);
            exibirLivrosNaTela(livrosFiltrados);
        });
    });
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}