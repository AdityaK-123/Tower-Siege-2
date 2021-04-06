const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var Polysling;
var player;

var polygon;
var img,Bgimg;

function preload(){
  img = loadImage("hexagon.png");
  Bgimg = loadImage("Bg1.jpg");
}

function setup() {
  createCanvas(1350,610);
  engine = Engine.create();
    world = engine.world;


    block1 = new Block(600,260,30,40);
    block2 = new Block(570,260,30,40);
    block3 = new Block(540,260,30,40);
    block4 = new Block(630,260,30,40);
    block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 30);
  ground4 = new Ground(900,500,250,10);


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);
  
  block23 = new Block(820,485,40,40);
  block24 = new Block(860,485,40,40);
  block25 = new Block(900,485,40,40);
  block26 = new Block(940,485,40,40);
  block27 = new Block(980,485,40,40);

  block28 = new Block(820,475,40,40);
  block29 = new Block(980,475,40,40);

  block30 = new Block(900,455,200,20);
  
  block31 = new Block(900,435,30,50);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  Polysling = new Chain(this.polygon,{x:150, y:160});

}

function draw() {
  background(Bgimg);
  Engine.update(engine);

  fill("purple");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill(rgb(188,5,178));
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("violet");
  bolck10.display();
  block11.display();
  block12.display();
  
  fill(rgb(85, 196, 240));
  block13.display();

  fill("limegreen");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  
  fill("chartreuse");
  block19.display();
  block20.display();
  block21.display();
  
  fill("yellow");
  block22.display();
  
  fill("maroon");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  
  fill(rgb(178,34,34));
  block28.display();
  block29.display();

  fill(rgb(255,99,71));
  block30.display();

  fill(rgb(255,160,122));
  block31.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  imageMode(CENTER);
  image(img,polygon.position.x,polygon.position.y,40,40);

  Polysling.display();
  fill("white");
  textFont("Cursive");
  textSize(30);
  text("Don't give up , Press space to try again 😊",20,60);
  fill(rgb(198, 246, 254));
  text("Drag & release the hexagon to shoot!!",800,60);
}


function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  Polysling.fly();
  
}




function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(polygon, {x: 150 , y: 160});
		Polysling.attach(polygon);


	}
}