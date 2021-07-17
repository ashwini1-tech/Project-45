var elephant;

var forestImg,elephantImg,invisibleGround;
var cactus,a,p,pap,q
var gameState=1

function preload()
{
	
	forestImg=loadImage("forest.jpg")
	elephantImg=loadImage("a22.png")
	cactus=loadImage("cactus.jpg")
	a=loadImage("e.jpg")
	p=loadImage("shield.png")
	q=loadImage("OIP.jpg")
}

function setup() {
	createCanvas(1200, 500);
	
	
	
	


}


function draw() {
	/*if(frameCount<80){
 //background("black")
	//textSize(20)
	//fill("red")
	//text("YOU ARE AN ELEPHANT AND YOUR MOTHER HAS BEEN KIDNAPPED.",200,200)
	//}
	 if(frameCount===100){
	  background(forestImg);
  if(elephant.x>1260){
	
	background(q)
	elephant.x=150
	pap.destroy()
	cac.destroy()
}
 
  
  elephant.velocityY+=0.8
  elephant.collide(invisibleGround)
  if(keyDown("UP_ARROW")){
	elephant.velocityY=-12
	
}
if(elephant.isTouching(pap)){
	elephant.addImage(a)
pap.destroy()
}

  drawSprites();
}
  
 

}

function keyPressed() {
	
	if(keyCode===RIGHT_ARROW){
elephant.x=elephant.x+20
	}
	if(keyCode===LEFT_ARROW){
		elephant.x=elephant.x-20
			}
		*/
	if(gameState===1){
		story()
	}
	if(gameState===2){
		forest()
	}
	console.log(gameState)
	}
	function story(){
		background("black")
		textSize(35)
		fill("red")
		text("YOU ARE AN ELEPHANT. YOUR MOTHER HAS BEEN KIDNAPPED",70,200)
		text("NOW YOU HAVE TO RESCUE HER.",380,240)
		text("PRESS S TO START",380,280)
		if(keyDown("S")){
			gameState=2
			
		}
	}
	
function forest(){
	background(forestImg)
	elephant=createSprite(150,370,0,0)
	elephant.addImage(elephantImg)
elephant.scale=0.6
cac=createSprite(550,400,0,0)
cac.addImage(cactus)
cac.scale=0.5	 
}