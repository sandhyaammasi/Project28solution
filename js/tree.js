class tree
{
	constructor(x,y,w,h)
	{
		this.w=w;
		this.h=h;
		this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
		
		this.image=loadImage("images/tree.png")
		
		World.add(world, this.body)
		

	}
	display()
	{
			var posBottom=this.body.position;
			push()
			translate(posBottom.x, posBottom.y);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,0,this.w,this.h)
			pop()
			
	}

}