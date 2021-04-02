
// ===== VARIABLES
let index = 0
let cursor = 'grab'
let cursor_2 = 'grabbing'

// ===== Select box element
const box_1 = document.querySelector('#drag')
const box_2 = document.querySelector('#drag2')
const box_3 = document.querySelector('#drag3')
const box_4 = document.querySelector('#drag4')
const box_5 = document.querySelector('#drag5')
const box_6 = document.querySelector('#drag6')
const box_7 = document.querySelector('#drag7')
const box_8 = document.querySelector('#drag8')


// ===== Select button element
const btn_1 = document.querySelector('#dragBtn_1')
const btn_2 = document.querySelector('#dragBtn_2')
const btn_3 = document.querySelector('#dragBtn_3')
const btn_4 = document.querySelector('#dragBtn_4')
const btn_5 = document.querySelector('#dragBtn_5')




/** Box 1 **/
const dragBox_1 = (e) => {
  // Change the box position in the window
  box_1.style.top = e.pageY + 'px'
  box_1.style.left = e.pageX + 'px'
  // change the cursor style
  box_1.style.cursor = cursor_2
}

box_1.addEventListener('mousedown', () => {
  box_1.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_1)
  box_1.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_1.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_1)
  box_1.style.zIndex -= 1
})


/** Box 2 **/
const dragBox_2 = (e) => {
  // Change the box position in the window
  box_2.style.top = e.pageY + 'px'
  box_2.style.left = e.pageX + 'px'
  // change the cursor style
  box_2.style.cursor = cursor_2
}

box_2.addEventListener('mousedown', () => {
  box_2.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_2)
  box_2.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_2.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_2)
  box_2.style.zIndex -= 1
})


/** Box 3 **/
const dragBox_3 = (e) => {
  // Change the box position in the window
  box_3.style.top = e.pageY + 'px'
  box_3.style.left = e.pageX + 'px'
  // change the cursor style
  box_3.style.cursor = cursor_2
}

box_3.addEventListener('mousedown', () => {
  box_3.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_3)
  box_3.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_3.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_3)
  box_3.style.zIndex -= 1
})


/** Box 4 **/
const dragBox_4 = (e) => {
  // Change the box position in the window
  box_4.style.top = e.pageY + 'px'
  box_4.style.left = e.pageX + 'px'
  // change the cursor style
  box_4.style.cursor = cursor_2
}

box_4.addEventListener('mousedown', () => {
  box_4.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_4)
  box_4.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_4.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_4)
  box_4.style.zIndex -= 1
})


/** Box 5 **/
const dragBox_5 = (e) => {
  // Change the box position in the window
  box_5.style.top = e.pageY + 'px'
  box_5.style.left = e.pageX + 'px'
  // change the cursor style
  box_5.style.cursor = cursor_2
}

box_5.addEventListener('mousedown', () => {
  box_5.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_5)
  box_5.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_5.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_5)
  box_5.style.zIndex -= 1
})


/** Box 6 **/
const dragBox_6 = (e) => {
  // Change the box position in the window
  box_6.style.top = e.pageY + 'px'
  box_6.style.left = e.pageX + 'px'
  // change the cursor style
  box_6.style.cursor = cursor_2
}

box_6.addEventListener('mousedown', () => {
  box_6.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_6)
  box_6.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_6.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_6)
  box_6.style.zIndex -= 1
})


/** Box 7 **/
const dragBox_7 = (e) => {
  // Change the box position in the window
  box_7.style.top = e.pageY + 'px'
  box_7.style.left = e.pageX + 'px'
  // change the cursor style
  box_7.style.cursor = cursor_2
}

box_7.addEventListener('mousedown', () => {
  box_7.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_7)
  box_7.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_7.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_7)
  box_7.style.zIndex -= 1
})


/** Box 8 **/
const dragBox_8 = (e) => {
  // Change the box position in the window
  box_8.style.top = e.pageY + 'px'
  box_8.style.left = e.pageX + 'px'
  // change the cursor style
  box_8.style.cursor = cursor_2
}

