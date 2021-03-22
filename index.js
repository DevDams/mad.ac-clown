const dragEl = document.querySelector('#drag')
const dragEl2 = document.querySelector('#drag2')

const drag = (e) => {
  dragEl.style.top = e.pageY + 'px'
  dragEl.style.left = e.pageX + 'px'
  dragEl.style.zIndex = 99
}

const drag2 = (e) => {
  dragEl2.style.top = e.pageY + 'px'
  dragEl2.style.left = e.pageX + 'px'
  dragEl2.style.zIndex = 99
}

dragEl.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', drag)
})

dragEl2.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', drag2)
})

window.addEventListener('mouseup', (e) => {
  window.removeEventListener('mousemove', drag)
  dragEl.style.zIndex = 0
})

window.addEventListener('mouseup', (e) => {
  window.removeEventListener('mousemove', drag2)
  dragEl2.style.zIndex = 0
})
