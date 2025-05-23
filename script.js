function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeStr = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = timeStr;

  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const dateStr = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateStr;
}

setInterval(updateClock, 1000);
updateClock(); // run once on load
