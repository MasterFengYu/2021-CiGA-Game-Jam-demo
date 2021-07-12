
let width;
let height;
let scene;
let camera;
let renderer;
let control;
let player;
let listener;
let isRunning;

let cameraOffset = {
	x: 0,
	y: 120,
	z: -60
};


let playerConfig = {
  MaxSpeed: 20, 
  AccelSpeed: 5, 
  turnSpeed: 45,
  DampingSpeed: 3,
  // CameraFollow: false,
  CameraFollow: true,
};

// let gui = new dat.GUI();
// gui.add(playerConfig, 'MaxSpeed', 0, 60, 0.5);
// gui.add(playerConfig, 'AccelSpeed', 2, 40, 0.1);
// gui.add(playerConfig, 'turnSpeed', 1, 90, 0.5);
// gui.add(playerConfig, 'DampingSpeed', 1, 30, 0.1);
// gui.add(playerConfig, 'CameraFollow');


let speed = 0;
let accel = 0;
let turn = 0;

loadAssets(AssetConfig, () => {

	initUI();

	initScene();

	loadMap();

	loadBlocks();

	prepareLevel();

	$('#loading-cover').fadeOut(300);

	animate();

// *****************************************************
	introBgmSound = new THREE.Audio( listener );
	introBgmSound.setBuffer( assets['intro_bgm'] );
	introBgmSound.setLoop( true );
	introBgmSound.setVolume(1);
	introBgmSound.play();
// *****************************************************

});

