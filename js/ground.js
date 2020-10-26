class ground
{
	constructor(x,y,w,h)
	{
	
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , {isStatic:true}	);
 		World.add(world, this.body);

	}
	display()
	{
				
			push()
			var groundPos=this.body.position;	
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}