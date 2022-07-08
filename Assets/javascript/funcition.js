
const menu = document.getElementById('navbar__menu')
const abrir = document.getElementById('navbar__btn')
const cerrar = document.getElementById('navbar__cerrar')

abrir.addEventListener('click', (e) => {
  menu.classList.add('mostrar__menu')
})

cerrar.addEventListener('click', (e) => {
  menu.classList.remove('mostrar__menu')
})