class Gate{

    constructor(x,y){
        this.body=Bodies.rectangle(800,400,100,500,{isStatic:true})
        this.image=loadImage("gate image 1.png")
this.image=loadImage("gate image 2.png")
        World.add(world,this.body)
        
        this.body.x=x
        this.body.y=y
    }

    display(){

        imageMode(CENTER)
        image(this.body.position.x,this.body.position.y,100,500,this.image,20,20)

    }
    
}