var fixedRect,movingRect;
 function setup() { 
   createCanvas(800,800);
    fixedRect=createSprite(400, 400, 50, 50);
     fixedRect.shapeColor="green";
      fixedRect.debug=true;
       movingRect=createSprite(500,600,50,100);
        movingRect.shapeColor="green";
         movingRect.debug=true;
         }
          function draw() {
             background("black");
              movingRect.x=World.mouseX;
               movingRect.y=World.mouseY;
                console.log(movingRect.x-fixedRect.x,movingRect.width/2+fixedRect.width/2);
                 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
                  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
                  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
                  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
                    fixedRect.shapeColor="red";
                     movingRect.shapeColor="red"; }
                     else{ fixedRect.shapeColor="green";
                      movingRect.shapeColor="green"; }
                       drawSprites(); }
