var game = new Phaser.Game(800, 600, Phaser.AUTO, "game")
var Menu = { preload: preloadMenu, create: createMenu, update: updateMenu }
var CutScene = { preload: preloadCutScene, create: createCutScence, update: updateCutScene }
var Endcredit = { preload: preloadEndcredit, create: createEndcredit, update: updateEndcredit }
var Howtoplay = { preload: preloadHowtoplay, create: createHowtoplay, update: updateHowtoplay }
var Intro = { preload: preloadIntro, create: createIntro, update: updateIntro }
var GamePlayRam = { preload: preload, create: create, update: update, render: render }
var GamePlayGiant = { preload: preload2, create: create2, update: update2, render: render2 }
var GameOver = { preload: preloadGameOver, create: createGameOver, update: updateGameOver }



game.state.add('Menu', Menu)
game.state.add('Intro', Intro)
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
var SpirteGroup;
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
var buttonStart
var countjump
var holdjump = false
var countwarningarrow = 10
var itemtimeinvisible = 0;
var countdeploy;
var countdeploy1;
var chek = true;
var name1;
var name2;
var name3;
var name4;
var name5;
var name6;
var name7;
var gamebgm;
var menu;
var option;
var pause;
var coutinues;
var boxspeedobj;
var speedobjdb;
var itemsheildtime;
var htplay = true

//ฉาก
var countzonemain = 1;
var countzone = 1;
var skyt;
var cloudt;
var busht
var palacet
var wallt
var gameoversound
var selectmenu;

var video;




////FunctionSystem/////


//////////////////////////////////////FunctionMenu/////////////////////////////////////////////////////
function gotomenu() {
	game.paused = false;
	game.state.start("Menu");
	gamebgm.stop();
	console.log("asdasdasdsad")
}
function gotomenubycredit() {
	game.state.start('Menu')

}
function gotoplay() {
	game.paused = false;
	frames.kill();
	home.kill();
	resume.kill();
	ยุติ.kill();
	pause = game.add.button(720, 25, 'pause', topause, this);
	pause.scale.setTo(0.25, 0.25)
}
function topause() {
	pause.kill();
	game.paused = true;
	frames = game.add.sprite(150, 60, 'frame')
	frames.scale.setTo(0.5, 0.5);
	ยุติ = game.add.sprite(250, 190, 'ยุติ')
	ยุติ.scale.setTo(0.25, 0.25);
	home = game.add.button(270, 300, 'home', gotomenu, this, 1, 0, 1);
	home.scale.setTo(0.25, 0.25)
	resume = game.add.button(460, 300, 'resume', gotoplay, this, 1, 0, 1);
	resume.scale.setTo(0.25, 0.25)


}

