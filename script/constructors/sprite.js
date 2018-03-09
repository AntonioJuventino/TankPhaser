Sprite = function(game, x, y, key, frame) {  
		Phaser.Sprite.call(this,game, x, y, key, frame);
		game.add.existing(this);
	};
	Sprite.prototype = Object.create(Phaser.Sprite.prototype);
	Sprite.prototype.constructor = Sprite;

Sprite.prototype.rotateForAngle = function(a,b){
	
	var c = this.angle-a;
	//180 < c ? c -= 0.1 :-180 > c && (c += -180);
	c >=-b-.5&&c<=b+.5?this.angle=a:c>b+.5?
	this.angle-=b:c<-b-.5&&(this.angle+=b)

};



Sprite.prototype.rotateForPoint = function(a,b){
	var c = game.physics.arcade.angleBetween(this, a) *60;
	this.rotateForAngle(c,b)
};
