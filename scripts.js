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

// Garantir que comece na 1ª imagem
window.addEventListener("load", () => {
  carousel.scrollTo({ left: 0, behavior: "auto" });
});

// === Contagem Regressiva Circular ===
const weddingDate = new Date("2026-01-17T19:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const daysCircle = document.getElementById("days-circle");
const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

const circleLength = 176; // circunferência do círculo

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("contador").innerHTML = "💍 Chegou o grande dia!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");

  // Atualiza círculos
  daysCircle.style.strokeDashoffset = circleLength - (days % 365) * (circleLength / 365);
  hoursCircle.style.strokeDashoffset = circleLength - (hours % 24) * (circleLength / 24);
  minutesCircle.style.strokeDashoffset = circleLength - (minutes % 60) * (circleLength / 60);
  secondsCircle.style.strokeDashoffset = circleLength - (seconds % 60) * (circleLength / 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();


