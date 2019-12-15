// @ts-check

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

context.scale(10, 10)
// context.fillRect(1, 1, 4, 4)

const snake = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4]
]

let keyboardState = [ 1, 0]

function updateLoop() {
  let tail = snake.pop()
  let head = snake[0]
  tail[0] = head[0] + keyboardState[0]
  tail[1] = head[1] + keyboardState[1]
  snake.unshift(tail)

  draw()
}



function draw() {
  context.clearRect(0,0, 400, 400)
  snake.forEach(([x, y]) => {
    context.fillRect(x, y, 1, 1);
  });
}

draw();


// draw()