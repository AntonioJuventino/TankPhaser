var playState = {

	create: function(){
		this.stage.backgroundColor = "#00FF4F";



		
		m6 = new Tank(models.m6,110,110);

		m6v2 = new Tank(models.m6,300,300);
		
		

		


		

	},




	update: function(){
		
		//m6.tower.rotation+=0.01;
		m6.frame.body.rotation-=0.01;
		m6.frame.body.reverse(80);
		m6v2.frame.body.rotation +=0.01;
		m6v2.frame.body.reverse(80);

	},

};