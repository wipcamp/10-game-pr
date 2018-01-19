var game = new Phaser.Game(800, 600, Phaser.AUTO, "game")
var Menu = { preload: preloadMenu, create: createMenu, update: updateMenu }
var GamePlay = { preload: preload, create: create, update: update, render: render }
var GameOver = { preload: preloadGameOver, create: createGameOver, update: updateGameOver }


game.state.add('GameOver', GameOver)
game.state.add('GamePlay', GamePlay)
game.state.add('Menu', Menu)
game.state.start('Menu')

var Hp = 1;
var score = 1;
var text = 0;
var pause;
var speed = 7;
var speedobj = 700
var speedb;
var itemCooldown = 10;
var itemtimerun = -5;
var obstacleCooldown = 10;
var pickItem;
var ItemsheildGroup;
var ItemrunGroup;
var InvisibleGroup;
var LogGroup;
var SpirteGroup;
var FloorGroup;
var boxspeed;
var timespeed = 150
var countStart = 0;
var SystemOverlab = 1;
var tileSize = 70
var floor;
var probCliff = 0.4;
var jumpTimer = 0;
var jumpButton;
var Wall1
var Wall2
var wall3
var buttonStart
var countjump
var holdjump = false
var countwarningarrow = 10
var itemtimeinvisible = 0;
var countdeploy;
var countdeploy1;
var chek = true;
//ฉาก
var countzonemain = 1;
var countzone = 1;


//////////////////////////////////////////////////////Menu/////////////////////////////////////////////////////////////////////////////////
function preloadMenu() {
	game.load.image('backgroundtitle', 'images/backgroundtitle.png')
	game.load.image('play', 'images/play.png')
	game.load.audio('menu', 'sound/playgame.mp3');

}
function createMenu() {
	menu = this.add.audio('menu');
	menu.play();

	backgroundtitle = this.game.add.tileSprite(0, 0, 2268, 1701, 'backgroundtitle')
	backgroundtitle.fixedToCamera = true;
	buttonStart = game.add.button(430, 300, 'play', toGame, this);
	buttonStart.scale.setTo(0.5);
	buttonStart.anchor.set(0.5);
}
function updateMenu() {

}

function toGame() {
	game.state.start('GamePlay');
}


