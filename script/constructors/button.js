ScaledButton = function(game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group) {  
		Phaser.Button.call(this, game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame, group);  
		this.scale.setTo(0.5, 0.5);
		this.anchor.setTo(0.5, 0.5);  
		game.add.existing(this);
	};
	ScaledButton.prototype = Object.create(Phaser.Button.prototype);
	ScaledButton.prototype.constructor = ScaledButton;




