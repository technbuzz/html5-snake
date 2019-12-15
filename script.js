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

snake.forEach(([x,y]) => {
  context.fillRect(x, y, 1, 1)
})


console.log(canvas);
