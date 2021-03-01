class Monster{

    constructor(x,y,width,height,angle){

        var options={
          
          frictionAir:0.005,
          density:0.4,
        }

        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.ball=loadImage("Monster-01.png")
        World.add(world,this.body)

  }
     display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.ball,0,0,200,200);
      
        pop()
     }
    
}