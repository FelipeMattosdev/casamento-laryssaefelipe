// Seleciona elementos do carrossel
const carousel = document.querySelector("#slide-container");
const images = carousel.querySelectorAll("img");
const indicatorsContainer = document.querySelector("#carousel-indicators");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;

// ---------- Criar indicadores dinamicamente ----------
images.forEach((_, i) => {
  const dot = document.createElement("span");
  if(i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => scrollToSlide(i));
  indicatorsContainer.appendChild(dot);
});

const indicators = indicatorsContainer.querySelectorAll("span");

// ---------- Função para atualizar indicadores ----------
function updateIndicators(index) {
  indicators.forEach(dot => dot.classList.remove("active"));
  indicators[index].classList.add("active");
}

// ---------- Função para rolar para uma imagem específica ----------
function scrollToSlide(index) {
  const gap = 12; // gap entre imagens (igual ao CSS)
  const imageWidth = images[0].offsetWidth + gap;
  carousel.scrollTo({ left: imageWidth * index, behavior: "smooth" });
  currentIndex = index;
  updateIndicators(currentIndex);
}

// ---------- Navegação com setas ----------
leftArrow.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  scrollToSlide(currentIndex);
});
rightArrow.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, images.length - 1);
  scrollToSlide(currentIndex);
});

// ---------- Atualiza indicador ao arrastar manualmente ----------
carousel.addEventListener("scroll", () => {
  const gap = 12;
  const imageWidth = images[0].offsetWidth + gap;
  const index = Math.round(carousel.scrollLeft / imageWidth);
  if(index !== currentIndex) {
    currentIndex = index;
    updateIndicators(currentIndex);
  }
});

// ---------- Garantir que primeira imagem fique visível ao carregar ----------
window.addEventListener("load", () => {
  carousel.scrollTo({ left: 0, behavior: "auto" });
});

// Contagem regressiva
function iniciarContagem() {
  const destino = new Date("Jan 17, 2026 19:00:00").getTime();

  const timer = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = destino - agora;

    if (distancia < 0) {
      clearInterval(timer);
      document.getElementById("contador").innerHTML = "O grande dia chegou! 💍";
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =
      `⏳ ${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }, 1000);
}
iniciarContagem();

