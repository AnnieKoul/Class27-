class Chain {
    constructor(body1,body2){
    var options={
        bodyA:body1,
        bodyB:body2,
        length:30,
        stiffness:0.09
       }
       this.chain=Constraint.create(options)
       World.add(world,this.chain)
       
    }
    display(){
        var startA=this.chain.bodyA.position
        var startB=this.chain.bodyB.position
        stroke("red")
        strokeWeight("5")
        line(startA.x,startA.y,startB.x,startB.y)
    }
}
