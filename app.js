function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');

    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    const conteudo = document.createElement('div');
    conteudo.className = 'cartao__conteudo';

    const titulo = document.createElement('h3');
    titulo.textContent = categoria;

    const frente = document.createElement('div');
    frente.className = 'cartao__conteudo__pergunta';
    frente.innerHTML = `<p>${pergunta}</p>`;

    const verso = document.createElement('div');
    verso.className = 'cartao__conteudo__resposta';
    verso.innerHTML = `<p>${resposta}</p>`;

    conteudo.appendChild(titulo);
    conteudo.appendChild(frente);
    conteudo.appendChild(verso);
    cartao.appendChild(conteudo);
    container.appendChild(cartao);
}
