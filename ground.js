class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true,
      stiffness:2 
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  
  show(){
    var pos=this.body.position;
    //obs.matter rotate já está no skecth.js
  //  Matter.Body.rotate(this.Body, angle);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    angle -=0.05;
    pop();

   
  }

 
   
}
