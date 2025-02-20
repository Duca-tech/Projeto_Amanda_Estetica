function abrirResposta(e) { const t = e.nextElementSibling; t && t.classList.contains("resposta") && (t.classList.contains("open") ? t.classList.remove("open") : t.classList.add("open")) }; let next = document.querySelector(".next"), prev = document.querySelector(".prev"); next.addEventListener("click", function () { var e = document.querySelectorAll(".item"); document.querySelector(".slide").appendChild(e[0]) }), prev.addEventListener("click", function () { var e = document.querySelectorAll(".item"); document.querySelector(".slide").prepend(e[e.length - 1]) });



document.addEventListener("DOMContentLoaded", function () {
    let video = document.querySelector(".video");
    let poster = document.getElementById("poster");
    let play = document.querySelector(".containervideo i");

    // Remover a imagem e o botão quando o vídeo começar a tocar
    video.addEventListener("play", function () {
        poster.style.opacity = "0"; // Faz a imagem sumir suavemente
        play.style.opacity = "0"; // Faz o botão sumir suavemente

        setTimeout(() => {
            poster.style.display = "none";
            play.style.display = "none";
        }, 500); // Remove a imagem e o botão após a animação
    });

    // Se o usuário clicar no botão, iniciar o vídeo
    play.addEventListener("click", function () {
        poster.style.opacity = "0";
        play.style.opacity = "0";
        video.play(); // Dá play no vídeo automaticamente

        setTimeout(() => {
            poster.style.display = "none";
            play.style.display = "none";
        }, 500);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    var btnPrev = document.querySelector(".provaPrev");
    var btnNext = document.querySelector(".provaNext");
    var items = document.querySelectorAll(".provaSocialCarrossel");
    var carrossel = document.querySelector(".provaSocial");

    var currentIndex = 0; // Índice do item atual

    // Função para atualizar a visibilidade dos itens
    function updateCarousel(animacao) {
        // Primeiro, esconder todos os itens
        items.forEach(function(item) {
            item.classList.remove('active', 'slideInLeft', 'slideInRight'); // Remove animações anteriores
        });

        // Aplica a animação de slide dependendo da direção
            items[currentIndex].classList.add(animacao); // Entrada do item pela esquerda
        

        // Mostrar o item atual
        items[currentIndex].classList.add('active');
    }

    // Inicializa o carrossel exibindo o primeiro item
    updateCarousel();

    // Navegar para o próximo item
    btnNext.addEventListener("click", function () {
        if (currentIndex < items.length - 1) {
            currentIndex++; // Avança para o próximo item
        } else {
            currentIndex = 0; // Se estiver no último item, volta para o primeiro
        }
        updateCarousel('slideInLeft'); // Atualiza a visibilidade do item com animação
    });

    // Naveg    ar para o item anterior
    btnPrev.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--; // Volta para o item anterior
        } else {
            currentIndex = items.length - 1; // Se estiver no primeiro item, vai para o último
        }
        updateCarousel('slideInRight'); // Atualiza a visibilidade do item com animação
    });
});
