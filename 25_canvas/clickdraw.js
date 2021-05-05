//Team wij (Winnie Huang, Ishita Gupta, Jessica Yeung)
//SoftDev
//K25 -- I See a Red Door...
//2021-05-04

//e.preventDefault(); //prevents the default action from working
var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var mode = "rect";

function switchMode() {
  var x = document.getElementById("mode");
  if (x.innerHTML === "Rectangle Mode. Click to switch to Dot Mode.<br>Click and drag to draw the rectangle.") {
    console.log("Now in dot mode...");
    x.innerHTML = "Dot Mode. Click to switch to Rectangle Mode.";
    mode = "dot";
  } else {
    console.log("Now in rectangle mode...");
    x.innerHTML = "Rectangle Mode. Click to switch to Dot Mode.<br>Click and drag to draw the rectangle.";
    mode = "rect";
  }
}

function clearAll() {
  console.log("Clearing...");
  ctx.clearRect(0, 0, c.width, c.height);//topleftX, toprightX, width, height
}

var drawing=false
var preRectx = 0;
var preRecty = 0;
var postRectx = 0;
var postRecty = 0;

slate.addEventListener('mousedown', e => {//while mouse is down drawing is true
  console.log("The mouse is now down...");
  drawing=true;
  preRectx=e.offsetX; //e.offsetX and e.offsetY records coordinates of cursor
  postRectx=e.offsetX; //set post coordinates to same so that nothing is drawn on initial click
  preRecty=e.offsetY;
  postRecty=e.offsetY;
})

slate.addEventListener('mousemove', e=> {//if mouse is down then draw while moving mouse
  console.log("The mouse is now moving...");
  if (drawing===true){
    draw();
  }
})

window.addEventListener('mouseup', e => {//when mouse is lifted, draw rectangle and turn drawing off
  console.log("The mouse is now up...");
  if (drawing === true) {
    postRectx=e.offsetX;
    postRecty=e.offsetY;
    draw();
    drawing = false;
  }
})

function draw() {
  if (mode === "rect") {
    ctx.beginPath();//signal to start a new drawing
    //ctx.fillStyle = "#FF0000";
    console.log("Now drawing a rectangle...")
    ctx.fillRect(preRectx, preRecty, postRectx-preRectx, postRecty-preRecty);//(topleftX, startingY, width, height)
    ctx.stroke();//ends current drawing (path)
  }
  else {
    ctx.beginPath();
    console.log("Now drawing dots...")
    ctx.arc(event.clientX, event.clientY, 1, 0, 2 * Math.PI);//(centerX, centerY, radius, starting angle, ending angle)
    ctx.stroke();
  }
}
