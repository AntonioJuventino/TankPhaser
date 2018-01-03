

var game = new Phaser.Game (640,480,Phaser.AUTO);




game.state.add ('boot', bootState);
game.state.add ('load', loadState);
game.state.add ('mainMenu', mainMenuState);
game.state.add ('play', playState);
game.state.add ('pause', pauseState);


game.state.start('boot');