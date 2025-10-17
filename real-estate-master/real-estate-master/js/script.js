
document.addEventListener('DOMContentLoaded', function() {
    // Mudar o texto do cabeçalho: O cabeçalho com o conteúdo "Largest offer of real estate in the US" deve ter seu texto alterado para "Bem-vindo ao Nosso Site".
    document.getElementById("cabecalho").innerText = "Bem-vindo ao Nosso Site";
    //Mover elemento: Usando css faça com que o elemento de classe "hero-details" fique posicionado do lado direito.
    moverElementoParaDireita();
    //Alterar Imagem: Utilizando JS mude dinamicamente a imagem que está na classe "img-fluid desktop-hero" para outra. Você pode usar imagem da internet ou adicionar um nova na pasta "\assets\images".
    mudarImagem();
    // Esconder elemento: Esconda o elemento de ID "blog".
    EsconderElemento();
    // Mover elemento: Mova de posição o elemento de ID "call-to-action" que está próximo ao rodapé para a posição logo abaxo o elemento de ID "hero".
    moverSectionParaCima();
    // Alterar o estilo de um parágrafo: O parágrafo de conteúdo "The best marketplace to find homes for sale." deve ter seu estilo alterado para ter texto em itálico e cor de fundo amarela.
    AlteraPropriedadesParagrafo();
});
function moverElementoParaDireita() {
    let elementos = document.querySelectorAll(".hero-details");
    elementos.forEach(function(elemento) {
        elemento.style.position = "absolute";
        elemento.style.left = "70%";
        elemento.style.top = "130px";
    });
}
function mudarImagem() {
    const imagem = document.querySelector('.img-fluid.desktop-hero');
    imagem.alt = "Imagem de exemplo";
    imagem.src = 'assets/images/imgnovateste.jpeg';
}
function EsconderElemento(){
    const elemento = document.getElementById("blog");
    elemento.style.display = "none";
}
function moverSectionParaCima() {
    const section1 = document.getElementById('hero');
    const section2 = document.getElementById('call-to-action');
    section1.parentNode.insertBefore(section2, section1.nextSibling);
}
function AlteraPropriedadesParagrafo(){
    const elementos = document.querySelectorAll('.col-md-6 p');
    elementos.forEach(function(elemento) {
        elemento.style.backgroundColor = 'yellow';
        elemento.style.fontStyle = 'italic';
    });
}









