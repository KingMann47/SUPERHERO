const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var tower1,tower2,tower3,tower4,tower5,tower6;
var ball,rope;
var ground;
var backgroundImg;
function preload(){

    backgroundImg=loadImage("GamingBackground.png")
}
function setup(){
createCanvas(2000,500)
engine=Engine.create();
world=engine.world;


ground=new Ground(300,400,1200,20)

tower1= new Tower(800,300,50,50)
tower2= new Tower(750,300,50,50)
tower3= new Tower(700,300,50,50)
tower4= new Tower(780,210,50,50)
tower5= new Tower(730,210,50,50)
tower6= new Tower(760,140,50,50)
//tower7= new Tower
ball= new Ball(300,250,80,80)

rope= new Rope(ball.body,{x:550,y:100})

monster=new Monster(850,300,50,50);


}
function draw(){
background(backgroundImg)
Engine.update(engine);


ground.display()
tower1.display()
tower2.display();
tower3.display();
tower4.display()
tower5.display();
tower6.display();
ball.display();
rope.display();
monster.display();


}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
    
}