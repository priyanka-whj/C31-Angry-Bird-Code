class Slingshot
{
    constructor(b1, p2)
    {
        var options = {'bodyA': b1, 'pointB': p2, 'stiffness': 0.04, 'length': 10};
        this.sling = Constraint.create(options);
        World.add(myWorld, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
            strokeWeight(2);
            line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
        }
    }
}