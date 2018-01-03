Tank = function(model,x,y){
//Frame
this.frame = new Sprite(game,x,y, model.frameSprite);
this.frame.anchor.setTo(model.frameAnchorX,model.frameAnchorY);
this.frame.scale.setTo(model.frameScale);
game.physics.p2.enable(this.frame);
this.frame.body.mass = 4;


//Tower 

this.tower = new Sprite(game,0,model.towerPointY, model.towerSprite);
this.tower.anchor.setTo(model.towerAnchorX,model.towerAnchorY);
this.frame.addChild(this.tower);



};






