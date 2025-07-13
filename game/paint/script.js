// script.js
var canvas = document.getElementById('canvas')
canvas.width = 800
canvas.height = 450
const context = canvas.getContext('2d')

function Draw(A, B) {
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath()
}

// biến xác định quá trình vẽ
let drawing = false
// toạ độ điểm bắt đầu vẽ
let startPoint = [0, 0] // x = 0, y = 0

// khai báo các sự kiện (event)
canvas.addEventListener('mousedown', handleMouseDown)
canvas.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)

function handleMouseDown(event) {
    drawing = true
    const { pageX: x, pageY: y } = event
    // lưu điểm bắt đầu vẽ
}

function getPointOfCanvas(event) {
    // xác định toạ độ của canvas
      const { x, y } = canvas.getBoundingClientRect()
      const { pageX, pageY } = event
      return [ pageX - x, pageY - y ]
}
    
function handleMouseDown(event) {
    drawing = true
    startPoint = getPointOfCanvas(event)
}

function handleMouseUp() {
    drawing = false
    startPoint = [0, 0]
}
function handleMouseMove(event) {
    // không làm gì nếu chưa trong tiến trình vẽ
    if (!drawing) return
    const nextPoint = getPointOfCanvas(event)
    context.beginPath()
    context.moveTo(...startPoint)
    context.lineTo(...nextPoint)
    context.stroke()
    context.closePath()
    // B sẽ trở thành điểm bắt đầu
    startPoint = [...nextPoint]
}