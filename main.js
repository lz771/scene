const myCanvas = document.getElementById("canvas1");
const ctx = myCanvas.getContext("2d");

const back_img = new Image();
const fg_img1 = new Image();
const fg_img2 = new Image();

back_img.src = "images/background.jpg";
fg_img1.src = "images/cat.jpeg";
fg_img2.src = "images/dog.jpg";

// loading all the images
let imagesLoaded = 0;
const images = [back_img, fg_img1, fg_img2];
images.forEach(img => {
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === images.length) {
        drawScene();
    }
  };
});

// draw scene
function drawScene(){
    ctx.drawImage(back_img,0,0,1500,900);
    ctx.drawImage(fg_img1,0,0,750,450);
    ctx.drawImage(fg_img2,750,450,800,500);
    ctx.font = "60px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Animals", 260, 700);
    ctx.fillText("Lili Lin Zhao", 970, 240);
}
