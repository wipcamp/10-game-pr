var game = new Phaser.Game(800, 600, Phaser.AUTO, "game")
var main = { preload: preload, create: create, update: update, render: render }

game.state.add('main', main)
game.state.start('main')
var Hp = 1;
var score = 1;
var text = 0;
var pause;
var speed = 7;
var speedb;
var itemCooldown = 10;
var itemtimerun = -5;
var obstacleCooldown = 10;
var pickItem;
var ItemsheildGroup;
var ItemrunGroup;
var LogGroup;
var SpirteGroup;
var FloorGroup;
var boxspeed;
var timespeed = 150
var SystemOverlab = true;
var tileSize = 70;
var floor;
var probCliff = 0.4;
var jumpTimer = 0;
var jumpButton;
var rightmove = 67;
var leftmove = 40;
var Wall
var Wall2

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
	game.load.image('sky', 'images/Sky.png')
	game.load.image('clound', 'images/Clound.png')
	game.load.image('palace', 'images/Palace.png')
	game.load.image('wall', 'images/Wall.png')

}
function create() {
	background = game.add.tileSprite(0, 0, 2268, 1701, 'background')
	background.scale.setTo(0.355, 0.3999)
	background.fixedToCamera = true;
	
	game.time.events.loop(timespeed, updateScore, this);
	this.sky = this.game.add.tileSprite(0,
		0,
		this.game.width,
		this.game.cache.getImage('sky').height,
		'sky'
	);
	this.clound = this.game.add.tileSprite(0,
		30,
		this.game.width,
		this.game.cache.getImage('clound').height,
		'clound'
	);
	this.palace = this.game.add.tileSprite(0,
		110,
		this.game.width,
		this.game.cache.getImage('palace').height,
		'palace'
	);
	this.wall = this.game.add.tileSprite(0,
		this.game.height - this.game.cache.getImage('wall').height,
		this.game.width,
		this.game.cache.getImage('wall').height,
		'wall'
	);
	text = game.add.text(25, 25, 'Km : 0', { font: "40px Arial", fill: "#ffffff", align: "center" });




	game.physics.startSystem(Phaser.Physics.ARCADE);
	

	player = game.add.sprite(50, 300, 'player')
	player.scale.setTo(0.25, 0.25)



	itemCooldown = game.rnd.integerInRange(0, 240);


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
	obstacleCooldown = game.rnd.integerInRange(0, 150);
	obstacleCooldown2 = game.rnd.integerInRange(0, 400);
	obstacleCooldown3 = game.rnd.integerInRange(400, 500);

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
	Wall = game.add.group();
	Wall.enableBody = true;
	for (var i = 0; i < 24; i++) {
		walll = Wall.create(-20, 0, 'floor');
		walll.scale.setTo(0.25, 1000)
		walll.body.setSize(50, 1, 0, -15);
		walll.body.immovable = true;
		walll.body.velocity.x = 0

	}
	Wall2 = game.add.group();
	Wall2.enableBody = true;
	for (var i = 0; i < 24; i++) {
		walll2 = Wall2.create(800, 0, 'floor');
		walll2.scale.setTo(0.25, 1000)
		walll2.body.setSize(50, 1, 0, -15);
		walll2.body.immovable = true;
		walll2.body.velocity.x = 0

	}

	FloorGroup = game.add.group();
	FloorGroup.enableBody = true;

	for (var i = 0; i < 24; i++) {
		floor = FloorGroup.create(i * tileSize, 555, 'floor');
		floor.body.immovable = true;
		floor.body.velocity.x = -speed * 50;

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
	obstacleCooldown = game.rnd.integerInRange(200, 400);
	obstacleCooldown2 = game.rnd.integerInRange(100, 200);
	var position = game.rnd.integerInRange(750, 750);
	Log = LogGroup.getFirstExists(false);
	Log.reset(position, 500);
	Log.body.velocity.x = -speed * 50;
}
function spirteDeploy() {
	obstacleCooldown = game.rnd.integerInRange(200, 400);
	obstacleCooldown2 = game.rnd.integerInRange(100, 200);
	var position = game.rnd.integerInRange(750, 750);
	spirte = SpirteGroup.getFirstExists(false);
	spirte.reset(position, 500);
	spirte.body.velocity.x = -speed * 50;
}
function treecutDeploy() {
	obstacleCooldown = game.rnd.integerInRange(200, 400);
	obstacleCooldown2 = game.rnd.integerInRange(100, 200);
	var position = game.rnd.integerInRange(750, 750);
	treecut = TreecutGroup.getFirstExists(false);
	treecut.reset(position, 500);
	treecut.body.velocity.x = -speed * 50;
}
function rockDeploy() {
	obstacleCooldown = game.rnd.integerInRange(200, 400);
	obstacleCooldown2 = game.rnd.integerInRange(100, 200);
	var position = game.rnd.integerInRange(750, 750);
	rock = RockGroup.getFirstExists(false);
	rock.reset(position, 500);
	rock.body.velocity.x = -speed * 50;
}
function arrowDeploy() {
	obstacleCooldown3 = game.rnd.integerInRange(500, 600);
	var position = getRandomArbitrary4()
	arrow = ArrowGroup.getFirstExists(false);
	arrow.reset(750, position);
	arrow.body.velocity.x = -speed * 100;
}
function GenerateTerrain() {
	var i, delta = 0, block;
	for (i = 0; i < FloorGroup.length; i++) {
		if (FloorGroup.getAt(i).body.x <= -tileSize) {

			if (i < probCliff && !lastCliff && !lastVertical) {
				delta = Math.random() * ((2 - 1.5) + 1) + 1.5;
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
	var output = game.rnd.integerInRange(0, 2);
	if (output == 0) {
		itemsheildUp();

	} else if (output == 1)
		itemrunUp();
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



function updateScore() {
	score += 1;
	text.setText('Km : ' + score);
}
function HitsPlayer(player, obj) {
	if (Hp == 1) {
		Hp = Hp - 1;
		Checkhp()
	} else if (Hp == 2) {
		obj.kill();
		Hp = 1;
	}
}
function HitObj(player,obj){
	obj.kill();
}
function Checkhp() {
	if (Hp < 1) {
		player.kill();
	}
}
function getItemsheild(player, item) {
	item.kill();
	ActiveHpplus()
}
function getItemrun(player, item) {
	item.kill();
	itemtimerun = 200
	SystemOverlab = false;
	ActiveRunspped()
}
function ActiveRunspped() {
	speedb = boxspeed;
	boxspeed = speed;

	player

}
function ActiveHpplus() {
	Hp = 2;

}



function update() {


	this.sky.tilePosition.x -= speed * 0.5
	this.clound.tilePosition.x -=  speed* 0.6
	this.palace.tilePosition.x -= speed * 0.8
	this.wall.tilePosition.x -= speed * 0.9


	background.tilePosition.x -= speed;
	speed += 0.0010;//ความเร็วฉาก
	timespeed -= 0.000000010;
	player.body.velocity.x = 0

	GenerateTerrain();



	game.physics.arcade.collide(player, FloorGroup);
	game.physics.arcade.collide(player, Wall);
	game.physics.arcade.collide(player, Wall2);

	if (SystemOverlab) {
		game.physics.arcade.overlap(player, ItemsheildGroup, getItemsheild, null, this);
		game.physics.arcade.overlap(player, ItemrunGroup, getItemrun, null, this);
		game.physics.arcade.overlap(player, LogGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, TreecutGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, RockGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, ArrowGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, SpirteGroup, HitsPlayer, null, this);
	} else {
		game.physics.arcade.overlap(player, LogGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, TreecutGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, RockGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, ArrowGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, SpirteGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, ItemsheildGroup, getItemsheild, null, this);
		game.physics.arcade.overlap(player, ItemrunGroup, HitObj, null, this);
	}

	if (itemCooldown <= 0)
		itemSpawner();
	itemCooldown--;

	if (Hp < 1) {
		player.kill();
	}

	if (itemtimerun == 0) {
		speed = boxspeed
		itemtimerun--;
		if (jumpButton.isDown && game.time.now > jumpTimer) {
			player.body.velocity.y = -1100;
			jumpTimer = game.time.now + 1100;

		}
		rightmove = 67
		leftmove = 40
		SystemOverlab = true;
		timespeed = 1500
		player.body.collideWorldBounds = false;
	} else if (itemtimerun > 0) {
		timespeed = 1
		speed = 50
		itemtimerun--;
		player.body.velocity.x = speed
		if (jumpButton.isDown && game.time.now > jumpTimer) {
			player.body.velocity.y = -1100;
			jumpTimer = game.time.now + 1100;

		}
		player.body.collideWorldBounds = true;
		rightmove = 0
		leftmove = 0

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

	

	if (jumpButton.isDown && game.time.now > jumpTimer) {
		player.body.velocity.y = -1100;
		jumpTimer = game.time.now + 1100;
		
	}
	
	else if (cursors.right.isDown) {
		player.body.velocity.x = rightmove * speed;
	}
	else if (cursors.left.isDown) {
		player.body.velocity.x = -leftmove * speed;
	}


}

function render() {

}