///////////////////////////////////////////////////Game Play////////////////////////////////////////////////////////
function preload() {
	game.load.image('background', 'images/BG.jpg')
	game.load.image('player', 'images/demon.png')
	game.load.image('floor', 'images/floor.png')
	game.load.image('pause', 'images/pause.png');
	game.load.image('rock', 'images/rock.png')
	game.load.image('arrow', 'images/arrow.png')
	game.load.image('treecut', 'images/treecut.png')
	game.load.image('log', 'images/log.png')
	game.load.image('spirte', 'images/spirte.png')
	game.load.image('itemsheild', 'images/itemsheild.png')
	game.load.image('itemrun', 'images/itemrun.png')
	game.load.image('wallblock', 'images/wallblock.png')
	game.load.image('invisible', 'images/invisible.png')
	game.load.image('play', 'images/play.png')
	//tempฉาก
	this.game.load.image('sky', 'images/Sky.png')
	this.game.load.image('cloud', 'images/Cloud.png')
	this.game.load.image('palace', 'images/Palace.png')
	this.game.load.image('bush', 'images/Bushes.png')
	this.game.load.image('wall', 'images/Wall.png')
	//โซนสอง
	this.game.load.image('tree', 'images/Trees.png')
	this.game.load.image('bighouse', 'images/Bighouse.png')
	//โซนสาม
	this.game.load.image('smallhouse', 'images/Smallhouse.png')

	//ฉากฝั่งราม
	this.game.load.image('skyr', 'images/sky_r.png')
	this.game.load.image('cloudr', 'images/cloud_r.png')
	this.game.load.image('bushr', 'images/bush_r.png')
	this.game.load.image('palacer', 'images/palace_r.png')
	this.game.load.image('wallr', 'images/wall_r.png')
	//โซนสอง
	this.game.load.image('treer', 'images/tree_r.png')
	this.game.load.image('houser', 'images/house_r.png')

	//ฉากฝั่งทศ
	this.game.load.image('skyt', 'images/sky_t.png')
	this.game.load.image('cloudt', 'images/cloud_t.png')
	this.game.load.image('busht', 'images/bush_t.png')
	this.game.load.image('palacet', 'images/palace_t.png')
	this.game.load.image('wallt', 'images/wall_t.png')
	//โซนสอง
	this.game.load.image('treet', 'images/tree_t.png')
	this.game.load.image('houset', 'images/house_t.png')

	//ฉากลานกว้าง
	this.game.load.image('bstone', 'images/bstone.png')
	this.game.load.image('treedead', 'images/treedead.png')
	this.game.load.image('sstone', 'images/sstone.png')

	//menupause
	game.load.image('framemenu', 'images/menu.jpg')

	game.load.audio('hit', 'sound/hit.mp3');
	game.load.audio('sheildlditem', 'audio/shielditem.mp3')
	game.load.audio('gamebgm', 'audio/gamebgm.mp3');
	game.load.audio('itemx2', 'audio/speeditem.mp3');
	game.load.audio('invisibleitem', 'audio/invisibleitem.mp3');



}
function create() {
	text = 0;
	speed = 5;
	speedobj = 450;
	countjump = 2;
	countdeploy1 = 600
	countdeploy = 500
	score = 1;
	Hp = 1
	itemCooldown = 10;
	itemtimerun = -5;
	obstacleCooldown = 10;
	timespeed = 150
	SystemOverlab = 1;
	tileSize = 70;
	floor;
	probCliff = 0.4;



	background = game.add.tileSprite(0, 0, 2268, 1701, 'background')
	background.scale.setTo(0.355, 0.3999)
	background.fixedToCamera = true;

	game.time.events.loop(timespeed, updateScore, this)

	this.sky = this.game.add.tileSprite(0,
		0,
		this.game.width,
		this.game.cache.getImage('sky').height,
		'sky'
	);
	this.cloud = this.game.add.tileSprite(0,
		30,
		this.game.width,
		this.game.cache.getImage('cloud').height,
		'cloud'
	);
	this.bush = this.game.add.tileSprite(0,
		220,
		this.game.width,
		this.game.cache.getImage('bush').height,
		'bush'
	);
	this.palace = this.game.add.tileSprite(0,
		50,
		this.game.width,
		this.game.cache.getImage('palace').height,
		'palace'
	);
	this.wall = this.game.add.tileSprite(0,
		220,
		this.game.width,
		this.game.cache.getImage('wall').height,
		'wall'
	);


	text = game.add.text(25, 25, 'Km : 0', { font: "40px Arial", fill: "#F0E68C", align: "center" });

	text2 = game.add.text(25, 70, 'arrow in coming : ', { font: "40px Arial", fill: "#DC143C", align: "center" });
	text2.visible = false;

	text3 = game.add.text(300, 400, 'GetReady... ', { font: "40px Arial", fill: "#DC143C", align: "center" });
	text3.visible = true;

	hitSound = this.add.audio('hit');
	gamebgm = this.add.audio('gamebgm');
	itemx2 = this.add.audio('itemx2');
	invisibleitem = this.add.audio('invisibleitem');
	sheilditem = this.add.audio('sheilditem');
	menu.stop();
	gamebgm.play();

	game.physics.startSystem(Phaser.Physics.ARCADE);

	player = game.add.sprite(80, 300, 'player')
	player.scale.setTo(0.25, 0.25)

	itemCooldown = game.rnd.integerInRange(500, 600);

	ItemrunGroup = game.add.group();
	ItemrunGroup.enableBody = true;
	ItemrunGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		itemrunObj = ItemrunGroup.create(750, getRandomArbitrary4(), 'itemrun');
		itemrunObj.exists = false;
		itemrunObj.visible = false;
		itemrunObj.checkWorldBounds = true;
		itemrunObj.events.onOutOfBounds.add(resetPostion, this);
		itemrunObj.scale.setTo(0.15, 0.15)
		itemrunObj.body.setSize(50, 70, 0, -15);
	}
	ItemsheildGroup = game.add.group();
	ItemsheildGroup.enableBody = true;
	ItemsheildGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		itemsheildObj = ItemsheildGroup.create(750, getRandomArbitrary4(), 'itemsheild');
		itemsheildObj.exists = false;
		itemsheildObj.visible = false;
		itemsheildObj.checkWorldBounds = true;
		itemsheildObj.events.onOutOfBounds.add(resetPostion, this);
		itemsheildObj.scale.setTo(0.15, 0.15)
		itemsheildObj.body.setSize(50, 70, 0, -15);
	}
	InvisibleGroup = game.add.group();
	InvisibleGroup.enableBody = true;
	InvisibleGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		invisibleObj = InvisibleGroup.create(750, getRandomArbitrary4(), 'invisible');
		invisibleObj.exists = false;
		invisibleObj.visible = false;
		invisibleObj.checkWorldBounds = true;
		invisibleObj.events.onOutOfBounds.add(resetPostion, this);
		invisibleObj.scale.setTo(0.15, 0.15)
		invisibleObj.body.setSize(50, 70, 0, -15);
	}

	obstacleCooldown = game.rnd.integerInRange(countdeploy, countdeploy1);
	obstacleCooldown2 = game.rnd.integerInRange(countdeploy, countdeploy1);
	obstacleCooldown3 = game.rnd.integerInRange(2000, 3000);


	LogGroup = game.add.group();
	LogGroup.enableBody = true;
	LogGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		logObj = LogGroup.create(700, 500, 'log');
		logObj.exists = false;
		logObj.visible = false;
		logObj.checkWorldBounds = true;
		logObj.events.onOutOfBounds.add(resetPostion, this);
		logObj.scale.setTo(0.25, 0.25)
		logObj.body.setSize(50, 70, 0, -15);
	}
	SpirteGroup = game.add.group();
	SpirteGroup.enableBody = true;
	SpirteGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		spirteObj = SpirteGroup.create(700, 500, 'spirte');
		spirteObj.exists = false;
		spirteObj.visible = false;
		spirteObj.checkWorldBounds = true;
		spirteObj.events.onOutOfBounds.add(resetPostion, this);
		spirteObj.scale.setTo(0.25, 0.25)
		spirteObj.body.setSize(50, 70, 0, -15);
	}
	TreecutGroup = game.add.group();
	TreecutGroup.enableBody = true;
	TreecutGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		treecutObj = TreecutGroup.create(700, 500, 'treecut');
		treecutObj.exists = false;
		treecutObj.visible = false;
		treecutObj.checkWorldBounds = true;
		treecutObj.events.onOutOfBounds.add(resetPostion, this);
		treecutObj.scale.setTo(0.25, 0.25)
		treecutObj.body.setSize(50, 70, 0, -15);
	}
	RockGroup = game.add.group();
	RockGroup.enableBody = true;
	RockGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		rockcutObj = RockGroup.create(700, 500, 'rock');
		rockcutObj.exists = false;
		rockcutObj.visible = false;
		rockcutObj.checkWorldBounds = true;
		rockcutObj.events.onOutOfBounds.add(resetPostion, this);
		rockcutObj.scale.setTo(0.25, 0.25)
		rockcutObj.body.setSize(50, 70, 0, -15);
	}
	ArrowGroup = game.add.group();
	ArrowGroup.enableBody = true;
	ArrowGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		arrowcutObj = ArrowGroup.create(700, getRandomArbitrary4(), 'arrow');
		arrowcutObj.exists = false;
		arrowcutObj.visible = false;
		arrowcutObj.checkWorldBounds = true;
		arrowcutObj.events.onOutOfBounds.add(resetPostion, this);
		arrowcutObj.scale.setTo(0.25, 0.25)
		arrowcutObj.body.setSize(50, 70, 0, -15);
	}
	Wall1 = game.add.sprite(60, 500, 'wallblock');
	Wall1.enableBody = true;
	Wall1.physicsBodyType = Phaser.Physics.ARCADE;
	game.physics.enable(Wall1, Phaser.Physics.ARCADE);
	Wall1.scale.setTo(0.25, 1000)
	Wall1.body.immovable = true;
	Wall1.visible = false;

	Wall3 = game.add.group();
	Wall3.enableBody = true;
	for (var i = 0; i < 24; i++) {
		walll3 = Wall3.create(0, 1200, 'busht');
		walll3.scale.setTo(1000, 0.25)
		walll3.body.setSize(50, 1, 0, -15);
		walll3.body.immovable = true;
		walll3.body.velocity.x = 0


	}

	FloorGroup = game.add.group();
	FloorGroup.enableBody = true;

	for (var i = 0; i < 24; i++) {
		floor = FloorGroup.create(i * tileSize, 540, 'floor');
		floor.body.immovable = true;
		floor.body.velocity.x = -speedobj * 51.50;
		floor.scale.setTo(0.45, 0.45)

	}
	lastFloor = floor;
	lastCliff = false;
	lastVertical = false;

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable([player, background], Phaser.Physics.ARCADE);


	player.body.gravity.y = 2000;
	player.enableBody = true;
	player.body.collideWorldBounds = false;

	game.camera.follow(player);


	cursors = game.input.keyboard.createCursorKeys();
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	pause_label = game.add.text(650, 25, 'Pause', { font: "40px Arial", fill: "#FF6600", align: "center" });
	pause_label.inputEnabled = true;
	pause_label.events.onInputUp.add(function () {
		game.paused = true;
		framemenu = game.add.sprite(170, 80, 'framemenu')
		playbutton = game.add.sprite(300, 300, 'play')
		playbutton.scale.setTo(0.5, 0.5)
		playbutton.inputEnabled = true;
	});
	jumpButton.isDown.add(function () {
		if (game.paused) {
			game.paused = false;
			playbutton.destroy();
		}
	});
}



