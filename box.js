class block extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.visibility=255;
     this.image=loadImage("wood1.png")


        
       

    }
    display(){
        if(this.body.speed>3){
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            //imageMode(CENTER)
           //image(this.image,this.body.position.x,this.body.position.y,30,30)
            pop()

        }
        else{
           super.display()

        }
        
    }
   
   
}