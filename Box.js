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
        this.image = loadImage("images/enemy.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,this.width,this.height);
        fill("white");
    }
    
}