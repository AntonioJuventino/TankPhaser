controller = function(tank){
		tank.drive();
		tank.frame.body.setZeroVelocity();

		if (game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
    	tank.frame.body.rotateLeft(tank.rotateSpeed);
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
    	tank.frame.body.rotateRight(tank.rotateSpeed);
    } 
    else
    {
    	tank.frame.body.setZeroRotation();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.W))
    {		
    	tank.accelerate();
    	
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.S))
    {	
    	tank.backDraft();
    }

    else{
		tank.stopAcceleration();
    }


     if (game.input.activePointer.isDown)
    {
        //tank.shot();
    }
};