class Bird extends BaseClass
{
    constructor (xpos, ypos)
    {
        super(xpos, ypos, 50, 50);
        this.image = loadImage ("sprites/bird.png");   
     }
     display()
         {
          var position = this.body.position;
          position.x = mouseX;
          position.y = mouseY;
          super.display();
         }
     
    }