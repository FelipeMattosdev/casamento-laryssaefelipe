// Carrossel
const carousel = document.querySelector("#slide-container");
const images = carousel.querySelectorAll("img");
const indicatorsContainer = document.querySelector("#carousel-indicators");
let currentIndex = 0;

// Criar indicadores
images.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => scrollToSlide(i));
  indicatorsContainer.appendChild(dot);
});

const indicators = indicatorsContainer.querySelectorAll("span");

function updateIndicators(index) {
  indicators.forEach(dot => dot.classList.remove("active"));
  indicators[index].classList.add("active");
}

function scrollToSlide(index) {
  const gap = 12;
  const imageWidth = images[0].offsetWidth + gap;
  carousel.scrollTo({ left: imageWidth * index, behavior: "smooth" });
  currentIndex = index;
  updateIndicators(currentIndex);
}

carousel.addEventListener("scroll", () => {
  const gap = 12;
  const imageWidth = images[0].offsetWidth + gap;
  const index = Math.round(carousel.scrollLeft / imageWidth);
  if (index !== currentIndex) {
    currentIndex = index;
    updateIndicators(currentIndex);
  }
});

window.addEventListener("load", () => {
  carousel.scrollTo({ left: 0, behavior: "auto" });
});

// Contador moderno
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

    const unidades = [
      { label: 'D', value: dias },
      { label: 'H', value: horas },
      { label: 'M', value: minutos },
      { label: 'S', value: segundos }
    ];

    document.getElementById("contador").innerHTML = '';
    unidades.forEach(u => {
      const item = document.createElement('div');
      item.classList.add('countdown-item');
      item.innerHTML = `<svg><circle cx="30" cy="30" r="28"></circle><circle cx="30" cy="30" r="28"></circle></svg><div class="number">${u.value}</div><span>${u.label}</span>`;
      document.getElementById("contador").appendChild(item);
    });
  }, 1000);
}

iniciarContagem();


