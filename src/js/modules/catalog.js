const buttonleft = document.querySelector('.catalog__arr')
const buttonright = document.querySelectorAll('.catalog__arr')[1]
const services = document.querySelector('.catalog__services')

buttonleft.addEventListener('click', () => {
  services.scrollTo({
    left: services.scrollLeft - services.offsetWidth,
    behavior: 'smooth'
  })
})
buttonright.addEventListener('click', () => {
  services.scrollTo({
    left: services.scrollLeft + services.offsetWidth,
    behavior: 'smooth'
  })
})
