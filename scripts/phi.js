
const PHI = 1.61803399;
const PI = Math.PI;

let ctx;
let start = 200;

//thank you stackoverflow:
//i believe we need this because we're using templates, so when the original scripts loaded, our canvas wasn't on the DOM yet.
(function(window, document, undefined){

window.onload = init;

  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodes
    let canvas = document.getElementById('can');
    console.log(canvas);
    ctx = canvas.getContext('2d');
    drawLeaf(start);
  }

})(window, document, undefined);

function drawLeaf() {
  //do it as a global variable in order to use setInterval later:
  l = start;
  let r = l * PHI;
  let theta = Math.asin(l/r);
  ctx.translate(400, 400);

  ctx.beginPath();
  ctx.arc(Math.pow((r*r - l*l), 0.5), -l, r, PI - theta, PI + theta);
  ctx.stroke();

  // ctx.beginPath();
  ctx.arc(-Math.pow((r*r - l*l), 0.5), -l, r, -theta, theta);
  ctx.stroke();
  //nice, we just need to use closePath in order to fill:
  ctx.closePath();

  ctx.fillStyle = getRandomColor();
  //oh right, we don't pass anything to fill in canvas, that's just p5.
  ctx.fill();

  ctx.rotate(2*PI/PHI);

  ctx.translate(-400, -400);

  start *= 0.9;
}

//thank you stackoverflow:
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var startFlower = setInterval(drawLeaf, 1000);

//
// ctx10.moveTo(10, 20);
//       ctx10.lineTo(390, 20);
//       ctx10.stroke();
//       ctx10.moveTo(244.85, 10);
//       ctx10.lineTo(244.85, 30);
//       ctx10.stroke();
//
//       function drawLeaf2(l) {
//         var r = l * PHI;
//         var theta = Math.asin(l/r);
//         ctx11.beginPath();
//         ctx11.arc(Math.pow((r*r - l*l), 0.5), -l, r, PI - theta, PI + theta);
//         ctx11.stroke();
//
//         ctx11.beginPath();
//         ctx11.arc(-Math.pow((r*r - l*l), 0.5), -l, r, -theta, theta);
//         ctx11.stroke();
//       }
//
//       ctx11.translate(250, 250);
//
//       drawLeaf2(120);
//       ctx11.rotate(2 PI/phi);
//       drawLeaf2(105);
//
//
//       ctx9.translate(250, 250);
//
//       function drawLeaf(l) {
//         //just for fun:
//         var r = l * phi;
//         var theta = Math.asin(l/r);
//         ctx9.beginPath();
//         ctx9.arc(Math.pow((r*r - l*l), 0.5), -l, r, PI - theta, PI + theta);
//         ctx9.stroke();
//
//         ctx9.beginPath();
//         ctx9.arc(-Math.pow((r*r - l*l), 0.5), -l, r, -theta, theta);
//         ctx9.stroke();
//       }
//
//       var startLength = 120;
//
//       for (var i=0; i<20; i++) {
//         drawLeaf(startLength);
//         ctx9.rotate(2 PI/phi);
//         startLength *= 0.88;
//       }
