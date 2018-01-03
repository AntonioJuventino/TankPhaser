var mainMenuState = {
	
	create: function(){
		this.stage.backgroundColor = "#00D6FF";
		
		startGame = new ScaledButton(game,game.world.centerX ,game.world.centerY,
			'MainMenu_Button_StartGame_Unpressed',this.startGame, this);

		//var mainTheme = game.sound.play('mainTheme');
		//mainTheme.loop = true;
    	
	},


	update: function(){



	},


	startGame:function(){
		game.state.start('play');

	},

};