box_8.addEventListener('mousedown', () => {
  box_8.style.cursor = cursor
  window.addEventListener('mousemove', dragBox_8)
  box_8.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  box_8.style.cursor = cursor
  window.removeEventListener('mousemove', dragBox_8)
  box_8.style.zIndex -= 1
})





// ===== BUTTON SECTION =====

/** Btn 1 **/
const dragBtn_1 = (e) => {
  // Change the box position in the window
  btn_1.style.top = e.pageY + 'px'
  btn_1.style.left = e.pageX + 'px'
  // change the cursor style
  btn_1.style.cursor = cursor_2
}

btn_1.addEventListener('mousedown', () => {
  btn_1.style.cursor = cursor
  window.addEventListener('mousemove', dragBtn_1)
  btn_1.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  btn_1.style.cursor = cursor
  window.removeEventListener('mousemove', dragBtn_1)
  btn_1.style.zIndex -= 1
})


/** Btn 2 **/
const dragBtn_2 = (e) => {
  // Change the box position in the window
  btn_2.style.top = e.pageY + 'px'
  btn_2.style.left = e.pageX + 'px'
  // change the cursor style
  btn_2.style.cursor = cursor_2
}

btn_2.addEventListener('mousedown', () => {
  btn_2.style.cursor = cursor
  window.addEventListener('mousemove', dragBtn_2)
  btn_2.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  btn_2.style.cursor = cursor
  window.removeEventListener('mousemove', dragBtn_2)
  btn_2.style.zIndex -= 1
})


/** Btn 3 **/
const dragBtn_3 = (e) => {
  // Change the box position in the window
  btn_3.style.top = e.pageY + 'px'
  btn_3.style.left = e.pageX + 'px'
  // change the cursor style
  btn_3.style.cursor = cursor_2
}

btn_3.addEventListener('mousedown', () => {
  btn_3.style.cursor = cursor
  window.addEventListener('mousemove', dragBtn_3)
  btn_3.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  btn_3.style.cursor = cursor
  window.removeEventListener('mousemove', dragBtn_3)
  btn_3.style.zIndex -= 1
})


/** Btn 4 **/
const dragBtn_4 = (e) => {
  // Change the box position in the window
  btn_4.style.top = e.pageY + 'px'
  btn_4.style.left = e.pageX + 'px'
  // change the cursor style
  btn_4.style.cursor = cursor_2
}

btn_4.addEventListener('mousedown', () => {
  btn_4.style.cursor = cursor
  window.addEventListener('mousemove', dragBtn_4)
  btn_4.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  btn_4.style.cursor = cursor
  window.removeEventListener('mousemove', dragBtn_4)
  btn_4.style.zIndex -= 1
})


/** Btn 5 **/
const dragBtn_5 = (e) => {
  // Change the box position in the window
  btn_5.style.top = e.pageY + 'px'
  btn_5.style.left = e.pageX + 'px'
  // change the cursor style
  btn_5.style.cursor = cursor_2
}

btn_5.addEventListener('mousedown', () => {
  btn_5.style.cursor = cursor
  window.addEventListener('mousemove', dragBtn_5)
  btn_5.style.zIndex = index + 1
})

window.addEventListener('mouseup', (e) => {
  btn_5.style.cursor = cursor
  window.removeEventListener('mousemove', dragBtn_5)
  btn_5.style.zIndex -= 1
})



// PLAY THE VIDEO
let play_btn = document.querySelector('.play_btn')
let pause_btn = document.querySelector('.pause_btn')
let video = document.querySelector('.video_video')

play_btn.addEventListener('click', () => {
  video.play()
  play_btn.style.display = "none"
  pause_btn.style.display = "inline"
})

pause_btn.addEventListener('click', () => {
  video.pause()
  play_btn.style.display = "inline"
  pause_btn.style.display = "none"
})