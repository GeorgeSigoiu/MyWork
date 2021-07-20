
const images = document.querySelectorAll('#menu .content .products .aliments .item .image img');
const imag = document.querySelector('.modal .img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log("clicked");
}
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden'))
      closeModal();
  }
});
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    openModal();
    const url = `url('./img/mancare/food-${i + 1}.jpg') no-repeat center center / cover`;
    imag.style.background = url;
  });
}


//smooth scroll
const btn = document.getElementById('scrollToMenu');
const menu = document.getElementById('menu');
console.log(menu);
btn.addEventListener('click', function (e) {
  e.preventDefault();
  const coord = menu.getBoundingClientRect();
  menu.scrollIntoView({ behavior: 'smooth' });
});
