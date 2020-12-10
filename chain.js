class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.5,
            length:300
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
display(){
    var posA=this.chain.bodyA.position
    var posB=this.chain.pointB
    strokeWeight(4)
    line(posA.x,posA.y,posB.x,posB.y)
}
}