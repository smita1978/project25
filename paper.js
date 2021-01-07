class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restitution':0,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius=r;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
   
         }
         display(){
            var pos = this.body.position;
            imageMode(0);
            
            image(this.image,pos.x,pos.y,this.radius,this.radius);
         }
}