//more info - canvas rendering context 2d (canvas API)

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");
const range = document.getElementById("jsRange");
const reset = document.getElementById("jsReset");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#f6f9fc";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

 let painting = false;
 let filling = false;

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

 function resetBtn(event) {
    window.location.reload();
    }
    
    if (reset) {
    reset.addEventListener("click", resetBtn);
    }
    
 function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
  }
 
  function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
  }

  function handleModeClick() {
    if (filling === true) {
      filling = false;
      mode.innerText = "Fill";
    } else {
      filling = true;
      mode.innerText = "Paint";
    }
  }
 function handleCanvasClick(){
     if (filling) {
         ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
 }

 function handleCM(event) {
     //console.log(event);
    event.preventDefault();
  }
  function handleSaveClick() {
    //const image = canvas.toDataURL("image/jpeg");
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    //html mdn download - when you search for error
    link.href = image; //href has to be image
    link.download = "Painting[🎨]"; //download has to be name
    link.click(); //fake click
  }

  //'event' only comes when we use a function from 'addEventListener'
 if (canvas) {
   canvas.addEventListener("mousemove", onMouseMove);
   canvas.addEventListener("mousedown", startPainting);
   canvas.addEventListener("mouseup", stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
   canvas.addEventListener("click", handleCanvasClick);
   canvas.addEventListener("contextmenu", handleCM);
 }

 Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );
 //Array.from - creates an array from object

  if (range) {
    range.addEventListener("input", handleRangeChange);
  }
  if (mode) {
    mode.addEventListener("click", handleModeClick);
  }
  if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
  }
 