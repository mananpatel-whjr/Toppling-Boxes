class Ground {
    constructor() {
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(400,370,800,20,options);
        World.add(myWorld,this.body)
    }
    display() {
        rectMode(CENTER) 
        rect(this.body.position.x,this.body.position.y,800,20);
    }
}