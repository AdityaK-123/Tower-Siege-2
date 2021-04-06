class Block{
    constructor(x, y, width, height, ) {
        var options = {
          restitution : 0.8,
          friction : 0.6,
          isStatic : false,

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.brightness=255;
      }
      display(){
       
        if(this.body.speed<5){
          push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        }
        else{
         push();
          World.remove(world,this.body);
          this.brightness=this.brightness-1;
          tint(255,this.brightness);
          rect(this.body,this.body.position.x,this.body.position.y,50,50);
         pop();
        }
      }
}