function obstacleSpawner() {
	var output = game.rnd.integerInRange(0, 3);
	if (output == 0) {
		spirteDeploy();
	} else if (output == 1) {
		logDeploy();
	} else if (output == 2) {
		treecutDeploy();
	} else if (output == 3) {
		rockDeploy();
	}
}
function obstacleSpawner2() {
	var output = game.rnd.integerInRange(0, 3);
	if (output == 0) {
		spirteDeploy();
	} else if (output == 1) {
		logDeploy();
	} else if (output == 2) {
		treecutDeploy();
	} else if (output == 3) {
		rockDeploy();
	}
}
function obstacleSpawner3() {
	var output = game.rnd.integerInRange(0, 3);
	if (output == 0) {
		arrowDeploy()
	} else if (output == 1) {
		arrowDeploy()
	} else if (output == 2) {
		arrowDeploy()
	} else if (output == 3) {
		arrowDeploy()
	}
}
function logDeploy() {
	obstacleCooldown = game.rnd.integerInRange(countdeploy, countdeploy1);
	obstacleCooldown2 = game.rnd.integerInRange(countdeploy, countdeploy1);
	var position = game.rnd.integerInRange(750, 750);
	log = LogGroup.getFirstExists(false);
	log.reset(position, 475);
	log.body.velocity.x = -speedobj * 48;
	countdeploy1 -= 20
	countdeploy -= 10
}
function spirteDeploy() {
	obstacleCooldown = game.rnd.integerInRange(countdeploy, countdeploy1);
	obstacleCooldown2 = game.rnd.integerInRange(countdeploy, countdeploy1);
	var position = game.rnd.integerInRange(750, 750);
	spirte = SpirteGroup.getFirstExists(false);
	spirte.reset(position, 475);
	spirte.body.velocity.x = -speedobj * 49;
	countdeploy1 -= 15
	countdeploy -= 10
}
function treecutDeploy() {
	obstacleCooldown = game.rnd.integerInRange(countdeploy, countdeploy1);
	obstacleCooldown2 = game.rnd.integerInRange(countdeploy, countdeploy1);
	var position = game.rnd.integerInRange(750, 750);
	treecut = TreecutGroup.getFirstExists(false);
	treecut.reset(position, 475);
	treecut.body.velocity.x = -speedobj * 49;
	countdeploy1 -= 13
	countdeploy -= 10
}
function rockDeploy() {
	obstacleCooldown = game.rnd.integerInRange(countdeploy, countdeploy1);
	obstacleCooldown2 = game.rnd.integerInRange(countdeploy, countdeploy1);
	var position = game.rnd.integerInRange(750, 750);
	rock = RockGroup.getFirstExists(false);
	rock.reset(position, 475);
	rock.body.velocity.x = -speedobj * 48.5;
	countdeploy1 -= 17
	countdeploy -= 10
}
function arrowDeploy() {
	obstacleCooldown3 = game.rnd.integerInRange(600, 900);
	var position = getRandomArbitrary4()
	arrow = ArrowGroup.getFirstExists(false);
	arrow.reset(750, position);
	arrow.body.velocity.x = -speed * 150;
}
function warningarrow() {
	countwarningarrow = 200;
	if (obstacleCooldown3 <= countwarningarrow) {
		text2.visible = true
		text2.setText('arrow in coming :' + obstacleCooldown3);
	} else
		text2.visible = false
}
function GenerateTerrain() {
	var i, delta = 0, block;
	for (i = 0; i < FloorGroup.length; i++) {
		if (FloorGroup.getAt(i).body.x <= -tileSize) {

			if (i < probCliff && !lastCliff && !lastVertical) {
				delta = Math.random() * ((4 - 1.5) + 1) + 1.5;
				lastCliff = true;
				lastVertical = false;


			}


			else {
				lastCliff = false;
				lastVertical = false;
			}

			FloorGroup.getAt(i).body.x = lastFloor.body.x + tileSize + delta * tileSize * 1.5;
			lastFloor = FloorGroup.getAt(i);
			break;
		}
	}
}

