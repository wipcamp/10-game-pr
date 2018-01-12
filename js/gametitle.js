var gameTitle = function(game){}

gameTitle.prototype = {
  	create: function(){
		var backgroundtitle = this.game.add.tileSprite(0, 0, 2268, 1701, 'backgroundtitle')

		var gameTitle = this.game.add.text(200, 105, 'Logo game', { font: "80px Arial", fill: "#FF6600", align: "center" });
		var playButton = this.game.add.button(160,320,"play",this.playTheGame,this);
		playButton.anchor.setTo(-0.75,0.5);
		playButton.scale.setTo(0.5,0.5);

		
		var optiontitle = this.game.add.text(320, 400, 'option', { font: "50px Arial", fill: "#FF6600", align: "center" });
		var credittitle = this.game.add.text(320, 500, 'credit', { font: "50px Arial", fill: "#FF6600", align: "center" });
	},
	playTheGame: function(){
		this.game.state.start("GamePlaypre");
	}
}