class Box{

constructor(x,y,width,height){

var option = {

    isStatic:false,
    restitution:0.8,
    friction:0.7,
    density:2
}

this.body = Bodies.rectangle(x,y,width,height,option)
this.width = width
this.height = height

World.add(world,this.body)



}


display(){
push();
rectMode(CENTER)
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
rect(0,0,this.width,this.height)

pop();

}











}