const slides = document.querySelector("#slide-container");
const images = slides.querySelectorAll("img");
const totalImages = images.length;
let index = 0;

function showNextSlide() {
  index++;
  if (index >= totalImages) {
    index = 0;
  }
  const offset = -index * 100; // move a largura de uma imagem
  slides.style.transform = `translateX(${offset}%)`;
}

// Troca automática a cada 5 segundos
setInterval(showNextSlide, 5000);
