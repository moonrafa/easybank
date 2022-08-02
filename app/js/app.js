const btnMenu = document.getElementById('btn-menu')
const headerMenu = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElements = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

btnMenu.addEventListener('click', function () {
  if (headerMenu.classList.contains('open')) {
    headerMenu.classList.remove('open')
    body.classList.remove('no-scroll')
    fadeElements.forEach(function (element) {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  } else {
    headerMenu.classList.add('open')
    body.classList.add('no-scroll')

    fadeElements.forEach(function (element) {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})
