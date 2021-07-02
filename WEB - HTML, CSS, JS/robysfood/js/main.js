
// // Smooth Scrolling
// $('#navbar a, .btn').on('click', function(event) {
//   if (this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top - 100
//       },
//       800
//     );
//   }
// });

const images=document.querySelectorAll('#menu .content .products .aliments .item .image img');
const imag=document.querySelector('.modal .img');
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
for(let i=0;i<images.length;i++){
  images[i].addEventListener('click',function(){
    openModal();
    const url=`url('./img/mancare/food-${i+1}.jpg') no-repeat center center / cover`;
    imag.style.background=url;
  });
}


