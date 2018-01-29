
ctx10.moveTo(10, 20);
      ctx10.lineTo(390, 20);
      ctx10.stroke();
      ctx10.moveTo(244.85, 10);
      ctx10.lineTo(244.85, 30);
      ctx10.stroke();

      function drawLeaf2(l) {
        //just for fun:
        var r = l * phi;
        var theta = Math.asin(l/r);
        ctx11.beginPath();
        ctx11.arc(Math.pow((r*r - l*l), 0.5), -l, r, Math.PI - theta, Math.PI + theta);
        ctx11.stroke();

        ctx11.beginPath();
        ctx11.arc(-Math.pow((r*r - l*l), 0.5), -l, r, -theta, theta);
        ctx11.stroke();
      }

      ctx11.translate(250, 250);

      drawLeaf2(120);
      ctx11.rotate(2*Math.PI/phi);
      drawLeaf2(105);


      ctx9.translate(250, 250);

      function drawLeaf(l) {
        //just for fun:
        var r = l * phi;
        var theta = Math.asin(l/r);
        ctx9.beginPath();
        ctx9.arc(Math.pow((r*r - l*l), 0.5), -l, r, Math.PI - theta, Math.PI + theta);
        ctx9.stroke();

        ctx9.beginPath();
        ctx9.arc(-Math.pow((r*r - l*l), 0.5), -l, r, -theta, theta);
        ctx9.stroke();
      }

      var startLength = 120;

      for (var i=0; i<20; i++) {
        drawLeaf(startLength);
        ctx9.rotate(2*Math.PI/phi);
        startLength *= 0.88;
      }
