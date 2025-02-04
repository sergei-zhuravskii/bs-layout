
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', showScrollUpBtn);

function showScrollUpBtn() {

  if (window.scrollY > document.documentElement.clientHeight) {
    scrollUpBtn.classList.add('scroll-up-btn_visible');
  } else {
    scrollUpBtn.classList.remove('scroll-up-btn_visible');
  }
}

scrollUpBtn.addEventListener('click', scrollToUp);

function scrollToUp() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -100);
    setTimeout(scrollToUp, 0);
  }
}