function itemSpawner() {
	var output = game.rnd.integerInRange(0, 4);
	if (output == 0) {
		itemsheildUp();

	} else if (output == 1) {
		itemrunUp();
	} else if (output = 2) {
		iteminvisibleUp();
	}
}

function iteminvisibleUp() {
	itemCooldown = game.rnd.integerInRange(240, 400);
	var position = game.rnd.integerInRange(750, 750);
	ItemInvisible = InvisibleGroup.getFirstExists(false);
	ItemInvisible.reset(position, getRandomArbitrary4());
	ItemInvisible.body.velocity.x = -speed * 20;
}
function itemrunUp() {
	itemCooldown = game.rnd.integerInRange(240, 400);
	var position = game.rnd.integerInRange(750, 750);
	Itemsheild = ItemsheildGroup.getFirstExists(false);
	Itemsheild.reset(position, getRandomArbitrary4());
	Itemsheild.body.velocity.x = -speed * 20;
}
function itemsheildUp() {
	itemCooldown = game.rnd.integerInRange(240, 400);
	var position = game.rnd.integerInRange(750, 750);
	Itemrun = ItemrunGroup.getFirstExists(false);
	Itemrun.reset(position, getRandomArbitrary4());
	Itemrun.body.velocity.x = -speed * 20;
}

