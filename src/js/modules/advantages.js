const advantageItems = document.querySelectorAll('.advantage')
const appear = () => {
  for (let i = 0; i < advantageItems.length; i++) {
    i % 2 === 0
      ? advantageItems[i].classList.add('onscroll_left')
      : advantageItems[i].classList.add('onscroll_right')
  }
}

const needScrol = window.innerWidth > 767 ? 1500 + 800 : 3500 + 800
window.addEventListener('scroll', () => {
  if (window.scrollY >= needScrol) {
    appear()
  }
})