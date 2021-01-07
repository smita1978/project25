class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("dustbin.png");
        World.add(world,this.body);
   
         }
         display(){
            var pos = this.body.position;
            rectMode(CENTER);
           
            rect(pos.x-90,pos.y+5,20,110);
            rect(pos.x+90,pos.y+5,20,110);
            imageMode (CENTER);
           image (this.image,pos.x,pos.y,this.width,120);
         }
}