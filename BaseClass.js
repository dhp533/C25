class BaseClass
{

  constructor(xpos,ypos,width1,height1)
  {
    var options={
        density: 1,
        friction: 1.2,
        restitution:0.7
    }

    this.body = Bodies.rectangle(xpos,ypos,width1,height1,options);
    this.width = width1;
    this.height = height1;
    this.image = loadImage ("sprites/wood1.png");
    World.add(world,this.body)
  }

  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
      imageMode(CENTER)
      translate(position.x,position.y);
      stroke("brown");
      strokeWeight(3);
      rotate(angle)
      image(this.image,0,0,this.width,this.height)
      pop();
  }


}