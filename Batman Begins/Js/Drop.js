class Drop{
    constructor(x,y,width,height){
        //  shape of the body
        this.body = rect(x,y,width,height);
        this.height = 40;
        this.width = 5;
        this.x = x;
        this.y = y;
    }
    //make fall function to add speed 
    fall(speed){
        this.y += speed+10;
    }
  // display function to guve the x,y,radius and color
    display(){
        push();
        fill("darkblue");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
  }
