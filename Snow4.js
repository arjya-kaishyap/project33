class Snow4 {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
}
this.image = loadImage("snow4.webp");
this.body = Bodies.circle(x,y,20, options);
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,20,20);
    }
}