


// function setup() {
//   var can = createCanvas(800, 800);
// }
//
// function draw() {
//   clear()
// }

//i is column, j is row:
//how terribly strange, it won't color the first one on the screen...has SOMETHING to do with the fact that i was calling fill() AFTER drawing the rect.:
var startingCreature = [{i: 10, j: 10}, {i: 3, j: 5}, {i: 4, j: 4}, {i: 4, j: 5}, {i: 4, j: 3}, {i: 2, j: 4}];
var start, w, h;
var s = 40;

//to keep track of which cells are alive/dead:
var gridValues = [];
var nextGridValues = [];
var nextState = [];

//trick for making variables global:
var can;

function makeGrid(s) {
  w = can.width;
  h = can.height;
  offset = 1000/s;
  //Say w=100. If s=5, we want start=10, then increment by 20. If s=20, we want start=2.5, and increment by 5.
  start = w/(s*2);
  // console.log(start);

  //to be honest, not entirely sure why we need the -50. Well I suppose it's like going until (arr.length - 1):
  for (var i = start; i < w - offset; i += 2*start) {
    var row = [];
    for (var j = start; j < h - offset; j += 2*start) {
      fill('lightgray');
      rect(i, j, 2*start - 2, 2*start - 2);

      //value signifies alive (1) or dead (0):
      row.push({i: i, j: j, value: 0, index: 2*(i - start) / s, jindex: 2*(j - start) / s});
    }
    gridValues.push(row);
    nextGridValues.push(row);
    nextState.push(row);
  }
  console.log(gridValues);
  //wait why on earth are some of the values 1 at this point??
  // if we comment out startingCreature.forEach() it's all zeroes....but why would that run before this???
}

// function drawGrid(s) {
//   w = can.width;
//   h = can.height;
//   offset = 1000/s;
//   start = w/(s*2);
//
//   for (var i = start; i < w - offset; i += 2*start) {
//     var row = [];
//     for (var j = start; j < h - offset; j += 2*start) {
//       fill('lightgray');
//       rect(i, j, 2*start - 2, 2*start - 2);
//     }
//   }
// }


function getNeighbors(x) {
    neighbors = [];

    // if (x.value) {
    //   console.log(x.index, x.jindex, x.value);
    // }
    // console.log(startingCreature);

    if (x.index > 0) {
      neighbors.push({i: x.index - 1, j: x.jindex});

      if (x.jindex > 0) {
        neighbors.push({i: x.index, j: x.jindex - 1});
        neighbors.push({i: x.index - 1, j: x.jindex - 1});
      }

      if (x.jindex < s - 2) {
        neighbors.push({i: x.index, j: x.jindex + 1});
        neighbors.push({i: x.index - 1, j: x.jindex + 1});
      }
    } else {
      if (x.jindex > 0) {
        neighbors.push({i: x.index, j: x.jindex - 1});
      }
      if (x.jindex < s - 2) {
        neighbors.push({i: x.index, j: x.jindex + 1});
      }
    }

    if (x.index < s - 2) {
      neighbors.push({i: x.index + 1, j: x.jindex});

      if (x.jindex > 0) {
        neighbors.push({i: x.index + 1, j: x.jindex - 1});
      }
      if (x.jindex < s - 2) {
        neighbors.push({i: x.index + 1, j: x.jindex + 1});
      }
    }

    // if (x.value) {
    //   console.log(neighbors);
    // }
    return neighbors;
  } // end getNeighbors


  function liveOrDie(x) {
    var neighbors = getNeighbors(x);
    var total = 0;

    neighbors.forEach(function(n) {
      //n has two properties: i and j. i records its column, and j its row.
      if (gridValues[n.i][n.j].value) {
        total ++;
        // console.log('aha', n.i, n.j);
      }
    });

    //It always ends up dead in this situation:
    if (total < 2 || total > 3) {
      nextGridValues[x.index][x.jindex].value = 0;
    }

    //And it always ends up alive in this situation:
    if (total == 3) {
      nextGridValues[x.index][x.jindex].value = 1;
    }

    //forgot we needed this too. Wait or do we?
    // if (total ==2 && x.value) {
    //   nextGridValues[x.index][x.jindex].value = 1;
    // }

    total = 0;
    //And if total == 2, it stays in its current state.
  }



function setup() {
  can = createCanvas(800, 800);
  // frameRate(7);

  makeGrid(s);

// Draw starting creature:
  startingCreature.forEach(function(item) {
    var xOff, yOff;
    xOff = start + item.i * 2*start;
    yOff = start + item.j * 2*start;
    fill('black');
    rect(xOff, yOff, 2*start - 2, 2*start - 2);
    // fill(0, 200);

    nextState[item.i][item.j].value = 1;
  });

  //an array of column arrays (catalogued by "index") containing row-elements (catalogued by "jindex"):
  console.log(gridValues);
  // console.log(nextGridValues);

  // gridValues.forEach(function(row) {
  //   row.forEach(function(c) {
  //     liveOrDie(c);
  //   });
  // });

  // console.log(nextGridValues);

} //end SETUP



function draw() {
  // setFrameRate(2);
  // //whoa, need to have 0 here for it to show cells....And even if you take away, still gives the '2 argument' error...
  // // background(0, 50);
  // //ahh, you must pass something to the fill function, OK:
  // fill(0, 50);
  // //
  // // liveOrDie({index: 5, jindex: 4, value: 0});
  // //
  // // drawGrid(s);
  // var xOff, yOff;
  //
  // nextGridValues.forEach(function(row) {
  //   row.forEach(function(c) {
  //     xOff = start + c.index * 2*start;
  //     yOff = start + c.jindex * 2*start;
  //     if (c.value) {
  //       // console.log('value', xOff, yOff);
  //       fill('black');
  //       rect(xOff, yOff, 2*start - 2, 2*start - 2);
  //     } else {
  //       fill('lightgray');
  //       rect(xOff, yOff, 2*start - 2, 2*start - 2);
  //     }
  //   });
  // });
  //
  // gridValues = nextGridValues;
  //
  // gridValues.forEach(function(row) {
  //   row.forEach(function(c) {
  //     liveOrDie(c);
  //   });
  // });

  // gridValues.forEach(function(row) {
  //   row.forEach(function(x) {
  //     // var neighbors = getNeighbors(x);
  //     liveOrDie(x);
  //
  //     xOff = start + x.index * 2*start;
  //     yOff = start + x.jindex * 2*start;
  //
  //     if (gridValues[x.index][x.jindex].value == 1) {
  //       fill('black');
  //       rect(xOff, yOff, 2*start - 2, 2*start - 2);
  //
  //     }
  //     else {
  //       fill('lightgray');
  //       // rect(xOff, yOff, 2*start - 2, 2*start - 2);
  //
  //     }
  //
  //   });
  // });




} //end DRAW
