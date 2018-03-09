Tank = function(model,x,y){

this.type = model.type;
//Frame
this.frame = new Sprite(game,x,y, model.frameSprite);
this.frame.anchor.setTo(model.frameAnchorX,model.frameAnchorY);
this.frame.scale.setTo(model.scale);




resizePolygon(model.physics, model.physics +'Scaled', model.frameSprite, model.scale);


				//FRAME

game.physics.p2.enable(this.frame,false);
this.frame.body.clearShapes();
this.frame.body.loadPolygon(model.physics + 'Scaled', model.frameSprite);
this.frame.body.angle = -90;






				//Tower 

this.tower = new Sprite(game,this.frame.x ,this.frame.y + model.towerPointY, model.towerSprite);
this.tower.scale.setTo(model.scale);
this.tower.anchor.setTo(model.towerAnchorX,model.towerAnchorY);


 // Canon

 //this.cannon = 



				//Movement
this.frame.body.damping = 0.7;
this.frame.body.mass = model.mass;

this.speed = model.speed;
this.maxSpeed = model.maxSpeed;
this.speedStep = model.speedStep;
this.maxBackSpeed = model.maxBackSpeed;
this.rotateSpeed = model.rotateSpeed;




		//init


};




Tank.prototype.update = function(){
	var normal

	this.tower.x =  this.frame.x; 
	this.tower.y = this.frame.y;
};


Tank.prototype.drive = function(){
		if (this.speed != 0) {
			if(this.speed > 0){
				this.frame.body.reverse(this.speed);
			} else if(this.speed < 0 ){
				this.frame.body.reverse(this.speed);
			}
		}
};


Tank.prototype.accelerate = function() {
		if(this.speed <0){
		this.speed += this.speed < this.maxSpeed ? this.speedStep *8 : 0;
		}
		else if(this.speed >= 10){
			this.speed += this.speed < this.maxSpeed ? this.speedStep *1.5 : 0;
		}

		else if(this.speed >= 20){
			this.speed += this.speed < this.maxSpeed ? this.speedStep *2 : 0;
		}

		else{
			this.speed += this.speed < this.maxSpeed ? this.speedStep : 0;
		}
		
};


Tank.prototype.backDraft = function(){
		if(this.speed > 0){
		this.speed -= this.speed > this.maxBackSpeed ? this.speedStep *8 : 0;
		}else{
		this.speed -= this.speed > this.maxBackSpeed ? this.speedStep : 0;
		}
		
};

Tank.prototype.stopAcceleration = function(){
		if(this.speed > 0){
			this.speed -= this.speed > 0 ? this.speedStep *4 : 0;
		}
		else if(this.speed < 0){
			this.speed += this.speed < 0 ? this.speedStep *4 : 0;
			}
};

	


Tank.prototype.shot = function(){
	this.cannon.fire();
};






