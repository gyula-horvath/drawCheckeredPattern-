var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

var x = 0;
var y = 0;

var a = 40;

function drawCheckeredPattern(row,col) {
  for (var squareCounter = 0; squareCounter < row; squareCounter++) {
    for (var i = 0; i < col; i++){  
      if (squareCounter%2 === 1) {
        if (i%2 === 1) {
          context.fillStyle = 'white';
        } else {
          context.fillStyle = 'black';
        }
      } else {
        if (i%2 === 1) {
          context.fillStyle = 'black';
        } else {
          context.fillStyle = 'white';
        }
      }
      context.fillRect(x, y, a, a);
      x += 40;
    }
    x -= i*40;
    y += 40;
  }
}

drawCheckeredPattern(8,8);