var config = {
	apiKey: "AIzaSyBi1_S5ogGhTEyywKHyPmrEmfuAq1E4qu4",
	authDomain: "wip-camp-game.firebaseapp.com",
	databaseURL: "https://wip-camp-game.firebaseio.com",
	storageBucket: "wip-camp-game.appspot.com",
	messagingSenderId: "444400029"
};


var game = new Phaser.Game(800, 600, Phaser.AUTO, "game")
var Menu = { preload: preloadMenu, create: createMenu, update: updateMenu }
var CutScene = { preload: preloadCutScene, create: createCutScence, update: updateCutScene }
var LeaderBoard = { preload: preloadleaderBoard, create: createleaderBoard, update: updateleaderBoard }
var Endcredit = { preload: preloadEndcredit, create: createEndcredit, update: updateEndcredit }
var Howtoplay = { preload: preloadHowtoplay, create: createHowtoplay, update: updateHowtoplay }
var Intro = { preload: preloadIntro, create: createIntro, update: updateIntro }
var GamePlayRam = { preload: preload, create: create, update: update, render: render }
var GamePlayGiant = { preload: preload2, create: create2, update: update2, render: render2 }
var GameOver = { preload: preloadGameOver, create: createGameOver, update: updateGameOver }

game.state.add('Menu', Menu)
game.state.add('Intro', Intro)
game.state.add('LeaderBoard', LeaderBoard)
game.state.add('Howtoplay', Howtoplay)
game.state.add('Endcredit', Endcredit)
game.state.add('GameOver', GameOver)
game.state.add('GamePlay1', GamePlayRam)
game.state.add('GamePlay2', GamePlayGiant)
game.state.add('CutScene', CutScene)

game.state.start('CutScene')

var player;
var Hp = 1;
var score = 1;
var text = 0;
var pause;
var speed = 5;
var speedobj
var speedb;
var itemCooldown = 10;
var itemtimerun = -5;
var obstacleCooldown = 10;
var pickItem;
var ItemsheildGroup;
var ItemrunGroup;
var InvisibleGroup;
var LogGroup;
var FloorGroup;
var RockGroup;
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
var nameplayer
var buttonStart
var countjump
var holdjump = false
var countwarningarrow = 10
var itemtimeinvisible = 0;
var countdeploy;
var countdeploy1;
var chek = true;
var gamebgm;
var menu;
var option;
var pause;
var boxspeedobj;
var speedobjdb;
var itemsheildtime;
var htplay = true
var gameoversound
var selectmenu;
var video;
var scoreshow = {
	name: '',
	score: 0
}
var scoreshow2 = {
	name: '',
	score: 0
}
var scoreshow3 = {
	name: '',
	score: 0
}
var scoreshow4 = {
	name: '',
	score: 0
}
var scoreshow5 = {
	name: '',
	score: 0
}
var monkeyscore = {
	score
}
var giantscore = {

}

////FunctionSystem/////


//////////////////////////////////////FunctionMenu/////////////////////////////////////////////////////

function gotomenu() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();

	game.paused = false;
	game.state.start("Menu");
	gamebgm.stop();
}
function gotomenubycredit() {
	game.state.start('Menu')
}
function gotoplay() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	game.paused = false;
	fullsize.kill();
	frames.kill();
	home.kill();
	resume.kill();
	ยุติ.kill();
	pause = game.add.button(720, 25, 'pause', topause, this);
}
function toGame() {
	if (selectmenu == 1) {
		buttonsound = game.add.audio('buttonsound');
		buttonsound.play();
		game.state.start('GamePlay1');
		gameoversound.stop();
	} else if (selectmenu == 2) {
		buttonsound = game.add.audio('buttonsound');
		buttonsound.play();
		game.state.start('GamePlay2');
		gameoversound.stop();
	}
}
function tocredit() {
	game.state.start('Endcredit')
	menu.stop();
	backd.kill();
	credits.kill();
	frames.kill();
	mute.kill();
}
function wentmenu() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	game.state.start('Menu');
	gameoversound.stop();
}
function tomenu() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	game.state.start('Menu');
}
function tofacebook() {
	FB.ui({
		method: 'share',
		display: 'popup',
		href: 'https://game.freezer.wip.camp/',
	}, function(response){});
}
function toranking() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	gameoversound.stop();
	game.state.start('LeaderBoard');
}
function toranking2() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	menu.stop();
	game.state.start('LeaderBoard');

}
function tosetmute() {
	if (!game.sound.mute) {
		game.sound.mute = true;
		unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
		unmute.scale.setTo(0.25);
		mute.kill();
	}
	else if (game.sound.mute) {
		game.sound.mute = false;
		mute = game.add.button(310, 190, 'mute', tosetmute, this)
		mute.scale.setTo(0.25);
		unmute.kill();
	}
}

////////////////////////////////////////////////Functionsetting System////////////////////////////////////////////////////////////////////

function tosetting() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();

	option.kill();
	
	frames = game.add.sprite(135, 60, 'frame')
	frames.scale.setTo(0.5, 0.5);
	credits = game.add.button(230, 260, 'credit', tocredit, this, 1, 0, 1);
	credits.scale.setTo(0.295);
	ลำดับ = game.add.button(450, 270, 'ลำดับ', toranking2, this, 1, 0, 1);
	ลำดับ.scale.setTo(0.25, 0.25)
	mute = game.add.button(310, 190, 'mute', tosetmute, this)
	mute.scale.setTo(0.25);
	mute.kill();
	unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
	unmute.scale.setTo(0.25);
	unmute.kill();
	backd = game.add.button(370, 345, 'back', todestroy, this)
	backd.scale.setTo(0.5, 0.5);
	fullsize = game.add.button(570, 335, 'full-size', gofull, this, 1, 0, 1);
	fullsize.scale.setTo(0.4, 0.4)
	if (!game.sound.mute) {
		mute = game.add.button(310, 190, 'mute', tosetmute, this)
		mute.scale.setTo(0.25);
	} else if (game.sound.mute) {
		unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
		unmute.scale.setTo(0.25);
	}
}
function todestroy() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	ลำดับ.kill();
	frames.kill();
	backd.kill();
	credits.kill();
	ลำดับ.kill()
	mute.kill();
	fullsize.kill();
	unmute.kill();

	option = game.add.button(715, 25, 'options', tosetting, this);
}
function topause() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();

	pause.kill();
	game.paused = true;
	

	frames = game.add.sprite(150, 60, 'frame')
	frames.scale.setTo(0.5, 0.5);
	ยุติ = game.add.sprite(250, 190, 'ยุติ')
	home = game.add.button(270, 300, 'home', gotomenu, this, 1, 0, 1);
	home.scale.setTo(0.25, 0.25)
	resume = game.add.button(460, 300, 'resume', gotoplay, this, 1, 0, 1);
	resume.scale.setTo(0.25, 0.25)
	fullsize = game.add.button(570, 315, 'full-size', gofull, this, 1, 0, 1);
	fullsize.scale.setTo(0.4, 0.4)
}

