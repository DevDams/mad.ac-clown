

// Variables
let grab = 'grab'
let grabbing = 'grabbing'
let index = 0

// Drag function
function dragBox(el) {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0

  if (el) {
      el.onmousedown = dragMouseDown
  } else {
      el.onmousedown = dragMouseDown
  }

  el.style.cursor = grabbing

  function dragMouseDown(e) {
      e = e || window.event
      e.preventDefault();
      pos3 = e.clientX
      pos4 = e.clientY
      document.onmouseup = closeDragElement
      document.onmousemove = elementDrag
  }
  
  function elementDrag(e) {
      e = e || window.event
      e.preventDefault();
      pos1 = pos3 - e.clientX
      pos2 = pos4 - e.clientY
      pos3 = e.clientX
      pos4 = e.clientY
      el.style.top = (el.offsetTop - pos2) + 'px'
      el.style.left = (el.offsetLeft - pos1) + 'px'
  }
  
  function closeDragElement() {
      document.onmouseup = null
      document.onmousemove = null
  }
}

// Drag element when mouse down on it
function drag (el) {
    el.addEventListener('mousedown', () => {
        el.style.cursor = grab
        window.addEventListener('mousemove', dragBox(el))
        el.style.zIndex = index + 1
        console.log(window.getComputedStyle(el).zIndex)
    })
}

// Stop drag when mouse up on an element
function dragEl (el) {
    window.addEventListener('mouseup', (e) => {
        el.style.cursor = grab
        window.removeEventListener('mousemove', dragBox(el))
        el.style.zIndex -= 1
        console.log(window.getComputedStyle(el).zIndex)
    })
}



// Function to place a box on top of each other if click on it
drag(document.querySelector('#drag'))
dragEl(document.querySelector('#drag'))


drag(document.querySelector('#drag2'))
dragEl(document.querySelector('#drag2'))


drag(document.querySelector('#drag3'))
dragEl(document.querySelector('#drag3'))


drag(document.querySelector('#drag4'))
dragEl(document.querySelector('#drag4'))


drag(document.querySelector('#drag5'))
dragEl(document.querySelector('#drag5'))


drag(document.querySelector('#drag6'))
dragEl(document.querySelector('#drag6'))


drag(document.querySelector('#drag7'))
dragEl(document.querySelector('#drag7'))


drag(document.querySelector('#drag8'))
dragEl(document.querySelector('#drag8'))


// Menu buttons

drag(document.querySelector('#dragBtn_1'))
dragEl(document.querySelector('#dragBtn_1'))


drag(document.querySelector('#dragBtn_2'))
dragEl(document.querySelector('#dragBtn_2'))


drag(document.querySelector('#dragBtn_3'))
dragEl(document.querySelector('#dragBtn_3'))


drag(document.querySelector('#dragBtn_4'))
dragEl(document.querySelector('#dragBtn_4'))


drag(document.querySelector('#dragBtn_5'))
dragEl(document.querySelector('#dragBtn_5'))





