function updateCountdown() {
  const now = new Date().getTime();
  const eventDate = new Date('2026-01-17T17:00:00').getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    document.getElementById('countdown-header').innerHTML = 'Evento já ocorreu!';
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('countdown-header').innerHTML = `
    <span>${days}d</span> :
    <span>${hours}h</span> :
    <span>${minutes}m</span> :
    <span>${seconds}s</span>
  `;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
