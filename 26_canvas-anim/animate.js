//Team wij (Winnie Huang, Ishita Gupta, Jessica Yeung)
//SoftDev
//K26 -- canvas based JS animation
//2021-05-06-->

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");// GET DOT BUTTON
var stopButton = document.getElementById("buttonStop");// GET STOP BUTTON

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = 'blue';

var requestID;  //init global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
    console.log("clear invoked...")
    ctx.clearRect(0, 0, c.width, c.height);
    // YOUR CODE HERE
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = () => {
    console.log("drawDot invoked...")
    window.cancelAnimationFrame(requestID);

    clear();

    if (radius >= c.width / 2) {//radius should always shrink when reaching canvas border
        radius--;
    }
    else if (radius <= c.width / 2) {
        if (growing) {
            radius++;//radius should grow when growing
            if (radius >= c.width / 2) {//if circle hits border, circle should now shrink
                growing = false;
            }
        }
        else {
            radius--;//if shrinking, decrease radius
            if (radius <= 1) {//if circle reaches small size, start growing again
                growing = true;
            }
        }
    }

    console.log(radius);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);//(centerX, centerY, radius, starting angle, ending angle)
    ctx.stroke();
    requestID = window.requestAnimationFrame(drawDot);
};

//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...")
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

// connects buttons to functions
dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
