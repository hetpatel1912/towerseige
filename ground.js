class Ground{
    
    constructor(x,y,width,height){
        var options= {
            restitution : 0,
            density : 1,
            isStatic:true        
     

        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        Matter.World.add(world,this.body)

    }
    display(){
        push()
        rectMode(CENTER)
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop()
    }
     
}