function tocheckselect() { //ยักษ์
	black = game.add.sprite(0, 0, 'black')

	choose1 = game.add.audio('choose1');
	choose1.play();
	giant.kill();
	giantbutton.kill();
	fullsize.kill();
	monkeybutton.kill();
	monkey.kill();

	BG = game.add.image(0, 0, 'BG');

	confirm1 = game.add.sprite(170, 60, 'confirm1');
	confirm1.scale.setTo(0.25, 0.25)

	pressno = game.add.button(225, 360, 'yesconfirm', Entername1, this, 1, 0, 1);
	pressno.scale.setTo(0.25, 0.25)

	pressback = game.add.button(425, 360, 'noconfirm', tobackselect, this, 1, 0, 1);
	pressback.scale.setTo(0.25, 0.25)

	monkeysaid = game.add.image(20, 450, 'monkeysaid');
	monkeysaid.scale.setTo(0.5, 0.5);
	selectmenu = 1;
}
function tocheckselect2() { //ลิง
	black = game.add.sprite(0, 0, 'black')


	giant.kill();
	giantbutton.kill();
	fullsize.kill();
	monkeybutton.kill();
	monkey.kill();
	choose2 = game.add.audio('choose2');
	choose2.play();

	BG = game.add.image(0, 0, 'BG');

	confirm2 = game.add.sprite(170, 30, 'confirm2');
	confirm2.scale.setTo(0.25, 0.25);

	pressno = game.add.button(225, 380, 'yesconfirm', Entername2, this, 1, 0, 1);
	pressno.scale.setTo(0.25, 0.25);

	pressback = game.add.button(425, 380, 'noconfirm', tobackselect, this, 1, 0, 1);
	pressback.scale.setTo(0.25, 0.25);

	giantsaid = game.add.image(20, 450, 'giantsaid');
	giantsaid.scale.setTo(0.5, 0.5)
	selectmenu = 2;
}
function tobackselect() {
	if (selectmenu == 1) {
		buttonsound = game.add.audio('buttonsound');
		buttonsound.play();
		black.kill();
		pressno.kill();
		BG.kill();
		confirm1.kill();
		pressback.kill();
		monkeysaid.kill();
	} else if (selectmenu == 2) {
		buttonsound = game.add.audio('buttonsound');
		buttonsound.play();
		black.kill();
		pressno.kill();
		BG.kill();
		confirm2.kill();
		pressback.kill();
		giantsaid.kill();
	}
	createIntro();
}
function checkselect() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	selectmenu = 1;
	tomenu()
}
function checkselect2() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	selectmenu = 2;
	tomenu()
}
function Entername1() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();

	pressno.kill();
	pressback.kill();
	monkeysaid.kill();

	game.add.plugin(PhaserInput.Plugin, PhaserInput.KeyboardOpen);
	var input = game.add.inputField(270, 300);
	ป้ายชื่อ = game.add.image(230, 220, 'ป้ายชื่อ');
	nameplayer = game.add.inputField(270, 300, {
		font: '40px Arial',
		fill: '#ffffff',
		fontWeight: 'bold',
		width: 280,
		padding: 8,
		// borderWidth: 1,
		// borderColor: '#000',
		backgroundColor: '#425A40',
		// borderRadius: 6,
		placeHolder: '  ใส่ชื่อผู้เล่น',
		type: PhaserInput.InputType.name
	});
	// game.add.tween(nameplayer).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
	pressenter = game.add.button(335, 380, 'yesconfirm', checkselect2, this, 1, 0, 1);
	pressenter.scale.setTo(0.25, 0.25);



}
function Entername2() {
	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();

	pressno.kill();
	pressback.kill();
	giantsaid.kill();
	game.add.plugin(PhaserInput.Plugin, PhaserInput.KeyboardOpen);
	var input = game.add.inputField(270, 300);
	ป้ายชื่อ = game.add.image(230, 220, 'ป้ายชื่อ');
	nameplayer = game.add.inputField(270, 300, {
		font: '40px Arial',
		fill: '#ffffff',
		fontWeight: 'bold',
		width: 280,
		padding: 8,
		// borderWidth: 1,
		// borderColor: '#000',
		backgroundColor: '#425A40',
		// borderRadius: 6,
		placeHolder: '  ใส่ชื่อผู้เล่น',
		type: PhaserInput.InputType.name
	});
	pressenter = game.add.button(335, 380, 'yesconfirm', checkselect, this, 1, 0, 1);
	pressenter.scale.setTo(0.25, 0.25);
}
////////////////////////////////////////////Functiongame////////////////////////////////////////////////

