const dragEl = document.querySelector('#drag')
const dragEl2 = document.querySelector('#drag2')

let index = 0
let cursor = 'grab'

const drag = (e) => {
  dragEl.style.top = e.pageY + 'px'
  dragEl.style.left = e.pageX + 'px'
  dragEl.style.cursor = cursor
}

const drag2 = (e) => {
  dragEl2.style.top = e.pageY + 'px'
  dragEl2.style.left = e.pageX + 'px'
}

dragEl.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', drag)
  dragEl.style.zIndex = index + 1
})

dragEl2.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', drag2)
  dragEl2.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  window.removeEventListener('mousemove', drag)
  dragEl.style.zIndex -= 1
})

window.addEventListener('mouseup', (e) => {
  window.removeEventListener('mousemove', drag2)
  dragEl2.style.zIndex -= 1
})
