class Box{
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        this.image = loadImage("images/enemy.png");
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            imageMode(CENTER);
            image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
          pop();
        }
      }
    
}