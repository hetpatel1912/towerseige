class Sling{
    constructor(point,body){
        var options = {
            bodyA:body,
            pointB:point,
            stiffness: 0.5,
            length : 30
        
        }

        this.chain = Matter.Constraint.create(options)
          Matter.World.add(world,this.chain)

         
    }
    fly(){
        this.chain.bodyA= null
    }
    display(){
        if(this.chain.bodyA)
        {
            stroke(255);
            line(this.chain.pointB.x,this.chain.pointB.y,this.chain.bodyA.position.x,this.chain.bodyA.position.y)}
    }
}