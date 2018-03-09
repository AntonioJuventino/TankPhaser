var playState = {

	create: function(){
		this.stage.backgroundColor = "#000000";

		

		
		m6 = new Tank(models.m6,110,110);

		m6v2 = new Tank(models.m6,300,300);
		

	},




	update: function(){
		m6.update();
		m6v2.update();

		controller(m6);
		

		m6.tower.rotateForPoint(game.input.activePointer, 0.5);
		//m6v2.tower.rotation = game.physics.arcade.angleToPointer(m6v2.tower);
		game.debug.spriteInfo(m6.frame, 32, 32);
		//game.debug.spriteInfo(m6.tower, 32, 32);
		//m6.tower.rotateForAngle(90,0.1);
		m6v2.tower.rotateForPoint(m6.frame, 1);
		
		//console.log(game.physics.arcade.angleBetween(m6v2.tower,m6.frame) * 60);
	}

};