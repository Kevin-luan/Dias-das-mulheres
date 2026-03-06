// Função para exibir a mensagem
function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML = "❤️Feliz Dia da Mulher,Hoje eu celebro você, sua força, sua beleza e todo o carinho que você espalha por onde passa. Sou grato por ter você na minha vida e por cada momento que compartilhamos juntos. Que seu dia seja tão incrível quanto você é para mim. Te amo!❤️";



}

// Carrossel de Imagens
let slideIndex = 0;
mostrarSlide();

function mostrarSlide() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(mostrarSlide, 3000); // Troca de imagem a cada 3 segundos
}

function mudarSlide(n) {
    slideIndex += n - 1;
    mostrarSlide();
}