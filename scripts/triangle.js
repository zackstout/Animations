
function setup() {
  var can = createCanvas(800, 800);
}

function draw() {
  clear();

}

var canvas0 = document.getElementById('sierptriangle');
var ctx0 = canvas0.getContext('2d');

var vertices = [];

function drawSierpTriangle(s) {
  //triangle:
  ctx0.beginPath();
  ctx0.arc(250, 50, 10, 0, 2*Math.PI);
  ctx0.stroke();
  vertices.push({x: 250, y:50});

  ctx0.beginPath();
  ctx0.arc(250 + s, 50 + s*Math.pow(3, 0.5), 10, 0, 2*Math.PI);
  ctx0.stroke();
  vertices.push({x: 250 + s, y:50 + s*Math.pow(3, 0.5)});

  ctx0.beginPath();
  ctx0.arc(250 - s, 50 + s*Math.pow(3, 0.5), 10, 0, 2*Math.PI);
  ctx0.stroke();
  vertices.push({x: 250 - s, y:50 + s*Math.pow(3, 0.5)});



  // Pentagon:
  // ctx0.beginPath();
  // ctx0.arc(50, 200, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 50, y:200});
  //
  // ctx0.beginPath();
  // ctx0.arc(450, 200, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 450, y:200});
  //
  // ctx0.beginPath();
  // ctx0.arc(100, 420, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 100, y:420});
  //
  // ctx0.beginPath();
  // ctx0.arc(400, 420, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 400, y:420});

  // ctx0.beginPath();
  // ctx0.arc(250, 50, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 250, y:50});



  //irregular quad:
  // ctx0.beginPath();
  // ctx0.arc(50, 100, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 50, y:100});
  //
  // ctx0.beginPath();
  // ctx0.arc(450, 200, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 450, y:200});
  //
  // ctx0.beginPath();
  // ctx0.arc(100, 420, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 100, y:420});
  //
  // ctx0.beginPath();
  // ctx0.arc(400, 420, 10, 0, 2*Math.PI);
  // ctx0.stroke();
  // vertices.push({x: 400, y:420});
}

drawSierpTriangle(200);

ctx0.beginPath();
ctx0.arc(325, 270, 0.15, 0, 2*Math.PI);
// ctx0.stroke();
ctx0.fillStyle = 'black';
ctx0.fill();
var start = {x: 325, y: 270};

function drawRandomPoint2() {
  var random = Math.floor(Math.random() * vertices.length);
  var maxX = Math.max(vertices[random].x, start.x);
  var minX = Math.min(vertices[random].x, start.x);
  var maxY = Math.max(vertices[random].y, start.y);
  var minY = Math.min(vertices[random].y, start.y);

  var newPoint = {x: minX + (maxX - minX)/2, y: minY + (maxY - minY)/2};
  ctx0.beginPath();
  ctx0.arc(newPoint.x, newPoint.y, 0.15, 0, 2*Math.PI);
  // ctx0.stroke();
  if (maxX === start.x && maxY === start.y) {
    ctx0.fillStyle = 'green';
  }
  if (maxX === start.x && minY === start.y) {
    ctx0.fillStyle = 'purple';
  }
  if (minX === start.x && maxY === start.y) {
    ctx0.fillStyle = 'blue';
  }
  if (minX === start.x && minY === start.y) {
    ctx0.fillStyle = 'red';
  }

  ctx0.fill();

  start.x = newPoint.x;
  start.y = newPoint.y;
}

var fractalInt;
vm.startSierp = function() {
  fractalInt = setInterval(drawRandomPoint2, 0.01);
};
vm.stopSierp = function() {
  clearInterval(fractalInt);
};
