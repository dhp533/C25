class Log extends BaseClass
{
    constructor (xpos, ypos, height, angle)
    {
       super(xpos, ypos, 20, height)
        Matter.Body.setAngle(this.body, angle);
        this.image = loadImage ("sprites/wood2.png"); 
      
    }
}