function obstacleSpawner() {
	var output = game.rnd.integerInRange(1, 3);
	if (output == 1) {
		logDeploy();
	} else if (output == 2) {
		treecutDeploy();
	} else if (output == 3) {
		rockDeploy();
	}
}
function obstacleSpawner2() {
	var output = game.rnd.integerInRange(1, 3);
	if (output == 1) {
		logDeploy();
	} else if (output == 2) {
		treecutDeploy();
	} else if (output == 3) {
		rockDeploy();
	}
}
function obstacleSpawner3() {
	var output = game.rnd.integerInRange(1, 3);
	if (output == 1) {
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
	arrow.body.velocity.x = -speedobj - 250;
}
function warningarrow() {
	countwarningarrow = 200;
	if (obstacleCooldown3 <= countwarningarrow) {
		text2.visible = true
		text2.setText('ระวัง...ธนูกำลังมา :' + obstacleCooldown3);
	} else
		text2.visible = false
}
function GenerateTerrain() {
	var i, delta = 0, block;
	for (i = 0; i < FloorGroup.length; i++) {
		if (FloorGroup.getAt(i).body.x <= -tileSize) {

			if (i < probCliff && !lastCliff && !lastVertical) {
				delta = Math.random() * ((2 - 1.5) + 1) + 1.5;
				lastCliff = true;
				lastVertical = false;
				if (obstacleCooldown <= 20) {
					obstacleCooldown = obstacleCooldown + 20;
					obstacleCooldown2 = obstacleCooldown2 + 20;
				}
				if (obstacleCooldown2 <= 20) {
					obstacleCooldown = obstacleCooldown + 20;
					obstacleCooldown2 = obstacleCooldown2 + 20;
				}
			}
			else {
				// if (obstacleCooldown <= 20) {
				// 	obstacleCooldown = obstacleCooldown + 20;
				// 	obstacleCooldown2 = obstacleCooldown2 + 20;
				// }
				// if (obstacleCooldown2 <= 20) {
				// 	obstacleCooldown = obstacleCooldown + 20;
				// 	obstacleCooldown2 = obstacleCooldown2 + 20;
				// }
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
	itemCooldown = game.rnd.integerInRange(400, 600);
	var position = game.rnd.integerInRange(750, 750);
	ItemInvisible = InvisibleGroup.getFirstExists(false);
	ItemInvisible.reset(position, getRandomArbitrary4());
	ItemInvisible.body.velocity.x = -speed * 20;
}
function itemrunUp() {
	itemCooldown = game.rnd.integerInRange(400, 600);
	var position = game.rnd.integerInRange(750, 750);
	Itemsheild = ItemsheildGroup.getFirstExists(false);
	Itemsheild.reset(position, getRandomArbitrary4());
	Itemsheild.body.velocity.x = -speed * 20;
}
function itemsheildUp() {
	itemCooldown = game.rnd.integerInRange(400, 600);
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
	if (countStart >= 30) {
		score += 1;
		text.setText('' + score);
		game.add.tween(text3).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
	} else if (countStart < 30) {
		text3.visible = true;
		countStart++
	}
}
function HitsPlayer(player, obj) {
	hitSound.play();
	if (Hp == 1) {
		Hp = Hp - 1;
		Checkhp()
	} else if (Hp == 2) {
		obj.kill();
		effectShelid.visible = false;
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
	itemtimeinvisible = 500
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
	speedobjdb = boxspeedobj;
	boxspeedobj = speedobj
}
function ActiveHpplus() {
	effectShelid.visible = true;
	Hp = 2;
}
function collisionHandler() {
	countjump = 2;
}
function invisiblesystem() {
	game.add.tween(player).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
}
function sped(aa) {
	aa.body.velocity.x = -speedobj
}
function checkobj(aa) {
	if (chek = false)
		aa.kill;
}
function gofull() {
	if (game.scale.isFullScreen) {
		game.scale.stopFullScreen();
	}
	else {
		game.scale.startFullScreen(false);
	}
}

///////////////////////////////////////////////////////////////CutScene//////////////////////////////////////////////////////////////////////////

function preloadCutScene() {
	game.load.video('CutScene', 'images/CutScene.mp4');
	game.load.image('pressskip', 'images/spaceskip.png')
}
function createCutScence() {
	video = game.add.video('CutScene');

	video.play(false);
	video.addToWorld(850, 530, 1, 1, 0.70, 0.70);
	pressskip = game.add.sprite(230, 550, "pressskip");
	pressskip.alpha = 0;
	pressskip.scale.setTo(0.5, 0.5)
	game.add.tween(pressskip).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}
function updateCutScene() {
	if (jumpButton.isDown) {
		game.state.start('Intro');
		video.stop();
	}
	game.time.events.loop(43000, gotogame, this)
}
function gotogame() {
	game.state.start('Intro')
	video.stop();
}

////////////////////////////////////////////////////Intro menu/////////////////////////////////////////////////////////

function preloadIntro() {

	game.load.image('giant', 'images/gianthead.png');
	game.load.image('monkey', 'images/monkeyhead.png');
	game.load.image('pressgiant', 'images/itemsheild.png')
	game.load.image('pressmonkey', 'images/itemrun.png')
	game.load.image('choose', 'images/หน้าเลือกตัวละคร.png')
	game.load.image('black', 'images/black.png')
	game.load.image('confirm2', 'images/monkeyblue.png');
	game.load.image('confirm1', 'images/ยักษ์ว้อยว้อยยย.png');
	game.load.spritesheet('yesconfirm', 'images/yesconfirm.png', 709, 259, 2);
	game.load.spritesheet('noconfirm', 'images/noconfirm.png', 702, 259, 2);
	game.load.image('monkeysaid', 'images/monkeysaid.png');
	game.load.image('giantsaid', 'images/giantsaid.png');
	game.load.image('BG', 'images/choosebg.png');
	game.load.image('ป้ายชื่อ', 'images/ป้ายชื่อ.png');

	game.load.audio('choose1', 'audio/จะไม่เลือกเรา.mp3');
	game.load.audio('choose2', 'audio/เลือกฝั่งนั้น.mp3');
	game.load.audio('buttonsound', 'audio/กรับ.mp3');

	game.load.image('full-size', 'images/full-size.png')

	game.load.spritesheet('giantbutton', 'images/เลือกฉันดีกว่า.png', 1093, 403, 2);
	game.load.spritesheet('monkeybutton', 'images/เลือกฉันสิ.png', 1057, 394, 2);
}
function createIntro() {


	choose = game.add.sprite(0, 0, 'choose');
	

	giant = game.add.button(535, 135, 'giant', tocheckselect, this);
	giantbutton = game.add.button(510, 330, 'giantbutton', tocheckselect, this, 1, 0, 1);
	giantbutton.scale.setTo(0.175, 0.175)

	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	fullsize = game.add.button(730, 535, 'full-size', gofull, this, 1, 0, 1);
	fullsize.scale.setTo(0.4, 0.4)

	monkey = game.add.button(157, 320, 'monkey', tocheckselect2, this);
	monkeybutton = game.add.button(140, 480, 'monkeybutton', tocheckselect2, this, 1, 0, 1);
	monkeybutton.scale.setTo(0.175, 0.175)

	





	fetchScore();


}

function fetchScore() {
	firebase.database()
		.ref('score').child('/' + "").once('value').then(function (data) {
			scoreshow.name = data.val().name
			scoreshow.score = data.val().score
		})
	firebase.database()
		.ref('score2').child('/' + "").once('value').then(function (data) {
			scoreshow2.name = data.val().name
			scoreshow2.score = data.val().score
		})
	firebase.database()
		.ref('score3').child('/' + "").once('value').then(function (data) {
			scoreshow3.name = data.val().name
			scoreshow3.score = data.val().score
		})
	firebase.database()
		.ref('score4').child('/' + "").once('value').then(function (data) {

			scoreshow4.name = data.val().name
			scoreshow4.score = data.val().score

		})
	firebase.database()
		.ref('score5').child('/' + "").once('value').then(function (data) {
			scoreshow5.name = data.val().name
			scoreshow5.score = data.val().score
		})
	firebase.database()
		.ref('MonkeySumScore').child('/' + "").once('value').then(function (data) {
			monkeyscore.score = data.val().ScoreSum
		})
	firebase.database()
		.ref('GiantSumScore').child('/' + "").once('value').then(function (data) {
			giantscore.score = data.val().ScoreSum

		})

}
function updateIntro() {
}

//////////////////////////////////////////////////////Menu/////////////////////////////////////////////////////////////////////////////////

function preloadMenu() {
	//ฉากฝั่งราม
	game.load.image('skyr', 'images/sky_r.png')
	game.load.image('cloudr', 'images/cloud_r.png')
	game.load.image('bushr', 'images/bush_r.png')
	game.load.image('palacer', 'images/palace_r.png')
	game.load.image('wallr', 'images/wall_r.png')
	game.load.image('logor', 'images/logo_r.png')
	//ฉากฝั่งทศ 
	this.game.load.image('skyt', 'images/sky_t.png')
	this.game.load.image('cloudt', 'images/cloud_t.png')
	this.game.load.image('busht', 'images/bush_t.png')
	this.game.load.image('palacet', 'images/palace_t.png')
	this.game.load.image('wallt', 'images/wall_t.png')
	game.load.image('logot', 'images/logo_t.png')

	game.load.image('floor', 'images/floor.png')
	game.load.audio('menu', 'audio/soundmenu.mp3');
	game.load.image('options', 'images/options.png')
	game.load.image('frame', 'images/frame.png')
	game.load.image('back', 'images/back.png')
	game.load.spritesheet('mute', 'images/mute.png')
	game.load.spritesheet('unmute', 'images/unmute.png')
	game.load.spritesheet('credit', 'images/ปุ่มทีมงาน.png', 471, 165)
	game.load.image('press', 'images/กดปุ่มเว้นวรรค.png')
	game.load.image('worker', 'images/worker.png')
	game.load.audio('buttonsound', 'audio/กรับ.mp3');
	game.load.spritesheet('ลำดับ', 'images/ลำดับ.png', 463, 187);
}

function createMenu() {
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	mute = game.add.button(310, 190, 'mute', tosetmute, this)
	mute.scale.setTo(0.25);
	mute.kill();
	unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
	unmute.scale.setTo(0.25);
	unmute.kill();

	menu = this.add.audio('menu');
	menu.play();
	menu.loopFull();

	if (selectmenu == 1) {
		var logo = game.add.sprite(800, 60, "logor");
		var tween = game.add.tween(logo);
		tween.to({ x: 150 }, 3000, 'Linear', true, 0)
		sky = game.add.tileSprite(0,
			0,
			game.width,
			game.cache.getImage('skyr').height,
			'skyr'
		);
		cloud = game.add.tileSprite(0,
			50,
			game.width,
			game.cache.getImage('cloudr').height,
			'cloudr'
		);
		bush = game.add.tileSprite(0,
			450,
			game.width,
			game.cache.getImage('bushr').height,
			'bushr'
		);
		palace = game.add.tileSprite(0,
			100,
			game.width,
			game.cache.getImage('palacer').height,
			'palacer'
		);
		wall = game.add.tileSprite(0,
			310,
			game.width,
			game.cache.getImage('wallr').height,
			'wallr'
		);
		floor = game.add.tileSprite(0,
			536,
			game.width,
			game.cache.getImage('floor').height,
			'floor'
		);
	} else if (selectmenu == 2) {
		var logo = game.add.sprite(800, 60, "logot");
		var tween = game.add.tween(logo);
		tween.to({ x: 150 }, 3000, 'Linear', true, 0)
		sky = game.add.tileSprite(0,
			0,
			game.width,
			game.cache.getImage('skyt').height,
			'skyt'
		);
		cloud = game.add.tileSprite(0,
			50,
			game.width,
			game.cache.getImage('cloudt').height,
			'cloudt'
		);
		bush = game.add.tileSprite(0,
			450,
			game.width,
			game.cache.getImage('busht').height,
			'busht'
		);
		palace = game.add.tileSprite(0,
			100,
			game.width,
			game.cache.getImage('palacet').height,
			'palacet'
		);
		wall = game.add.tileSprite(0,
			310,
			game.width,
			game.cache.getImage('wallt').height,
			'wallt'
		);
		floor = game.add.tileSprite(0,
			536,
			game.width,
			game.cache.getImage('floor').height,
			'floor'
		);
	}
	if (selectmenu == 1) {
		var logo = game.add.sprite(800, 60, "logor");
		var tween = game.add.tween(logo);
		tween.to({ x: 150 }, 3000, 'Linear', true, 0)
	} else if (selectmenu == 2) {
		var logo = game.add.sprite(800, 60, "logot");
		var tween = game.add.tween(logo);
		tween.to({ x: 150 }, 3000, 'Linear', true, 0)
	}

	press = game.add.sprite(150, 420, "press");
	press.alpha = 0;
	press.scale.setTo(0.175, 0.175)
	game.add.tween(press).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);

	option = game.add.button(715, 25, 'options', tosetting, this);

	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	name = nameplayer.value;
	firebase.database()
		.ref('prescore').child('/' + name)
		.set({
			name: name,
			score: score
		})




}
function updateMenu() {
	sky.tilePosition.x -= 0.5 + speed
	cloud.tilePosition.x -= 0.75 + speed
	bush.tilePosition.x -= 1.25 + speed
	palace.tilePosition.x -= 1.5 + speed
	wall.tilePosition.x -= 2 + speed
	floor.tilePosition.x -= 1.5 + speed;
	if (jumpButton.isDown) {
		if (selectmenu == 1) {
			if (htplay == true) {
				buttonsound = game.add.audio('buttonsound');
				buttonsound.play();
				game.state.start('Howtoplay')
			} else if (htplay == false) {
				buttonsound = game.add.audio('buttonsound');
				buttonsound.play();
				game.state.start('GamePlay1');
			}
		} else if (selectmenu == 2) {
			if (htplay == true) {
				buttonsound = game.add.audio('buttonsound');
				buttonsound.play();
				game.state.start('Howtoplay')
			} else if (htplay == false) {
				buttonsound = game.add.audio('buttonsound');
				buttonsound.play();
				game.state.start('GamePlay2');
			}
		}
	}
}

///////////////////////////////////////////////////////////////How to play////////////////////////////////////////////////////////////////////////

function preloadHowtoplay() {
	game.load.image('howtoplayMonkey', 'images/วิธีเล่นลิง.png')
	game.load.image('howtoplayGiant', 'images/วิธีเล่นยักษ์.png')
	game.load.image('press', 'images/กดปุ่มเว้นวรรค.png')
}
function createHowtoplay() {

	game.stage.backgroundColor = "#FFFFFF";
	press = game.add.sprite(150, 540, "press");
	press.alpha = 0;
	press.scale.setTo(0.175, 0.175)
	game.add.tween(press).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
	if (selectmenu == 1) {
		howtoplayMonkey = game.add.sprite(15, 0, 'howtoplayMonkey');
		howtoplayMonkey.scale.setTo(0.5, 0.5)
	} else if (selectmenu == 2) {
		howtoplayGiant = game.add.sprite(15, 0, 'howtoplayGiant');
		howtoplayGiant.scale.setTo(0.5, 0.5)
	}
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}
function updateHowtoplay() {
	if (jumpButton.isDown) {
		if (selectmenu == 1) {
			buttonsound = game.add.audio('buttonsound');
			buttonsound.play();
			game.state.start('GamePlay1');
			htplay = false
		} else if (selectmenu == 2) {
			buttonsound = game.add.audio('buttonsound');
			buttonsound.play();
			game.state.start('GamePlay2');
			htplay = false
		}
	}
}

///////////////////////////////////////////////////Game Play////////////////////////////////////////////////////////

function preload() {
	game.load.spritesheet('player', 'images/ตัวละครลิง.png', 786, 951, 2);
	game.load.image('floor', 'images/floor.png')
	game.load.image('floorback', 'images/floorback.png')
	game.load.image('เตรียมพร้อม', 'images/เตรียมพร้อม.png')

	game.load.image('rock', 'images/rock.png')
	game.load.image('arrow', 'images/arrow.png')
	game.load.image('treecut', 'images/treecut.png')
	game.load.image('log', 'images/log.png')
	game.load.image('itemsheild', 'images/itemsheild.png')
	game.load.image('itemrun', 'images/itemrun.png')
	game.load.image('wallblock', 'images/wallblock.png')
	game.load.image('invisible', 'images/invisible.png')
	game.load.image('effectShelid', 'images/effectShelid.png')
	game.load.image('โยชน์', 'images/โยชน์สีดำ.png')

	//ป้าย 
	this.game.load.image('sign', 'images/sign.png')
	this.game.load.image('flag', 'images/birdflag.png')
	//ฉากฝั่งราม
	this.game.load.image('skyr', 'images/sky_r.png')
	this.game.load.image('cloudr', 'images/cloud_r.png')
	this.game.load.image('bushr', 'images/bush_r.png')
	this.game.load.image('palacer', 'images/palace_r.png')
	this.game.load.image('wallr', 'images/wall_r.png')
	//โซนสอง
	this.game.load.image('treer', 'images/tree_r.png')
	this.game.load.image('houser', 'images/house_r.png')
	//ฉากลานกว้าง
	this.game.load.image('mountain', 'images/mountain.png')
	this.game.load.image('bstone', 'images/bstone.png')
	this.game.load.image('treedead', 'images/treedead.png')
	//blank
	this.game.load.image('blank', 'images/blank.png')
	this.game.load.image('blankflag', 'images/blankflag.png')

	//menupause
	game.load.image('pause', 'images/pausebutton.png')
	game.load.image('frame', 'images/frame.png')
	game.load.spritesheet('home', 'images/home.png', 553, 188);
	game.load.spritesheet('resume', 'images/ปุ่มเล่นต่อ.png', 455, 185);
	game.load.image('ยุติ', 'images/ยุติ.png')

	//audio
	game.load.audio('gamebgm', 'audio/gamebgm.mp3')
	game.load.audio('invisibleitem', 'audio/invisibleitem.mp3')
	game.load.audio('sheilditem', 'audio/shielditem.mp3')
	game.load.audio('itemx2', 'audio/speeditem.mp3')
	game.load.audio('hit', 'audio/Hit.mp3')
	game.load.audio('buttonsound', 'audio/กรับ.mp3');
}
function create() {
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	text = 0;
	speed = 5;
	speedobj = 450;
	countjump = 2;
	countdeploy1 = 500
	countdeploy = 400
	score = 1;
	Hp = 1
	itemCooldown = 10;
	itemtimerun = -5;
	obstacleCooldown = 10;
	timespeed = 150
	SystemOverlab = 1;
	tileSize = 70;
	floor;
	countStart = 20;
	probCliff = 0.4;

	game.time.events.loop(timespeed, updateScore, this)

	background = game.add.tileSprite(0, 0, 2268, 1701, 'blank')
	background.scale.setTo(0.355, 0.3999)
	background.fixedToCamera = true;

	this.skyr = this.game.add.tileSprite(0,
		0,
		this.game.width,
		this.game.cache.getImage('skyr').height,
		'skyr'
	);
	this.cloudr = this.game.add.tileSprite(0,
		50,
		this.game.width,
		this.game.cache.getImage('cloudr').height,
		'cloudr'
	);
	this.mountain = this.game.add.tileSprite(0,
		147,
		this.game.width,
		this.game.cache.getImage('blank').height,
		'blank'
	);
	this.flag = this.game.add.tileSprite(0,
		100,
		this.game.width,
		this.game.cache.getImage('blankflag').height,
		'blankflag'
	);
	this.bushr = this.game.add.tileSprite(0,
		450,
		this.game.width,
		this.game.cache.getImage('bushr').height,
		'bushr'
	);
	this.palacer = this.game.add.tileSprite(0,
		100,
		this.game.width,
		this.game.cache.getImage('palacer').height,
		'palacer'
	);
	this.wallr = this.game.add.tileSprite(0,
		310,
		this.game.width,
		this.game.cache.getImage('wallr').height,
		'wallr'
	);
	this.sign = this.game.add.tileSprite(0,
		415,
		this.game.width,
		this.game.cache.getImage('sign').height,
		'sign'
	);
	this.floorback = this.game.add.tileSprite(0,
		536,
		this.game.width,
		this.game.cache.getImage('floorback').height,
		'floorback'
	);

	โยชน์ = game.add.sprite(25, 25, 'โยชน์')
	โยชน์.scale.setTo(0.25, 0.25)

	text = game.add.text(175, 5, '', { font: "70px Number", fill: "#1b1a1a", align: "center" });

	text2 = game.add.text(25, 70, 'ระวังธนูกำลังจะมาใน  : ', { font: "60px Number", fill: "#DC143C", align: "center" });
	text2.visible = false;

	text3 = game.add.sprite(300, 450, 'เตรียมพร้อม')
	text3.visible = true;
	text3.scale.setTo(0.25, 0.25)

	hitSound = this.add.audio('hit');

	gamebgm = this.add.audio('gamebgm');

	itemx2 = this.add.audio('itemx2');
	invisibleitem = this.add.audio('invisibleitem');
	sheilditem = this.add.audio('sheilditem');
	menu.stop();
	gamebgm.play();
	gamebgm.loopFull();

	pause = game.add.button(720, 25, 'pause', topause, this);

	game.physics.startSystem(Phaser.Physics.ARCADE);

	player = game.add.sprite(200, 350, 'player')
	player.scale.setTo(0.125, 0.125)
	player.animations.add('walk');
	player.animations.play('walk', speed + 5, true);

	effectShelid = game.add.sprite(100, 310, 'effectShelid')
	effectShelid.scale.setTo(0.25, 0.25)
	effectShelid.anchor.set(0.5)
	effectShelid.visible = false;

	itemCooldown = game.rnd.integerInRange(500, 600);

	FloorGroup = game.add.group();
	FloorGroup.enableBody = true;

	for (var i = 0; i < 24; i++) {
		floor = FloorGroup.create(i * tileSize, 536, 'floor');
		floor.body.immovable = true;
		floor.body.velocity.x = -speedobj * 51.50;
	}
	lastFloor = floor;
	lastCliff = false;
	lastVertical = false;

	ItemrunGroup = game.add.group();
	ItemrunGroup.enableBody = true;
	ItemrunGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		itemrunObj = ItemrunGroup.create(750, getRandomArbitrary4(), 'itemrun');
		itemrunObj.exists = false;
		itemrunObj.visible = false;
		itemrunObj.checkWorldBounds = true;
		itemrunObj.events.onOutOfBounds.add(resetPostion, this);
		itemrunObj.body.setSize(50, 50, 25, 25);
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
		itemsheildObj.body.setSize(50, 50, 25, 25);
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
		invisibleObj.body.setSize(50, 50, 25, 25);
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
	TreecutGroup = game.add.group();
	TreecutGroup.enableBody = true;
	TreecutGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		treecutObj = TreecutGroup.create(700, 500, 'treecut');
		treecutObj.exists = false;
		treecutObj.visible = false;
		treecutObj.checkWorldBounds = true;
		treecutObj.events.onOutOfBounds.add(resetPostion, this);
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
		walll3 = Wall3.create(0, 670, 'floor');
		walll3.scale.setTo(1000, 0.25)
		walll3.body.setSize(50, 1, 0, -15);
		walll3.body.immovable = true;
		walll3.body.velocity.x = 0
	}

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable([player, FloorGroup, background], Phaser.Physics.ARCADE);
	game.physics.enable([effectShelid, background], Phaser.Physics.ARCADE);

	player.body.gravity.y = 2800;
	player.enableBody = true;
	player.body.collideWorldBounds = false;

	game.camera.follow(player);

	cursors = game.input.keyboard.createCursorKeys();
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}
function update() {
	game.physics.arcade.collide(player, FloorGroup, collisionHandler, null, this);
	game.physics.arcade.collide(RockGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(LogGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(RockGroup, FloorGroup, chek = true)

	//พื้นหลังเลื่อน
	this.skyr.tilePosition.x -= 0.0625 + speed
	this.cloudr.tilePosition.x -= 0.0625 + speed
	this.mountain.tilePosition.x -= 0.125 + speed
	this.flag.tilePosition.x -= 0.33 + speed
	this.bushr.tilePosition.x -= 0.25 + speed
	this.palacer.tilePosition.x -= 0.5 + speed
	this.wallr.tilePosition.x -= 1 + speed
	this.sign.tilePosition.x -= 1.25 + speed
	this.floorback.tilePosition.x -= 1 + speed

	speedobj += 0.0010
	speed += 0.0010;//ความเร็วฉาก
	timespeed -= 0.000010;
	player.body.velocity.x = 0

	//เปลี่ยนฉาก
	if (score >= 1100 & score <= 1101) {
		flashs()
		speed = 8;
		speedobj = 700;
		this.palacer.loadTexture('treer')
		this.wallr.loadTexture('houser')
	}
	if (score >= 3100 & score <= 3101) {
		flashs()
		speed = 8;
		speedobj = 700;
		this.flag.loadTexture('flag')
		this.mountain.loadTexture('mountain')
		this.bushr.loadTexture('bstone')
		this.palacer.loadTexture('treedead')
		this.wallr.kill()
		this.sign.kill()
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
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
	} else if (SystemOverlab == 2) {
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, LogGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, TreecutGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, RockGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, ArrowGroup, HitObj, null, this);
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
		speedobj = boxspeedobj
		SystemOverlab = 1;
		player.body.collideWorldBounds = false;
	} else if (itemtimerun > 0) {
		speed = 50
		speedobj = 900
		itemtimerun--;
		score = score + 1;
		player.body.collideWorldBounds = true;
	}

	if (itemtimeinvisible == 0) {  ////ส่วนของ ล่องหน
		SystemOverlab = 1;
		player.body.collideWorldBounds = false;
	} else if (itemtimeinvisible > 0) {
		player.alpha = itemtimeinvisible--;
		player.body.velocity.x = speed
		invisiblesystem();
		if (jumpButton.isUp) {
			holdjump = false
		}
	}

	if (itemsheildtime <= 0) {  ////โล่
		Hp = 1;
		effectShelid.visible = false;
	} else if (itemsheildtime > 0) {
		itemsheildtime--;
	}

	effectShelid.body.y = player.body.y - 55;
	effectShelid.body.x = player.body.x - 65;

	if (obstacleCooldown <= 0)
		obstacleSpawner();

	obstacleCooldown--;

	if (obstacleCooldown2 <= 0)
		obstacleSpawner2();

	obstacleCooldown2--;

	if (obstacleCooldown3 <= 0)
		obstacleSpawner3();
	obstacleCooldown3--;

	if (countdeploy <= 0 || countdeploy1 <= 0) {
		countdeploy = 100;
		countdeploy1 = 200;
	}

	warningarrow();

	RockGroup.forEachExists(sped, this, null)
	FloorGroup.forEachExists(sped, this, null)
	LogGroup.forEachExists(sped, this, null)
	TreecutGroup.forEachExists(sped, this, null)

	ItemrunGroup.forEachExists(sped, this, null)
	ItemsheildGroup.forEachExists(sped, this, null)
	InvisibleGroup.forEachExists(sped, this, null)

	RockGroup.forEachExists(checkobj, this, null)
	FloorGroup.forEachExists(checkobj, this, null)
	LogGroup.forEachExists(checkobj, this, null)
	TreecutGroup.forEachExists(checkobj, this, null)

	if (countdeploy <= 0 || countdeploy1 <= 0) {
		countdeploy = 100;
		countdeploy1 = 200;
	}
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

///////////////////////////////////////////////////////////GiantGamePlay/////////////////////////////////////////////////////////////////

function preload2() {
	game.load.spritesheet('player', 'images/ตัวละครยักษ์.png', 765, 957, 2);
	game.load.image('floor', 'images/floor.png')
	game.load.image('floorback', 'images/floorback.png')
	game.load.image('เตรียมพร้อม', 'images/เตรียมพร้อม.png')


	game.load.image('rock', 'images/rock.png')
	game.load.image('arrow', 'images/arrow.png')
	game.load.image('treecut', 'images/treecut.png')
	game.load.image('log', 'images/log.png')
	game.load.image('itemsheild', 'images/itemsheild.png')
	game.load.image('itemrun', 'images/itemrun.png')
	game.load.image('wallblock', 'images/wallblock.png')
	game.load.image('invisible', 'images/invisible.png')
	game.load.image('effectShelid', 'images/effectShelid.png')
	game.load.image('โยชน์', 'images/โยชน์สีดำ.png')

	//ป้าย 
	this.game.load.image('sign', 'images/sign.png')
	this.game.load.image('flag', 'images/birdflag.png')
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
	this.game.load.image('skyp', 'images/sky_p.png')
	this.game.load.image('cloudp', 'images/cloud_p.png')
	this.game.load.image('mountain', 'images/mountain.png')
	this.game.load.image('bstone', 'images/bstone.png')
	this.game.load.image('treedead', 'images/treedead.png')
	//blank 
	this.game.load.image('blank', 'images/blank.png')
	this.game.load.image('blankflag', 'images/blankflag.png')

	//menupause
	game.load.image('pause', 'images/pausebutton.png')
	game.load.image('frame', 'images/frame.png')
	game.load.spritesheet('home', 'images/home.png', 553, 188);
	game.load.image('ยุติ', 'images/ยุติ.png')
	game.load.spritesheet('resume', 'images/ปุ่มเล่นต่อ.png', 455, 185);

	//audio
	game.load.audio('gamebgm', 'audio/gamebgm.mp3')
	game.load.audio('invisibleitem', 'audio/invisibleitem.mp3')
	game.load.audio('sheilditem', 'audio/shielditem.mp3')
	game.load.audio('itemx2', 'audio/speeditem.mp3')
	game.load.audio('hit', 'sound/hit.mp3')
}
function create2() {
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	text = 0;
	speed = 5;
	speedobj = 450;
	countjump = 2;
	countdeploy1 = 500
	countdeploy = 400
	score = 1;
	Hp = 1
	itemCooldown = 10;
	itemtimerun = -5;
	obstacleCooldown = 10;
	timespeed;
	SystemOverlab = 1;
	tileSize = 70;
	floor;
	probCliff = 0.4;
	countStart = 20;

	timespeed = game.time.events.loop(150, updateScore, this)

	background = game.add.tileSprite(0, 0, 2268, 1701, 'blank')
	background.scale.setTo(0.355, 0.3999)
	background.fixedToCamera = true;

	this.skyt = this.game.add.tileSprite(0,
		0,
		this.game.width,
		this.game.cache.getImage('skyt').height,
		'skyt'
	);
	this.cloudt = this.game.add.tileSprite(0,
		50,
		this.game.width,
		this.game.cache.getImage('cloudt').height,
		'cloudt'
	);
	this.mountain = this.game.add.tileSprite(0,
		147,
		this.game.width,
		this.game.cache.getImage('blank').height,
		'blank'
	);
	this.flag = this.game.add.tileSprite(0,
		100,
		this.game.width,
		this.game.cache.getImage('blankflag').height,
		'blankflag'
	);
	this.busht = this.game.add.tileSprite(0,
		450,
		this.game.width,
		this.game.cache.getImage('busht').height,
		'busht'
	);
	this.palacet = this.game.add.tileSprite(0,
		100,
		this.game.width,
		this.game.cache.getImage('palacet').height,
		'palacet'
	);
	this.wallt = this.game.add.tileSprite(0,
		310,
		this.game.width,
		this.game.cache.getImage('wallt').height,
		'wallt'
	);
	this.sign = this.game.add.tileSprite(0,
		415,
		this.game.width,
		this.game.cache.getImage('sign').height,
		'sign'
	);
	this.floorback = this.game.add.tileSprite(0,
		536,
		this.game.width,
		this.game.cache.getImage('floorback').height,
		'floorback'
	);

	text = game.add.text(175, 5, '', { font: "70px Number", fill: "#1b1a1a", align: "center" });

	text2 = game.add.text(25, 70, 'ระวังธนูกำลังจะมาใน  : ', { font: "60px Number", fill: "#DC143C", align: "center" });
	text2.visible = false;

	text3 = game.add.sprite(300, 450, 'เตรียมพร้อม')
	text3.visible = true;
	text3.scale.setTo(0.25, 0.25)

	hitSound = this.add.audio('hit');

	gamebgm = this.add.audio('gamebgm');

	itemx2 = this.add.audio('itemx2');
	invisibleitem = this.add.audio('invisibleitem');
	sheilditem = this.add.audio('sheilditem');
	menu.stop();
	gamebgm.play();
	gamebgm.loopFull();

	pause = game.add.button(720, 25, 'pause', topause, this);

	game.physics.startSystem(Phaser.Physics.ARCADE);

	player = game.add.sprite(200, 350, 'player')
	player.scale.setTo(0.125, 0.125)
	player.animations.add('walk');
	player.animations.play('walk', speed + 5, true);

	effectShelid = game.add.sprite(100, 310, 'effectShelid')
	effectShelid.scale.setTo(0.25, 0.25)
	effectShelid.anchor.set(0.5)
	effectShelid.visible = false;

	itemCooldown = game.rnd.integerInRange(500, 600);

	FloorGroup = game.add.group();
	FloorGroup.enableBody = true;

	for (var i = 0; i < 24; i++) {
		floor = FloorGroup.create(i * tileSize, 536, 'floor');
		floor.body.immovable = true;
		floor.body.velocity.x = -speedobj * 51.50;
	}
	lastFloor = floor;
	lastCliff = false;
	lastVertical = false;

	ItemrunGroup = game.add.group();
	ItemrunGroup.enableBody = true;
	ItemrunGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		itemrunObj = ItemrunGroup.create(750, getRandomArbitrary4(), 'itemrun');
		itemrunObj.exists = false;
		itemrunObj.visible = false;
		itemrunObj.checkWorldBounds = true;
		itemrunObj.events.onOutOfBounds.add(resetPostion, this);
		itemrunObj.body.setSize(50, 50, 25, 25);
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
		itemsheildObj.body.setSize(50, 50, 25, 25);
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
		invisibleObj.body.setSize(50, 50, 25, 25);
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
	TreecutGroup = game.add.group();
	TreecutGroup.enableBody = true;
	TreecutGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		treecutObj = TreecutGroup.create(700, 500, 'treecut');
		treecutObj.exists = false;
		treecutObj.visible = false;
		treecutObj.checkWorldBounds = true;
		treecutObj.events.onOutOfBounds.add(resetPostion, this);
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
		walll3 = Wall3.create(0, 670, 'floor');
		walll3.scale.setTo(1000, 0.25)
		walll3.body.setSize(50, 1, 0, -15);
		walll3.body.immovable = true;
		walll3.body.velocity.x = 0
	}

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.enable([player, FloorGroup, background], Phaser.Physics.ARCADE);
	game.physics.enable([effectShelid, background], Phaser.Physics.ARCADE);

	player.body.gravity.y = 2800;
	player.enableBody = true;
	player.body.collideWorldBounds = false;

	game.camera.follow(player);

	cursors = game.input.keyboard.createCursorKeys();
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	โยชน์ = game.add.sprite(25, 25, 'โยชน์')
	โยชน์.scale.setTo(0.25, 0.25)
}
function update2() {
	game.physics.arcade.collide(player, FloorGroup, collisionHandler, null, this);
	game.physics.arcade.collide(RockGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(LogGroup, FloorGroup, chek = true)
	game.physics.arcade.collide(RockGroup, FloorGroup, chek = true)

	//พื้นหลังเลื่อน
	this.skyt.tilePosition.x -= 0.0625 + speed
	this.cloudt.tilePosition.x -= 0.0625 + speed
	this.mountain.tilePosition.x -= 0.125 + speed
	this.flag.tilePosition.x -= 0.33 + speed
	this.busht.tilePosition.x -= 0.25 + speed
	this.palacet.tilePosition.x -= 0.5 + speed
	this.wallt.tilePosition.x -= 1 + speed
	this.sign.tilePosition.x -= 1.25 + speed
	this.floorback.tilePosition.x -= 1 + speed

	speedobj += 0.0010
	speed += 0.0010;//ความเร็วฉาก
	timespeed -= 0.000010;

	//เปลี่ยนฉาก
	if (score >= 1100 & score < 1101) {
		flashs()
		speed = 8;
		speedobj = 700;
		this.palacet.loadTexture('treet')
		this.wallt.loadTexture('houset')
	}
	if (score >= 3100 & score <= 3101) {
		flashs()
		speed = 8;
		speedobj = 700;
		this.flag.loadTexture('flag')
		this.skyt.loadTexture('skyp')
		this.cloudt.loadTexture('cloudp')
		this.mountain.loadTexture('mountain')
		this.busht.loadTexture('bstone')
		this.palacet.loadTexture('treedead')
		this.wallt.kill()
		this.sign.kill()
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
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
	} else if (SystemOverlab == 2) {
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, LogGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, TreecutGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, RockGroup, HitObj, null, this);
		game.physics.arcade.overlap(player, ArrowGroup, HitObj, null, this);
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
		speedobj = boxspeedobj
		SystemOverlab = 1;
	} else if (itemtimerun > 0) {
		speed = 50
		speedobj = 900
		itemtimerun--;
		score = score + 1;
	}

	if (itemtimeinvisible == 0) {  ////ส่วนของ ล่องหน
		SystemOverlab = 1;
		player.body.collideWorldBounds = false;
	} else if (itemtimeinvisible > 0) {
		player.alpha = itemtimeinvisible--;
		player.body.velocity.x = speed
		invisiblesystem();
		if (jumpButton.isUp) {
			holdjump = false
		}
	}

	if (itemsheildtime <= 0) {  ////โล่
		Hp = 1;
		effectShelid.visible = false;
	} else if (itemsheildtime > 0) {
		itemsheildtime--;
	}

	effectShelid.body.y = player.body.y - 55;
	effectShelid.body.x = player.body.x - 65;

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
	LogGroup.forEachExists(sped, this, null)
	TreecutGroup.forEachExists(sped, this, null)

	ItemrunGroup.forEachExists(sped, this, null)
	ItemsheildGroup.forEachExists(sped, this, null)
	InvisibleGroup.forEachExists(sped, this, null)

	RockGroup.forEachExists(checkobj, this, null)
	FloorGroup.forEachExists(checkobj, this, null)
	LogGroup.forEachExists(checkobj, this, null)
	TreecutGroup.forEachExists(checkobj, this, null)

	if (countdeploy <= 0 || countdeploy1 <= 0) {
		countdeploy = 100;
		countdeploy1 = 200;
	}
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
function render2() {

}

/////////////////////////////////////////////////////////////////GameOver/////////////////////////////////////////////////////////////////

function preloadGameOver() {
	game.load.image('gameoverscreen1', 'images/gameoverscreen1.png')
	game.load.image('gameoverscreen2', 'images/gameoverscreen2.png')
	game.load.image('gameoverscreen3', 'images/gameoverscreen3.png')
	game.load.image('gameoverframe', 'images/gameoverframe.png')
	game.load.audio('gameoversound', 'audio/Sound Game Over.mp3')
	game.load.image('สิ้นชีพ', 'images/สิ้นชีพ.png')
	game.load.image('คะแนน', 'images/คะแนน.png')
	game.load.spritesheet('play', 'images/เริ่มใหม่.png', 475, 206);
	game.load.spritesheet('หน้าหลัก', 'images/หน้าหลัก.png', 638, 180);
	game.load.spritesheet('แบ่งปัน', 'images/แบ่งปัน.png', 463, 187);
	game.load.spritesheet('ลำดับ', 'images/ลำดับ.png', 463, 187);
	game.load.image('รายชื่อ', 'images/รายชื่อ.png')
	game.load.image('กระดานลำดับ', 'images/กระดานลำดับ.png')

}

var distance = 300;
var speed = 4;
var stars;

var max = 200;
var xx = [];
var yy = [];
var zz = [];

function createGameOver() {
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	if (game.renderType === Phaser.WEBGL) {
		max = 2000;
	}
	if (score <= 1100) {
		screen1 = game.add.sprite(0, 0, 'gameoverscreen1')
	} else if (score <= 3100) {
		screen2 = game.add.sprite(0, 0, 'gameoverscreen2')
	} else {
		screen3 = game.add.sprite(0, 0, 'gameoverscreen3')
	}

	gameoversound = this.add.audio('gameoversound');
	gameoversound.play();
	gameoversound.loopFull();

	gameoverframe = game.add.sprite(120, 7, 'gameoverframe')
	gameoverframe.scale.setTo(0.5, 0.5)
	คะแนน = game.add.sprite(290, 220, 'คะแนน')
	คะแนน.scale.setTo(0.5, 0.5)
	สิ้นชีพ = game.add.sprite(350, 130, 'สิ้นชีพ')
	สิ้นชีพ.scale.setTo(0.5, 0.5)

	scoretext = game.add.text(490, 220, '' + score, { font: "50px Number", fill: "#FFFFFF", align: "center" });

	play = game.add.button(270, 340, 'play', toGame, this, 1, 0, 1);
	play.scale.setTo(0.25, 0.25)
	หน้าหลัก = game.add.button(450, 350, 'หน้าหลัก', wentmenu, this, 1, 0, 1);
	หน้าหลัก.scale.setTo(0.25, 0.25)
	แบ่งปัน = game.add.button(270, 430, 'แบ่งปัน', tofacebook, this, 1, 0, 1);
	แบ่งปัน.scale.setTo(0.25, 0.25)
	ลำดับ = game.add.button(450, 430, 'ลำดับ', toranking, this, 1, 0, 1);
	ลำดับ.scale.setTo(0.25, 0.25)
	if (score <= 500) {
		funnytext = game.add.text(265, 280, "เจ้านี่มันอ่อนหัดจริงๆ!", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	} else if (score <= 1100) {
		funnytext = game.add.text(270, 280, "ไปฝึกวิชามาใหม่ไป๊!", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	} else if (score <= 2100) {
		funnytext = game.add.text(300, 280, "ฝีมือมิเลวเลยนี่!", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	} else if (score <= 3100) {
		funnytext = game.add.text(320, 280, "น่าประทับใจ!", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	} else if (score <= 4000) {
		funnytext = game.add.text(250, 280, "ช.. ช่างแข็งแกร่งยิ่งนัก!", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	}
	else {
		funnytext = game.add.text(250, 280, "เจ้าน่ะ.. ได้ตายไปแล้ว!", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	}
	gamebgm.stop();



	firebase.database()
		.ref('prescore').child('/' + name)
		.set({
			name: name,
			score: score
		})

	checkScoremoreless();

	SumScore();


}
function updateGameOver() {
	if (jumpButton.isDown) {
		if (selectmenu == 1) {
			game.state.start('Menu');
			video.stop();
		} else if (selectmenu == 2) {
			game.state.start('Menu');
			video.stop();

		}
	}
}


function SumScore() {
	if (selectmenu == 1) {
		monkeyscore.score += score;
		firebase.database()
			.ref('MonkeySumScore').child('/' + "")
			.set({
				ScoreSum: monkeyscore.score
			})
	} else if (selectmenu == 2) {
		giantscore.score += score;
		firebase.database()
			.ref('GiantSumScore').child('/' + "")
			.set({
				ScoreSum: giantscore.score
			})
	}
	fetchScore();
}
///////////////////////////////////////////////////////////////End Credit//////////////////////////////////////////////////////////////////////////
function preloadEndcredit() {
	game.load.video('EndCredit', 'images/EndCredit.mp4');
	game.load.image('pressskip', 'images/spaceskip.png')
}
function createEndcredit() {
	game.stage.backgroundColor = "#00000";

	video = game.add.video('EndCredit');

	video.play(true);
	video.addToWorld(810, 530, 1, 1, 0.65, 0.65);

	pressskip = game.add.sprite(230, 550, "pressskip");
	pressskip.alpha = 0;
	pressskip.scale.setTo(0.5, 0.5)
	game.add.tween(pressskip).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
	game.time.events.loop(19500, gotoplays, this)
}
function updateEndcredit() {
	if (jumpButton.isDown) {
		if (selectmenu == 1) {
			game.state.start('Menu');
			video.stop();
		} else if (selectmenu == 2) {
			game.state.start('Menu');
			video.stop();
		}
	}
}
function gotoplays() {
	game.state.start('Menu');
	video.stop();
}

///////////////////////////////////////////////////Leader Board/////////////////////////////////////////////
function preloadleaderBoard() {
	game.load.image('gameoverscreen1', 'images/gameoverscreen1.png')
	game.load.image('gameoverscreen2', 'images/gameoverscreen2.png')
	game.load.image('gameoverscreen3', 'images/gameoverscreen3.png')
	game.load.image('รายชื่อ', 'images/รายชื่อ.png')
	game.load.image('กระดานลำดับ', 'images/กระดานลำดับ.png')
	game.load.image('คะแนน', 'images/คะแนน.png')
	game.load.spritesheet('play', 'images/เริ่มใหม่.png', 475, 206);
	game.load.spritesheet('หน้าหลัก', 'images/หน้าหลัก.png', 638, 180);
}
function createleaderBoard() {
	if (score <= 1100) {
		screen1 = game.add.sprite(0, 0, 'gameoverscreen1')
	} else if (score <= 3100) {
		screen2 = game.add.sprite(0, 0, 'gameoverscreen2')
	} else {
		screen3 = game.add.sprite(0, 0, 'gameoverscreen3')
	}

	กระดานลำดับ = game.add.sprite(100, -60, 'กระดานลำดับ')
	กระดานลำดับ.scale.setTo(0.3, 0.325)
	คะแนน = game.add.sprite(470, 80, 'คะแนน')
	คะแนน.scale.setTo(0.4, 0.4)
	สิ้นชีพ = game.add.sprite(200, 70, 'รายชื่อ')
	สิ้นชีพ.scale.setTo(0.4, 0.4)
	play = game.add.button(530, 485, 'play', totogame, this, 1, 0, 1);
	play.scale.setTo(0.25, 0.25)
	หน้าหลัก = game.add.button(360, 490, 'หน้าหลัก', tomenu, this, 1, 0, 1);
	หน้าหลัก.scale.setTo(0.25, 0.25)

	scoresboard()

}

function updateleaderBoard() {

}
function scoresboard() {
	fetchScore();
	ชื่อ1 = game.add.text(200, 140, scoreshow.name, { font: "40px Myfont1", fill: "#ffffff", align: "center" });
	ชื่อ2 = game.add.text(200, 210, scoreshow2.name, { font: "40px Myfont1", fill: "#ffffff", align: "center" });
	ชื่อ3 = game.add.text(200, 280, scoreshow3.name, { font: "40px Myfont1", fill: "#ffffff", align: "center" });
	ชื่อ4 = game.add.text(200, 350, scoreshow4.name, { font: "40px Myfont1", fill: "#ffffff", align: "center" });
	ชื่อ5 = game.add.text(200, 420, scoreshow5.name, { font: "40px  Myfont1", fill: "#ffffff", align: "center" });
	คะแนนที่1 = game.add.text(470, 110, scoreshow.score, { font: "70px Number", fill: "#ffffff", align: "center" });
	คะแนนที่2 = game.add.text(470, 180, scoreshow2.score, { font: "70px Number", fill: "#ffffff", align: "center" });
	คะแนนที่3 = game.add.text(470, 250, scoreshow3.score, { font: "70px Number", fill: "#ffffff", align: "center" });
	คะแนนที่4 = game.add.text(470, 320, scoreshow4.score, { font: "70px Number", fill: "#ffffff", align: "center" });
	คะแนนที่5 = game.add.text(470, 390, scoreshow5.score, { font: "70px Number", fill: "#ffffff", align: "center" });

}
function checkScoremoreless() {
	var temp;
	if (score >= scoreshow.score) {
		firebase.database()
			.ref('score').child('/' + "")
			.set({
				name: name,
				score: score
			})
	}
	else if (score >= scoreshow2.score) {
		firebase.database()
			.ref('score2').child('/' + "")
			.set({
				name: name,
				score: score
			})
	}
	else if (score >= scoreshow3.score) {
		firebase.database()
			.ref('score3').child('/' + "")
			.set({
				name: name,
				score: score
			})
	}
	else if (score >= scoreshow4.score) {
		firebase.database()
			.ref('score4').child('/' + "")
			.set({
				name: name,
				score: score
			})
	}
	else if (score >= scoreshow5.score) {
		firebase.database()
			.ref('score5').child('/' + "")
			.set({
				name: name,
				score: score
			})
	}




	fetchScore();
}
function totogame() {
	if (selectmenu == 1) {
		buttonsound = game.add.audio('buttonsound');
		buttonsound.play();
		game.state.start('GamePlay1');
	} else if (selectmenu == 2) {
		buttonsound = game.add.audio('buttonsound');
		buttonsound.play();
		game.state.start('GamePlay2');
	}
}