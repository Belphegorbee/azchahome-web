// Loading screen 3 detik
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
  }, 3000);
});

// Efek membesar saat icon diklik
function iconClicked(element) {
  element.style.transform = "scale(1.2)";
  setTimeout(() => {
    element.style.transform = "scale(1)";
    alert(element.querySelector('span').innerText + " clicked!");
  }, 200);
}