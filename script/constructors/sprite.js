Sprite = function(game, x, y, key, frame) {  
		Phaser.Sprite.call(this,game, x, y, key, frame);
		game.add.existing(this);
	};
	Sprite.prototype = Object.create(Phaser.Sprite.prototype);
	Sprite.prototype.constructor = Sprite;




