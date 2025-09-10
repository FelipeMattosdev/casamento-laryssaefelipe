// scripts.js

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

