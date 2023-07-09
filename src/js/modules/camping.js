const bannerText = document.querySelector('.camping__camping-text')
const needScroll = window.innerWidth > 767 ? 1520 : 3548
window.addEventListener('scroll', () => {
  if (window.scrollY >= needScroll) {
    bannerText.classList.add('appear')
  }
})