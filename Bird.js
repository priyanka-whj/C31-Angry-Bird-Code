class Bird extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50); //calling parent class constructor function
        this.image = loadImage("sprites/bird.png");
    }

    display()
    {
        super.display(); //calling parent class display function
    }
};