function preload()
{

}
function setup()
{
    canvas = createCanvas(1000, 500);
    canvas.center();
    canvas.id = "myCanvas";
}
function draw() {
circle(150,150,60);
rect(135,178,30,245);
circle(150,450,60);
rect(635,178,30,245);
circle(650,450,60);
rect(175,130,450,30);
circle(650,150,60);
rect(175,430,450,30);
}
Webcam.set({
width:500,
height:300,
img_format:'png',
png_quality:90
});
Webcam.attach('#canvas');

