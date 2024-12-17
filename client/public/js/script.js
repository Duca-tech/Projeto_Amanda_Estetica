

function abrirResposta(pergunta) {
    // Encontra a resposta abaixo da pergunta clicada
    const resposta = pergunta.nextElementSibling;

    // Verifica se a resposta está visível ou não
    if (resposta && resposta.classList.contains('resposta')) {
        // Alterna a classe "open" para exibir a resposta com animação
        if (resposta.classList.contains('open')) {
            resposta.classList.remove('open'); // Fecha a resposta com animação
        } else {
            resposta.classList.add('open'); // Abre a resposta com animação
        }
    }
}


// Abre o popup automaticamente após 500ms (pode ser ajustado conforme necessário)
setTimeout(abrirPopup, 500);



// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;

//     document.querySelector('.containerTecnicas').style.backgroundPositionY = `${scrolled * 0.5}px`;
//     document.querySelector('.containerNovidades').style.backgroundPositionY = `${(scrolled - window.innerHeight) * 0.5}px`;
//   });


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})