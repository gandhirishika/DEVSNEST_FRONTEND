window.onload = () => {

    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    const erasor = document.getElementsByClassName("erasor")
    const color = document.getElementsByClassName("color")
    var restore_array = []
    var index = -1;
    erasor[0].addEventListener("click", ers)
    color[0].addEventListener("click", pencil)

    document.getElementById("resize").addEventListener('resize', () => {
        canvas.width = innerWidth
        canvas.height = innerHeight
      })

    // // // canvas.height=window.innerHeight;
    // // // canvas.width=window.innerWidth;


    function pencil() {

        let painting = false;

        function startPosition(e) {
            painting = true;
            draw(e)
        }

        function finishedPosition(e) {
            painting = false;
            ctx.beginPath()
            if (e.type != "mouseout") {
                restore_array.push(ctx.getImageData(0, 0, canvas.width, canvas.height))
                index += 1;
            }
            // console.log(restore_array)
        }


        function draw(e) {
            if (!painting) return
            ctx.linecap = "round";
            ctx.lineJoin = 'round'
            ctx.lineWidth = parseInt(document.getElementById("pen-size").value);
            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke();

        }


        canvas.addEventListener("mousedown", startPosition)
        canvas.addEventListener("mouseup", finishedPosition)
        canvas.addEventListener("mousemove", draw)


    }
    function ers() {

        let erasing = false;

        function startPositionE(e) {
            erasing = true;
            erase(e)
        }

        function finishedPositionE() {
            erasing = false;
            ctx.beginPath()
        }
        function erase(e) {
            if (!erasing) return
            ctx.linecap = "round";
            ctx.lineJoin = 'round'
            ctx.lineWidth = 20;
            ctx.strokeStyle = 'white'

            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke();

        }


        canvas.addEventListener("mousedown", startPositionE)
        canvas.addEventListener("mouseup", finishedPositionE)
        canvas.addEventListener("mousemove", erase)
    }


    download_img = function (e) {

        var imageURI = canvas.toDataURL("image/png", 1.0);
        e.href = imageURI;
    };

    document.getElementById("reset").addEventListener("click", reset)
    document.getElementById("undo").addEventListener("click", restore)
    document.getElementById("redo").addEventListener("click", redo)
    // document.getElementById("text").addEventListener("click", addtext)
    // document.getElementById("image").addEventListener("click", addimage)


    function reset() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        restore_array = [];
        index = -1;
    }

    function restore(e) {
        if (index <= 0) {
            reset()
      
        }
        else {
            index += -1;
            // restore_array.pop()
      ctx.putImageData(restore_array[index], 0, 0)
      
        }}



    function redo(e) {
if(index<=0){
    index += 1;
    ctx.putImageData(restore_array[index], 0, 0)
}
 
                index += 1;
                ctx.putImageData(restore_array[index], 0, 0)
              
            
    }
// function addimage() {
//     base_image=new Image()
//     base_image.src='img/base.png'
//     base_image.onload=function () {
//         ctx.drawImage(base_image,0,0)
//  
var imageLoader = document.getElementById('image');
    imageLoader.addEventListener('change',addimage,false);

function addimage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
canvas.width=img.width;
canvas.height=img.height
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);     
    
}
document.getElementsByClassName("shape")[0].addEventListener("click",function(){
    document.getElementById("shapes").classList.toggle("show")
})
// function addtext() {
//     ctx.font = "bold 18px Arial";
//     ctx.fillText("Text", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
// }
    // canvas.addEventListener("click", function (e) {
    //      var target = e.target
    //     // const zoomElement = document.querySelector("#canvas");
    //     const zoomElement = target;
    //     let zoom = 1;
    //     const ZOOM_SPEED = 0.1;

    // zoomElement.addEventListener("wheel", function (e) {

    //         if (e.deltaY > 0) {
    //             zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;
    //         } else {
    //             zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
    //         }

    //     });

    // })




    font = '14px sans-serif',
    hasInput = false;


document.getElementById("text").addEventListener("click",function(e) {
document.getElementById("canvas").addEventListener("click",function(e) {
    
    if (hasInput) return;
    addInput(e.clientX, e.clientY);
    
}) 

//Function to dynamically add an input box: 
function addInput(x, y) {

    var input = document.createElement('input');

    input.type = 'text';
    input.style.position = 'fixed';
    input.style.left = (x - 4) + 'px';
    input.style.top = (y - 4) + 'px';

    input.onkeydown = handleEnter;

    document.body.appendChild(input);

    input.focus();

    hasInput = true;
}

//Key handler for input box:
function handleEnter(e) {
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        drawText(this.value, parseInt(this.style.left, 10), parseInt(this.style.top, 10));
        document.body.removeChild(this);
        hasInput = false;
    }
}

//Draw the text onto canvas:
function drawText(txt, x, y) {
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.font = font;
    ctx.fillText(txt, x - 4, y - 4);
}
})





document.getElementById("rect").addEventListener("click",function(){

    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'blue'
    ctx.rect(100, 20, 150, 100)
    ctx.stroke()
    ctx.fill()
    
})

document.getElementById("line").addEventListener("click",function(){
ctx.beginPath()
ctx.moveTo(40, 250)
ctx.lineTo(200, 500)
ctx.strokeStyle = 'red'
ctx.stroke()

})


document.getElementById("circle").addEventListener("click",function(){

ctx.lineWidth = 5
ctx.beginPath()
ctx.arc(400, 400, 50, 0, Math.PI * 2)
ctx.stroke()
})

document.getElementById("bezier").addEventListener("click",function () {
    ctx.lineWidth = 5
ctx.strokeStyle = 'red'

ctx.beginPath()
ctx.moveTo(400, 400)
ctx.lineTo(400, 300)
ctx.quadraticCurveTo(450, 250, 500, 300)
ctx.lineTo(500, 400)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(800, 400);
ctx.bezierCurveTo(800, 150, 1200, 700, 1200, 400);
ctx.stroke()
})







}