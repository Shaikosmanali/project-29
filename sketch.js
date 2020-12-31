const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var p_block1,p_block2,p_block3,p_block4,p_block5,p_block6,p_block7,p_block8,p_block9,p_block10,p_block11,p_block12,p_block13,p_block14,p_block15,p_block16;

var b_block1,b_block2,b_block3,b_block4,b_block5,b_block6,b_block7,b_block8,b_block9,b_block10,b_block11;

var r_block1,r_block2,r_block3,r_block4,r_block5,r_block6,r_block7,r_block8;

var g_block1,g_block2;

var ground1,ground2;

var polygon;

var sling;
function setup() {
  createCanvas(1500,900);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(600,600,600,20);
  ground2=new Ground(1200,400,500,20);
  
  //pink blocks.
  p_block1=new P_Block(370,530,60,100);
  p_block2=new P_Block(430,530,60,100);
  p_block3=new P_Block(490,530,60,100);
  p_block4=new P_Block(550,530,60,100);
  p_block5=new P_Block(610,530,60,100);
  p_block6=new P_Block(670,530,60,100);
  p_block7=new P_Block(730,530,60,100);
  p_block8=new P_Block(790,530,60,100);
  p_block9=new P_Block(850,530,60,100);

  p_block10=new P_Block(1000,340,60,100);
  p_block11=new P_Block(1060,340,60,100);
  p_block12=new P_Block(1120,340,60,100);
  p_block13=new P_Block(1180,340,60,100);
  p_block14=new P_Block(1230,340,60,100);
  p_block15=new P_Block(1280,340,60,100);
  p_block16=new P_Block(1330,340,60,100);

  //blue blocks.
  b_block1=new B_Block(480,400,60,100);
  b_block2=new B_Block(540,400,60,100);
  b_block3=new B_Block(600,400,60,100);
  b_block4=new B_Block(660,400,60,100);
  b_block5=new B_Block(720,400,60,100);
  b_block6=new B_Block(780,400,60,100);
 
  b_block7=new B_Block(1060,240,60,100);
  b_block8=new B_Block(1120,240,60,100);
  b_block9=new B_Block(1180,240,60,100);
  b_block10=new B_Block(1240,240,60,100);
  b_block11=new B_Block(1300,240,60,100);

  //red blocks.
  r_block1=new R_Block(540,300,60,100);
  r_block2=new R_Block(600,300,60,100);
  r_block3=new R_Block(660,300,60,100);
  r_block4=new R_Block(720,300,60,100);

  r_block5=new R_Block(1120,140,60,100);
  r_block6=new R_Block(1180,140,60,100);
  r_block7=new R_Block(1240,140,60,100);

  //green block.
  g_block1=new G_Block(630,200,60,100);

  g_block2=new G_Block(1180,40,60,100);

  //polygon.
  r_block8=new R_Block(100,100,70,70);
  
  sling=new Slingshot(r_block8.body,{x:200,y:250});
  
}

function draw() {
  background(2,2,2);
  Engine.update(engine);  
  ground1.display();
  ground2.display();
  p_block1.display();
  p_block2.display();
  p_block3.display();
  p_block4.display();
  p_block5.display();
  p_block6.display();
  p_block7.display();
  p_block8.display();
  p_block9.display();

  p_block10.display();
  p_block11.display();
  p_block12.display();
  p_block13.display();
  p_block14.display();
  p_block15.display();
  p_block16.display();
  
  
  b_block1.display();
  b_block2.display();
  b_block3.display();
  b_block4.display();
  b_block5.display();
  b_block6.display();

  b_block7.display();
  b_block8.display();
  b_block9.display();
  b_block10.display();
  b_block11.display();

  r_block1.display();
  r_block2.display();
  r_block3.display();
  r_block4.display();

  r_block5.display();
  r_block6.display();
  r_block7.display();

  g_block1.display();
  g_block2.display();

  r_block8.display();
 
  sling.display();
  drawSprites();
}
function mouseDragged(){
    
  Matter.Body.setPosition(r_block8.body, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
