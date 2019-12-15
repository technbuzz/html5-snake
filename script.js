// @ts-check

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

context.scale(10, 10)
let direction = [ 1, 0]

document.body.onkeyup = function(e){
  console.log('asdfsf', e);
  if (e.key === 'ArrowDown'){
    direction[0] = 0
    direction[1] = 1
  } else if (e.key === 'ArrowRight') {
    direction = [1, 0]
  } else if (e.key === 'ArrowUp') {
    direction = [0, -1]
  } else if (e.key === 'ArrowLeft') {
    direction = [-1, 0]
  }
}

// context.fillRect(1, 1, 4, 4)

const snake = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4]
]


function updateLoop() {
  let tail = snake.pop()
  let head = snake[0]
  tail[0] = head[0] + direction[0]
  tail[1] = head[1] + direction[1]
  snake.unshift(tail)

  draw()
}



function draw() {
  context.clearRect(0,0, 400, 400)
  snake.forEach(([x, y]) => {
    context.fillRect(x, y, 1, 1);
  });
}

setInterval(updateLoop, 300)

// draw();


// draw()