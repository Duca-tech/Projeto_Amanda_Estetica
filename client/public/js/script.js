    // Exibe o popup
    function abrirPopup() {
        document.getElementById('popup').style.display = 'flex';
    }

    // Fecha o popup
    function fecharPopup() {
        document.getElementById('popup').style.display = 'none';

        setTimeout(abrirPopup, 10000)
    }

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