
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var b21,b22,b23,b24,b25,b26,b27,b28,b29,b30;
var s1,s2
var ball;
var rope;

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	ground = new Ground(250,480,500,20)
  b1 = new Box(10,470,20,20);
  b2 = new Box(10,450,20,20)
  b3 = new Box(10,430,20,20)
  b4 = new Box(10,410,20,20)
  b5 = new Box(10,390,20,20)
  b6 = new Box(10,370,20,20)
  b7 = new Box(10,350,20,20)
  b8 = new Box(10,330,20,20)
  b9 = new Box(10,310,20,20)
  b10 = new Box(10,290,20,20)


  b11 = new Box(30,470,20,20);
  b12 = new Box(30,450,20,20)
  b13 = new Box(30,430,20,20)
  b14 = new Box(30,410,20,20)
  b15 = new Box(30,390,20,20)
  b16 = new Box(30,370,20,20)
  b17 = new Box(30,350,20,20)
  b18 = new Box(30,330,20,20)
  b19 = new Box(30,310,20,20)
  b20 = new Box(30,290,20,20)

  b21 = new Box(50,470,20,20);
  b22 = new Box(50,450,20,20)
  b23 = new Box(50,430,20,20)
  b24 = new Box(50,410,20,20)
  b25 = new Box(50,390,20,20)
  b26 = new Box(50,370,20,20)
  b27 = new Box(50,350,20,20)
  b28 = new Box(50,330,20,20)
  b29 = new Box(50,310,20,20)
  b30 = new Box(50,290,20,20)


  s1 = new Ground(250,320,10,300);
  s2 = new Ground(195,240,100,10)

	
  ball = new Bob(195,400,15)

  rope = new Ropes(ball.body,{x:195,y:245})
}


function draw() {
  rectMode(CENTER);
  background("green");
 Engine.update(engine);
 
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();


 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();


 
 b21.display();
 b22.display();
 b23.display();
 b24.display();
 b25.display();
 b26.display();
 b27.display();
 b28.display();
 b29.display();
 b30.display();


 s1.display();
 s2.display();


 ball.display();


rope.display();

}

function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}