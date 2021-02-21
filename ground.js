class Ground 
{

    constructor(xpos, ypos, width1, height1)
    {
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(xpos, ypos, width1, height1, options);
        this.width = width1
        this.height = height1
        World.add(world, this.body)
    }
    display()
    {
        var position = this.body.position;
        rectMode(CENTER);
        rect(position.x, position.y, this.width, this.height)
    }
}