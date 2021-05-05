

function preload(){
  ball = loadImage("polygon.png")
  
}
function setup(){
    createCanvas(1000,500);
   engine=Matter.Engine.create();
   world=engine.world;

base1 = new Ground(330,270,260,20)
block1 = new block(240,240,30,40)
block2 = new block(270,240,30,40)
block3 = new block(300,240,30,40)
block4 = new block(330,240,30,40)
block5 = new block(360,240,30,40)
block6 = new block(390,240,30,40)
block7 = new block(420,240,30,40)
//layer2
block8 = new block(270,200,30,40)
block9 = new block(300,200,30,40)
block10= new block(330,200,30,40)
block11 = new block(360,200,30,40)
block12 = new block(390,200,30,40)
//layer3
block13= new block(300,160,30,40)
block14= new block(330,160,30,40)
block15 = new block(360,160,30,40)
//layer4
block16 = new block(330,120,30,40)
//second tower
base2 = new Ground(650,400,260,20)
//layer1
block17 = new block(560,350,30,40)
block18 = new block(590,350,30,40)
block19 = new block(620,350,30,40)
block20 = new block(650,350,30,40)
block21 = new block(680,350,30,40)
block22 = new block(710,350,30,40)
block23 = new block(740,350,30,40)
//layer2
block24 = new block(590,310,30,40)
block25 = new block(620,310,30,40)
block26 = new block(650,310,30,40)
block27 = new block(680,310,30,40)
block28 = new block(710,310,30,40)
//layer3
block29 = new block(620,270,30,40)
block30 = new block(650,270,30,40)
block31 = new block(680,270,30,40)
//layer4
block32 = new block(650,230,30,40)
polygon = new Ground(200,150,15,20)
Matter.Body.setStatic(polygon.body,false)
chain1 = new Sling({x:200,y:100},polygon.body)



 
}
function draw (){
    Matter.Engine.update(engine);  
     background("black")
     textSize(25)
     text("drag the polygon to destroy the boxes",400,80)
     base1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
 //layer2   
 block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  //layer3
  block13.display()
  block14.display()
  block15.display()
  //layer4
  block16.display()
  //second tower
  base2.display()
  //layer1
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
//layer2
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  //layer3
  block29.display()
  block30.display()
  block31.display()
//layer4
block32.display()
polygon.display()
chain1.display()
imageMode(CENTER)
image(ball,polygon.body.position.x,polygon.body.position.y,25,30)
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain1.fly()
}