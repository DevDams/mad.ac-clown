// Drag function
function dragBox(el) {
  let pos1 = 0
  let pos2 = 0
  let pos3 = 0
  let pos4 = 0
  if(el) {
      el.onmousedown = dragMouseDown
  } else {
      el.onmousedown = dragMouseDown
  }

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
      if (el.offsetTop + 100 > 580) {
          el.style.transform = 'scale(0.7)'
      } else if (el.offsetTop + 100 < 580) {
          el.style.transform = 'scale(1)'
      }
  }
  
  function closeDragElement() {
      if (el.offsetTop + 100 > 580) {
          el.style.display = 'none'
      } else if (el.offsetTop + 100 < 580) {
          el.style.display = 'block'
      }
      document.onmouseup = null
      document.onmousemove = null
  }
}

dragBox(document.querySelector('#drag'))
dragBox(document.querySelector('#drag2'))
dragBox(document.querySelector('#drag3'))
dragBox(document.querySelector('#drag4'))
dragBox(document.querySelector('#drag5'))
dragBox(document.querySelector('#drag6'))
dragBox(document.querySelector('#drag7'))
dragBox(document.querySelector('#drag8'))

dragBox(document.querySelector('#dragBtn_1'))
dragBox(document.querySelector('#dragBtn_2'))
dragBox(document.querySelector('#dragBtn_3'))
dragBox(document.querySelector('#dragBtn_4'))
dragBox(document.querySelector('#dragBtn_5'))