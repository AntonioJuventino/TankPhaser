var loadState = {


	setPreloadBar: function(){
		this.prealoadBar = null;
		this.prealoadBar = game.add.sprite(this.world.centerX, 
							this.world.centerY, 'prealoaderBar');
		this.prealoadBar.anchor.setTo(0.5,0.5);
		this.time.advancedTiming = true;
		this.load.setPreloadSprite(this.prealoadBar);
	},



	loadImages: function(){

		this.load.image('MainMenu_Button_StartGame_Unpressed',
		'../assets/images/MainMenuButtons/MainMenu_Button_StartGame_Unpressed.png');
		this.load.image('MainMenu_Button_StartGame_Hovered',
		'../assets/images/MainMenuButtons/MainMenu_Button_StartGame_Hovered.png');
		this.load.image('MainMenu_Button_StartGame_Pressed',
		'../assets/images/MainMenuButtons/MainMenu_Button_StartGame_Pressed.png');



		this.load.image('m6_frame','../assets/images/Tanks/M-6_frame.png');
		this.load.image('m6_tower','../assets/images/Tanks/M-6_tower.png');

		this.load.image('kv2','../assets/images/Tanks/KV-2_preview.png');



	},



	loadSound: function(){
		this.load.audio('mainTheme','../assets/music/MainTitle.mp3');
	},
	
	

	
	preload: function(){

		this.setPreloadBar();
		this.loadImages();
		this.loadSound();

		//SET PRELOAD BAR

		

		//LOAD ALL ASSETS

		


		

	},

	create: function(){
		game.state.start('mainMenu');
	},

};