function resetPostion(obj) {
	obj.kill();
}
function getRandomArbitrary() { //สุ่มๆ
	var r = 0
	r++
	if (r == 1) {
		return getRandomArbitrary1();
	} else if (r == 2) {
		return getRandomArbitrary2();
	} else if (r == 3) {
		return getRandomArbitrary3();
	} else if (r == 4) {
		r = 0;
	}

}
function getRandomArbitrary3() {
	return Math.random() * (6000 - 4000 + 1) + 4000;//สุ่มแกน x 
}
function getRandomArbitrary1() {
	return Math.random() * (9000 - 7000 + 1) + 7000;//สุ่มแกน x 
}
function getRandomArbitrary2() {
	return Math.random() * (13000 - 10000 + 1) + 10000;//สุ่มแกน x 
}
function getRandomArbitrary4() {
	return Math.random() * (450 - 222 + 1) + 222;//สุ่มแกน  y
}

function flashs() {
	game.camera.flash(00000000, 500);
}

function updateScore() {
	
	if (countStart >= 60){
		score += 1;
		text.setText('Km : ' + score);
		game.add.tween(text3).to( { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);				
		
	}else if(countStart<60){
		text3.visible = true;
		countStart ++		
	}
}
function HitsPlayer(player, obj) {
	hitSound.play();
	if (Hp == 1) {
		Hp = Hp - 1;
		Checkhp()
	} else if (Hp == 2) {
		obj.kill();
		Hp = 1;
	}
}
function HitObj(player, obj) {
	obj.kill();
}
function Checkhp() {
	if (Hp < 1) {
		game.state.start('GameOver')

	}
}
function getItemsheild(player, item) {
	sheilditem.play();
	item.kill();
	ActiveHpplus()

}
function getIteminvisible(player, item) {
	invisibleitem.play();
	item.kill();
	SystemOverlab = 3;
	itemtimeinvisible = 200
	itemtimerun = -1
}
function getItemrun(player, item) {
	itemx2.play();
	item.kill();
	itemtimerun = 200
	ActiveRunspped()
	SystemOverlab = 2;
	itemtimeinvisible = -1
}
function ActiveRunspped() {
	speedb = boxspeed;
	boxspeed = speed;


}
function ActiveHpplus() {
	Hp = 2;

}

function collisionHandler() {

	countjump = 2;

}

function sped(aa) {
	aa.body.velocity.x = -speedobj
}

function checkobj(aa) {
	if (chek = false)
		aa.kill;
}


function update() {



	//พื้นหลัง

	game.physics.arcade.collide(player, FloorGroup, collisionHandler, null, this);
	game.physics.arcade.collide(RockGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(LogGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(SpirteGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(RockGroup, FloorGroup, chek = true)

	//พื้นหลัง
	this.sky.tilePosition.x -= 1 + speed
	this.cloud.tilePosition.x -= 2 + speed
	this.bush.tilePosition.x -= 4 + speed
	this.palace.tilePosition.x -= 5 + speed
	this.wall.tilePosition.x -= 5 + speed



	speedobj += 0.0010
	speed += 0.0010;//ความเร็วฉาก
	timespeed -= 0.000010;
	player.body.velocity.x = 0

	//เปลี่ยนฉาก
	if (countzone == 1) {
		countzonemain = 1
		this.sky.loadTexture('skyr')
		this.cloud.loadTexture('cloudr')
		this.bush.loadTexture('bushr')
		this.palace.loadTexture('palacer')
		this.wall.loadTexture('wallr')
	}
	if (countzone == 2) {
		countzonemain = 2
		this.sky.loadTexture('skyt')
		this.cloud.loadTexture('cloudt')
		this.bush.loadTexture('busht')
		this.palace.loadTexture('palacet')
		this.wall.loadTexture('wallt')
	}
	if (score >= 500 & score <= 501) {
		if (countzone == 1) {
			countzone = 10
			if (countzone == 10) {
				flashs()
				this.palace.loadTexture('treer')
				this.wall.loadTexture('houser')
			}
		}
		if (countzone == 2) {
			countzone = 20
			if (countzone == 20) {
				flashs()
				this.palace.loadTexture('treet')
				this.wall.loadTexture('houset')
			}
		}
	}
	if (score >= 1100 & score <= 1101) {
		if (countzone == 10) {
			countzone = 30
			if (countzone == 30) {
				flashs()
				this.bush.loadTexture('bstone')
				this.palace.loadTexture('treedead')
				this.wall.loadTexture('sstone')
			}
		}
		if (countzone == 20) {
			countzone = 30
			if (countzone == 30) {
				flashs()
				this.bush.loadTexture('bstone')
				this.palace.loadTexture('treedead')
				this.wall.loadTexture('sstone')
			}
		}
	}

	GenerateTerrain();

	game.physics.arcade.collide(player, Wall1);
	game.physics.arcade.collide(player, Wall2);

	if (SystemOverlab == 1) {
		game.physics.arcade.overlap(player, ItemsheildGroup, getItemsheild, null, this);
		game.physics.arcade.overlap(player, ItemrunGroup, getItemrun, null, this);
		game.physics.arcade.overlap(player, InvisibleGroup, getIteminvisible, null, this);
		game.physics.arcade.overlap(player, LogGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, TreecutGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, RockGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, ArrowGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, SpirteGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);

	} else if (SystemOverlab == 2) {
		game.physics.arcade.overlap(player, LogGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, TreecutGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, RockGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, ArrowGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, SpirteGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, ItemsheildGroup, getItemsheild, null, this);
		game.physics.arcade.overlap(player, ItemrunGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, InvisibleGroup, HitObj, null, this);


	} else if (SystemOverlab == 3) {
		game.physics.arcade.overlap(player, ItemsheildGroup, getItemsheild, null, this);
		game.physics.arcade.overlap(player, ItemrunGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, InvisibleGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);



	}

	if (itemCooldown <= 0)
		itemSpawner();
	itemCooldown--;



	if (itemtimerun == 0) { ////วิ่งเร็ว
		speed = boxspeed
		if (holdjump == false) {
			if (jumpButton.isDown && countjump > 0) {
				player.body.velocity.y = -900;
				countjump--
				holdjump = true
			}
		}
		if (jumpButton.isUp) {
			holdjump = false
		}
		timespeed = 1500
		SystemOverlab = 1;
		player.body.collideWorldBounds = false;
	} else if (itemtimerun > 0) {
		timespeed = 1
		speed = 50
		itemtimerun--;
		if (holdjump == false) {
			if (jumpButton.isDown && countjump > 0) {
				player.body.velocity.y = -900;
				countjump--
				holdjump = true
			}
		}
		if (jumpButton.isUp) {
			holdjump = false
		}
		player.body.collideWorldBounds = true;
	}


	if (itemtimeinvisible == 0) {  ////ส่วนของ ล่องหน

		if (holdjump == false) {
			if (jumpButton.isDown && countjump > 0) {
				player.body.velocity.y = -900;
				countjump--
				holdjump = true
			}
		}
		if (jumpButton.isUp) {
			holdjump = false
		}
		SystemOverlab = 1;
		player.body.collideWorldBounds = false;
	} else if (itemtimeinvisible > 0) {
		itemtimeinvisible--;
		player.body.velocity.x = speed
		if (holdjump == false) {
			if (jumpButton.isDown && countjump > 0) {
				player.body.velocity.y = -900;
				countjump--
				holdjump = true
			}
		}
		if (jumpButton.isUp) {
			holdjump = false
		}
	}





	if (obstacleCooldown <= 0)
		obstacleSpawner();

	obstacleCooldown--;

	if (obstacleCooldown2 <= 0)
		obstacleSpawner2();

	obstacleCooldown2--;

	if (obstacleCooldown3 <= 0)
		obstacleSpawner3();
	obstacleCooldown3--;

	warningarrow();

	RockGroup.forEachExists(sped, this, null)
	FloorGroup.forEachExists(sped, this, null)
	SpirteGroup.forEachExists(sped, this, null)
	LogGroup.forEachExists(sped, this, null)
	TreecutGroup.forEachExists(sped, this, null)

	RockGroup.forEachExists(checkobj, this, null)
	FloorGroup.forEachExists(checkobj, this, null)
	SpirteGroup.forEachExists(checkobj, this, null)
	LogGroup.forEachExists(checkobj, this, null)
	TreecutGroup.forEachExists(checkobj, this, null)

	if (holdjump == false) {
		if (jumpButton.isDown && countjump > 0) {
			player.body.velocity.y = -900;
			countjump--
			holdjump = true
		}
	}
	if (jumpButton.isUp) {
		holdjump = false
	}
}





function render() {

}

/////////////////////////////////////////////////////////////////GameOver/////////////////////////////////////////////////////////////////

function preloadGameOver() {
	game.load.image('backgroundtitle', 'images/backgroundtitle.png')
	game.load.image('play', 'images/play.png')
	game.load.image('gameover', 'images/gameover.png')
	game.load.image('menu', 'images/menubutton.png')
}
function createGameOver() {

	backgroundtitle = this.game.add.tileSprite(0, 0, 2268, 1701, 'backgroundtitle')

	backgroundtitle.fixedToCamera = true;
	buttonStart = game.add.button(400, 300, 'play', toGame, this);
	buttonStart.scale.setTo(0.5);
	buttonStart.anchor.set(0.5);

	buttonmenu = game.add.button(370, 400, 'menu', tomenu, this);
	buttonmenu.scale.setTo(0.125);


	gameOverTitle = this.game.add.sprite(50, 50, "gameover");
	gameOverTitle.anchor.setTo(-0.25, 0.25);
	gameOverTitle.scale.setTo(0.125, 0.125);

	gamebgm.stop();

	if (countzonemain == 1) {
		countzone = 1
	}
	if (countzonemain == 2) {
		countzone = 2
	}

}
function updateGameOver() {

}

function toGame() {
	game.state.start('GamePlay');
}
function tomenu() {
	game.state.start('Menu');
}