function toGame() {
	if (selectmenu == 1) {
		game.state.start('GamePlay1');
		gameoversound.stop();
	} else if (selectmenu == 2) {
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
	game.state.start('Menu');
	gameoversound.stop();

}
function tomenu() {
	game.state.start('Menu');

}
function tofacebook() {

}

function toranking() {

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
	option.kill();
	frames = game.add.sprite(135, 60, 'frame')
	frames.scale.setTo(0.5, 0.5);
	credits = game.add.button(330, 260, 'credit', tocredit, this, 1, 0, 1);
	credits.scale.setTo(0.295);

	mute = game.add.button(310, 190, 'mute', tosetmute, this)
	mute.scale.setTo(0.25);
	mute.kill();
	unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
	unmute.scale.setTo(0.25);
	unmute.kill();
	backd = game.add.button(370, 345, 'back', todestroy, this)
	backd.scale.setTo(0.5, 0.5);
	if (!game.sound.mute) {
		mute = game.add.button(310, 190, 'mute', tosetmute, this)
		mute.scale.setTo(0.25);
	} else if (game.sound.mute) {
		unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
		unmute.scale.setTo(0.25);
	}


}
function todestroy() {
	console.log("in to destroy");
	frames.kill();
	backd.kill();
	credits.kill();
	mute.kill();
	unmute.kill();



	option = game.add.button(720, 25, 'options', tosetting, this);
	option.scale.setTo(0.025, 0.025)



}
function topause() {
	pause.kill();
	game.paused = true;

	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();

	frames = game.add.sprite(150, 60, 'frame')
	frames.scale.setTo(0.5, 0.5);
	ยุติ = game.add.sprite(250, 190, 'ยุติ')
	ยุติ.scale.setTo(0.25, 0.25);
	home = game.add.button(270, 300, 'home', gotomenu, this, 1, 0, 1);
	home.scale.setTo(0.25, 0.25)
	resume = game.add.button(460, 300, 'resume', gotoplay, this, 1, 0, 1);
	resume.scale.setTo(0.25, 0.25)


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
	BG.scale.setTo(0.25, 0.25);

	confirm1 = game.add.sprite(170, 60, 'confirm1');
	confirm1.scale.setTo(0.25, 0.25)

	pressno = game.add.button(225, 360, 'yesconfirm', checkselect2, this, 1, 0, 1);
	pressno.scale.setTo(0.25, 0.25)

	pressback = game.add.button(425, 360, 'noconfirm', tobackselect, this, 1, 0, 1);
	pressback.scale.setTo(0.25, 0.25)

	monkeysaid = game.add.image(-20, 430, 'monkeysaid');
	monkeysaid.scale.setTo(0.220, 0.220);
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
	BG.scale.setTo(0.25, 0.25);


	confirm2 = game.add.sprite(170, 30, 'confirm2');
	confirm2.scale.setTo(0.25, 0.25);

	pressno = game.add.button(225, 380, 'yesconfirm', checkselect, this, 1, 0, 1);
	pressno.scale.setTo(0.25, 0.25);

	pressback = game.add.button(425, 380, 'noconfirm', tobackselect, this, 1, 0, 1);
	pressback.scale.setTo(0.25, 0.25);

	giantsaid = game.add.image(10, 440, 'giantsaid');
	giantsaid.scale.setTo(0.220, 0.220);
	selectmenu = 2;




}

function tobackselect() {

	buttonsound = game.add.audio('buttonsound');
	buttonsound.play();
	if (selectmenu == 1) {
		black.kill();
		pressno.kill();
		BG.kill();
		confirm1.kill();
		pressback.kill();
		monkeysaid.kill();
	} else if (selectmenu == 2) {
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


////////////////////////////////////////////Functiongame////////////////////////////////////////////////


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
				if (obstacleCooldown <= 10) {
					obstacleCooldown = obstacleCooldown + 10;
					obstacleCooldown2 = obstacleCooldown2 + 10;
				}
				if (obstacleCooldown2 <= 10) {
					obstacleCooldown = obstacleCooldown + 10;
					obstacleCooldown2 = obstacleCooldown2 + 10;
				}
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
	game.load.video('Cutscene', 'images/Cutscene.mp4');
	game.load.image('pressskip', 'images/spaceskip.png')

}
function createCutScence() {
	video = game.add.video('Cutscene');

	video.play(false);
	video.addToWorld(850, 530, 1, 1, 0.70, 0.70);
	pressskip = game.add.sprite(230, 550, "pressskip");
	pressskip.alpha = 0;
	pressskip.scale.setTo(0.125, 0.125)
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
	// game.load.spritesheet('monkey', 'images/เจ้าลิง.png',567,740,22);
	game.load.image('monkey', 'images/monkeyhead.png');
	game.load.image('pressgiant', 'images/itemsheild.png')
	game.load.image('pressmonkey', 'images/itemrun.png')
	game.load.image('framecredit', 'images/framecredit.png')
	game.load.image('choose', 'images/หน้าเลือกตัวละคร.png')
	game.load.image('black', 'images/black.png')
	game.load.image('confirm2', 'images/monkeyblue.png');
	game.load.image('confirm1', 'images/ยักษ์ว้อยว้อยยย.png');
	game.load.spritesheet('yesconfirm', 'images/yesconfirm.png', 709, 259, 2);
	game.load.spritesheet('noconfirm', 'images/noconfirm.png', 702, 259, 2);
	game.load.image('monkeysaid', 'images/ลิงฟ้า.png');
	game.load.image('giantsaid', 'images/ยักษ์แดงแดง.png');
	game.load.image('BG', 'images/BG2.png');

	game.load.audio('choose1', 'audio/จะไม่เลือกเรา.mp3');
	game.load.audio('choose2', 'audio/เลือกฝั่งนั้น.mp3');
	game.load.audio('buttonsound', 'audio/กรับ.mp3');

	game.load.image('full-size', 'images/full-size.png')

	game.load.spritesheet('giantbutton', 'images/เลือกฉันดีกว่า.png', 1093, 403, 2);
	game.load.spritesheet('monkeybutton', 'images/เลือกฉันสิ.png', 1057, 394, 2);
}





function createIntro() {
	choose = game.add.sprite(-20, -20, 'choose');
	choose.scale.setTo(0.25, 0.25)

	giant = game.add.button(520, 140, 'giant', tocheckselect, this);
	giant.scale.setTo(0.125, 0.125)
	giantbutton = game.add.button(510, 330, 'giantbutton', tocheckselect, this, 1, 0, 1);
	giantbutton.scale.setTo(0.175, 0.175)




	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	fullsize = game.add.button(0, 0, 'full-size', gofull, this, 1, 0, 1);
	fullsize.scale.setTo(0.175, 0.175)


	// monkey = game.add.button(110, 150, 'monkey', tocheckselect2, this);
	// monkey.scale.setTo(0.25, 0.25)
	// monkey.animations.add('walk');
	// monkey.animations.play('walk', 30 , true);
	monkey = game.add.button(120, 270, 'monkey', tocheckselect2, this);
	monkey.scale.setTo(0.36, 0.36)
	monkeybutton = game.add.button(140, 480, 'monkeybutton', tocheckselect2, this, 1, 0, 1);
	monkeybutton.scale.setTo(0.175, 0.175)



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
	game.load.image('framecredit', 'images/framecredit.png')
	game.load.image('back', 'images/back.png')
	game.load.spritesheet('mute', 'images/mute.png')
	game.load.spritesheet('unmute', 'images/unmute.png')
	game.load.spritesheet('credit', 'images/ปุ่มทีมงาน.png', 471, 165)
	game.load.image('press', 'images/กดปุ่มเว้นวรรค.png')
	game.load.image('worker', 'images/worker.png')
	game.load.audio('buttonsound', 'audio/กรับ.mp3');







}

function createMenu() {
	mute = game.add.button(310, 190, 'mute', tosetmute, this)
	mute.scale.setTo(0.25);
	mute.kill();
	unmute = game.add.button(310, 190, 'unmute', tosetmute, this)
	unmute.scale.setTo(0.25);
	unmute.kill();

	framecredit = game.add.sprite(230, 10, 'framecredit')
	framecredit.scale.setTo(0.27, 0.27);
	worker = game.add.sprite(370, 120, 'worker')
	worker.scale.setTo(0.29, 0.29);
	name1 = game.add.text(340, 200, '1:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	name2 = game.add.text(340, 240, '2:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	name3 = game.add.text(340, 280, '3:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	name4 = game.add.text(340, 320, '4:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	name5 = game.add.text(340, 360, '5:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	name6 = game.add.text(340, 400, '6:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	name7 = game.add.text(340, 440, '7:xxxx xxx:xxxx', { font: "25px Myfont1", fill: "#FFFFFF", align: "center" });
	backs = game.add.button(300, 130, 'back', tosetting, this)
	backs.scale.setTo(0.25, 0.25);
	name1.kill();
	name2.kill();
	name3.kill();
	name4.kill();
	name5.kill();
	name6.kill();
	name7.kill();
	backs.kill();
	framecredit.kill();
	worker.kill();


	menu = this.add.audio('menu');
	menu.play();
	menu.loopFull();


	if (selectmenu == 1) {
		var logo = game.add.sprite(800, 60, "logor");
		var tween = game.add.tween(logo);
		tween.to({ x: 150 }, 3000, 'Linear', true, 0)
		console.log("this")
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
		console.log("that")
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

	option = game.add.button(720, 25, 'options', tosetting, this);
	option.scale.setTo(0.025, 0.025)
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


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
				game.state.start('Howtoplay')
			} else if (htplay == false) {
				game.state.start('GamePlay1');
			}
		} else if (selectmenu == 2) {
			if (htplay == true) {
				game.state.start('Howtoplay')
			} else if (htplay == false) {
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
		howtoplayMonkey.scale.setTo(0.24, 0.24)
	} else if (selectmenu == 2) {
		howtoplayGiant = game.add.sprite(15, 0, 'howtoplayGiant');
		howtoplayGiant.scale.setTo(0.24, 0.24)
	}


	// this.text = game.add.text(25, 70, 'เล่นยังไงน้ะ ?  : ', { font: "60px Myfont1", fill: "#DC143C", align: "center" });
	jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}


function updateHowtoplay() {

	if (jumpButton.isDown) {
		if (selectmenu == 1) {
			game.state.start('GamePlay1');
			htplay = false
		} else if (selectmenu == 2) {
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

	game.load.image('rock', 'images/rock.png')
	game.load.image('arrow', 'images/arrow.png')
	game.load.image('treecut', 'images/treecut.png')
	game.load.image('log', 'images/log.png')
	game.load.image('spirte', 'images/หนามล่าสุดด.png')
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
	this.game.load.image('sstone', 'images/sstone.png')
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

	text3 = game.add.text(300, 400, 'เตรียมพร้อมม...!! ', { font: "60px Myfont1", fill: "#DC143C", align: "center" });
	text3.visible = true;

	hitSound = this.add.audio('hit');

	gamebgm = this.add.audio('gamebgm');

	itemx2 = this.add.audio('itemx2');
	invisibleitem = this.add.audio('invisibleitem');
	sheilditem = this.add.audio('sheilditem');
	menu.stop();
	gamebgm.play();
	gamebgm.loopFull();

	pause = game.add.button(720, 25, 'pause', topause, this);
	pause.scale.setTo(0.25, 0.25)


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
	SpirteGroup = game.add.group();
	SpirteGroup.enableBody = true;
	SpirteGroup.angle = 17;
	SpirteGroup.anchor = 0.5;
	SpirteGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		spirteObj = SpirteGroup.create(700, 300, 'spirte');
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
	game.physics.arcade.collide(SpirteGroup, FloorGroup, chek = true)
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
		game.physics.arcade.overlap(player, SpirteGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
	} else if (SystemOverlab == 2) {
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
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
	SpirteGroup.forEachExists(sped, this, null)
	LogGroup.forEachExists(sped, this, null)
	TreecutGroup.forEachExists(sped, this, null)
	ItemrunGroup.forEachExists(sped, this, null)
	ItemsheildGroup.forEachExists(sped, this, null)
	InvisibleGroup.forEachExists(sped, this, null)

	RockGroup.forEachExists(checkobj, this, null)
	FloorGroup.forEachExists(checkobj, this, null)
	SpirteGroup.forEachExists(checkobj, this, null)
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

	game.load.image('rock', 'images/rock.png')
	game.load.image('arrow', 'images/arrow.png')
	game.load.image('treecut', 'images/treecut.png')
	game.load.image('log', 'images/log.png')
	game.load.image('spirte', 'images/หนามล่าสุดด.png')
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
	this.game.load.image('sstone', 'images/sstone.png')
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

	text3 = game.add.text(300, 400, 'เตรียมพร้อมม...!! ', { font: "60px Myfont1", fill: "#DC143C", align: "center" });
	text3.visible = true;

	hitSound = this.add.audio('hit');

	gamebgm = this.add.audio('gamebgm');

	itemx2 = this.add.audio('itemx2');
	invisibleitem = this.add.audio('invisibleitem');
	sheilditem = this.add.audio('sheilditem');
	menu.stop();
	gamebgm.play();
	gamebgm.loopFull();

	pause = game.add.button(720, 25, 'pause', topause, this);
	pause.scale.setTo(0.25, 0.25)


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
	SpirteGroup = game.add.group();
	SpirteGroup.enableBody = true;
	SpirteGroup.angle = 17;
	SpirteGroup.anchor = 0.5;
	SpirteGroup.physicsBodyType = Phaser.Physics.ARCADE;
	for (var i = 0; i < 16; i++) {
		spirteObj = SpirteGroup.create(700, 300, 'spirte');
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
	game.physics.arcade.collide(SpirteGroup, FloorGroup, chek = true)
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
		game.physics.arcade.overlap(player, SpirteGroup, HitsPlayer, null, this);
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
	} else if (SystemOverlab == 2) {
		game.physics.arcade.overlap(player, Wall3, HitsPlayer, null, this);
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

	warningarrow();

	RockGroup.forEachExists(sped, this, null)
	FloorGroup.forEachExists(sped, this, null)
	SpirteGroup.forEachExists(sped, this, null)
	LogGroup.forEachExists(sped, this, null)
	TreecutGroup.forEachExists(sped, this, null)
	ItemrunGroup.forEachExists(sped, this, null)
	ItemsheildGroup.forEachExists(sped, this, null)
	InvisibleGroup.forEachExists(sped, this, null)

	RockGroup.forEachExists(checkobj, this, null)
	FloorGroup.forEachExists(checkobj, this, null)
	SpirteGroup.forEachExists(checkobj, this, null)
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
	game.load.spritesheet('play', 'images/เริ่มใหม่.png', 475, 206);
	game.load.image('สิ้นชีพ', 'images/สิ้นชีพ.png')
	game.load.image('คะแนน', 'images/คะแนน.png')
	game.load.spritesheet('หน้าหลัก', 'images/หน้าหลัก.png', 638, 180);
	game.load.spritesheet('แบ่งปัน', 'images/แบ่งปัน.png', 463, 187);
	game.load.spritesheet('ลำดับ', 'images/ลำดับ.png', 463, 187);


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
	gameoverframe.scale.setTo(0.30, 0.30)
	คะแนน = game.add.sprite(310, 220, 'คะแนน')
	คะแนน.scale.setTo(0.30, 0.30)
	สิ้นชีพ = game.add.sprite(350, 130, 'สิ้นชีพ')
	สิ้นชีพ.scale.setTo(0.30, 0.30)

	scoretext = game.add.text(510, 220, '' + score, { font: "50px Number", fill: "#FFFFFF", align: "center" });

	play = game.add.button(270, 340, 'play', toGame, this, 1, 0, 1);
	play.scale.setTo(0.25, 0.25)
	หน้าหลัก = game.add.button(450, 350, 'หน้าหลัก', wentmenu, this, 1, 0, 1);
	หน้าหลัก.scale.setTo(0.25, 0.25)
	แบ่งปัน = game.add.button(270, 430, 'แบ่งปัน', tofacebook, this, 1, 0, 1);
	แบ่งปัน.scale.setTo(0.25, 0.25)
	ลำดับ = game.add.button(450, 430, 'ลำดับ', toranking, this, 1, 0, 1);
	ลำดับ.scale.setTo(0.25, 0.25)
	if (score <= 1000) {
		funnytext = game.add.text(350, 270, "กากว่ะ", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	} else {
		funnytext = game.add.text(350, 270, "ยังอ่อนอยู่", { font: "40px Myfont1", fill: "#FFFFFF", align: "center" });
	}

	gamebgm.stop();

}
function updateGameOver() {

}



///////////////////////////////////////////////////////////////End Credit//////////////////////////////////////////////////////////////////////////
function preloadEndcredit() {
	game.load.video('EndCredit', 'images/EndCredit.mp4');
	game.load.image('pressskip', 'images/spaceskip.png')
}
function createEndcredit() {
	video = game.add.video('EndCredit');

	video.play(true);
	video.addToWorld(810, 530, 1, 1, 0.65, 0.65);


	pressskip = game.add.sprite(230, 550, "pressskip");
	pressskip.alpha = 0;
	pressskip.scale.setTo(0.125, 0.125)
	game.add.tween(pressskip).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, false);
	game.time.events.loop(19500, gotoplay, this)
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
function gotoplay() {

	game.state.start('Menu');
	video.stop();




}




