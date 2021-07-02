window.addEventListener('scroll',function(){
  let nav=document.querySelector('#navigation');
  let windowsPosition=window.scrollY>10;
  nav.classList.toggle('scrolling-active',windowsPosition);
})


const items = document.querySelectorAll('#section-b .items .item');
const items2 = document.querySelectorAll('#section-c .content .items a');
const items3 = document.querySelectorAll('#section-g .content .items');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight+150 || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

const run2 = () =>
items2.forEach(item => {
  if (isInViewport(item)) {
    item.classList.add('show');
  }
});

const run3 = () =>
items3.forEach(item => {
  if (isInViewport(item)) {
    item.classList.add('show');
  }
});
// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
window.addEventListener('load', run2);
window.addEventListener('resize', run2);
window.addEventListener('scroll', run2);
window.addEventListener('load', run3);
window.addEventListener('resize', run3);
window.addEventListener('scroll', run3);