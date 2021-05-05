class BaseClass{
    constructor(x,y,width,height){

        var options={

            restitution:0.5,
            density:0.1,
            friction:1
        }
        this.body=Matter.Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
       

        //this.image = loadImage ("wood1.png")
        Matter.World.add(world,this.body)

    }
    display(){

        push()
        
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
    //     rectMode(CENTER)
    //    rect(0,0,this.width,this.height)
        fill("yellow")
      imageMode(CENTER)
    image(this.image,0,0,30,40);
        pop()


    }

}

