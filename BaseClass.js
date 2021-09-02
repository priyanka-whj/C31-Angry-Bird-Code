class BaseClass //parent class
{
    constructor(x, y, width, height, angle)
    {
        var options = {'restitution': 1, 'friction': 1};

        this.bodyX = x;
        this.bodyY = y;
        this.bodyW = width;
        this.bodyH = height;
        this.bodyA = angle;

        this.body = Bodies.rectangle(this.bodyX, this.bodyY, this.bodyW, this.bodyH, options);
        this.image = loadImage("sprites/base.png");
        World.add(myWorld, this.body);
    }

    display()
    {
      
        push(); //store the previous settings of the canvas

        translate(this.body.position.x, this.body.position.y); //shifting the origin of the canvas to the (x,y) coordinate of the body/object
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.bodyW, this.bodyH);

        pop(); //apply the previous settings of the canvas
    }
};