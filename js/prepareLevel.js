// let raycaster = new THREE.Raycaster();

let defaultTimelimit = 20;
let defualtHealth = 100;
let timeLimitDamage = 5;
let speedingDamage = 2;
let collideDamage = 10;

let prepareLevel = function () {

	initPlayer();



}


let initPlayer = function () {

	player = assets['train'].children[0];
	// player.position.set(railBlocks[0].position.x, 1.0, railBlocks[0].position.z);
	// ===============================
	player.position.set(railBlocks[3].position.x, 1.0, railBlocks[3].position.z);
	player.rotateY(-Math.PI / 2);
	//================================
    scene.add(player);
    initPlayerControl();

 //    // player helper
	// const geometry = new THREE.BoxGeometry(0.1, 15, 0.1);
	// const material = new THREE.MeshStandardMaterial( { color: 0xaaeeff } );
	// const helper = new THREE.Mesh( geometry, material );
 //    player.add(helper);

    player.customData = {
    	curPos: {
    		x: player.position.x,
    		y: player.position.y,
    		z: player.position.z,
    		isEffect: false,
    	},
    	prevPos: {
    		x: player.position.x,
    		y: player.position.y,
    		z: player.position.z,
    		isEffect: false
    	},
    	totalDistance: 0,
    	effectDistance: 0,
    };

    // console.log(player.customData);

    player.health = defualtHealth;
    updateHealth(player.health);

    player.timeLimit = defaultTimelimit;
    updateTimeLimit(player.timeLimit);

}


function initPlayerControl () {

    // keyboard
    document.onkeydown = keydown; 
    function keydown(e){ 
      // console.log(e);
      switch (e.key) {
        case 'k':
          accel = 1;
          break;
        case 'a':
          accel = -1;
          break;
        case 's':
          turn = 1;
          break;
        case 'l':
         	turn = -1;
          break;
        default:
          break;
      }
    }

    document.onkeyup = keyup; 
    function keyup (e){ 
      // console.log(e);
      switch (e.key) {
        case 'k':
        case 'a':
          accel = 0;
          break;
        case 's':
        case 'l':
          turn = 0; 
          break;
        default:
          break;
      }
    }

}
