//canvas rendering context 2d (canvas API)

const canvas = document.getElementById("jsCanvas");

const ctx = canvas.getContext("2d");

const colors = document.getElementsByClassName("jsColor");

canvas.width = 800;
canvas.height = 700; //pixel modifier (tell how big is the canvas)

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

 let painting = false;

 function startPainting() {
    painting = true;
  }

 function stopPainting() {
    painting = false;
 }

 function onMouseMove(event) {
   const x = event.offsetX;
   const y = event.offsetY;
   //console.log(x,y);
   if (!painting) {
    //console.log("creating path in ", x, y);
    ctx.beginPath();//create new path
    ctx.moveTo(x, y);
  } else {
    //console.log("creating line in ", x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
 }

 function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
  }
 

 if (canvas) {
   canvas.addEventListener("mousemove", onMouseMove);
   canvas.addEventListener("mousedown", startPainting);
   canvas.addEventListener("mouseup", stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
 }

 Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );
//Array.from - creates an array from object