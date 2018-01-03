var bootState = {
	init: function(){
		this.input.maxPointers = 1;
		this.disableVisibilityChange = true;
		
	},

	preload: function(){
		this.load.image('prealoaderBar','../assets/images/preloaderBar.png');

	},

	create: function(){
		game.physics.startSystem(Phaser.Physics.P2JS);
		
		game.state.start('load');
	},

};