

let assets = Object.create(null);

let width;
let height;
let scene;
let camera;
let renderer;
let control;
let player;

let cameraOffset = {
	x: 0,
	y: 80,
	z: -40
};

let gui = new dat.GUI();

let playerConfig = {
  MaxSpeed: 20, 
  AccelSpeed: 5, 
  turnSpeed: 45,
  DampingSpeed: 3,
  CameraFollow: false,
};
gui.add(playerConfig, 'MaxSpeed', 0, 60, 0.5);
gui.add(playerConfig, 'AccelSpeed', 2, 40, 0.1);
gui.add(playerConfig, 'turnSpeed', 1, 90, 0.5);
gui.add(playerConfig, 'DampingSpeed', 1, 30, 0.1);
gui.add(playerConfig, 'CameraFollow');


let speed = 0;
let accel = 0;
let turn = 0;

function init (cb) {

	initScene();

	generateMap();

	prepareLevel();

	animate();

}


function initScene () {

    // basic default ------
    width = window.innerWidth;
    height = window.innerHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
    camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);
console.log(cameraOffset);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xeeeeee, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('three').appendChild(renderer.domElement);


    // aditional default ----------
    let control = new THREE.OrbitControls(camera, renderer.domElement); 

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    directionalLight.castShadow = true;
    directionalLight.position.set(1, 10, -5);
    scene.add( directionalLight );

    const groundGeo = new THREE.PlaneGeometry( 10000, 10000 );
    const groundMat = new THREE.MeshStandardMaterial( {
      color: 0xffa36d, 
      roughness: 1,
      // emissive: 0xffa36d,
      // emissiveIntensity: 0.5,
      side: THREE.DoubleSide,
    } );
    const groundMesh = new THREE.Mesh( groundGeo, groundMat );
    groundMesh.receiveShadow = true;
    groundMesh.rotateX( Math.PI / 2 );
    scene.add( groundMesh );

}


function generateMap () {

	let railblock = assets['railblockStrait'];
	// scene.add(railblock);

	let raiblockTurn = assets['railblockTurn'] 

	// let t = rail.clone();

	// t.position.set(10, 0, 0);
	// scene.add(t);

	// +x = left = -gridX    +z = front = + gridY
	let cache = new Set();
	let list = [];
	cache.add('0-0');
	let gridX = 0;
	let gridY = 0;
	let radius = 3;
	for (let i = 0; i < 1000; i++) {
		if (Math.gridX === 3) {
			gridY += 1;
		} else {
			let options = [2];
			if (!cache.has((gridX + 1) + '-' + gridY) && (Math.abs(gridX + 1) <= radius)) {
				options.push(3);
			}
			if (!cache.has((gridX - 1) + '-' + gridY) && (Math.abs(gridX - 1) <= radius)) {
				options.push(1);
			}
			let p = options[Math.ceil(Math.random() * options.length) - 1];
			if (p === 1) {
				gridX -= 1;
			} else if (p === 2) {
				gridY += 1;
			} else {
				gridX += 1;
			}
		}

		cache.add(gridX + '-' + gridY);
		list.push({
			gridX: gridX,
			gridY: gridY
		});
	}


	for (let i = 1; i < list.length - 1; i++) {
		let cur;
		let curB = list[i];
		let prevB = list[i - 1];
		let nextB = list[i + 1];
		if (nextB.gridX === prevB.gridX) {
			cur = railblock.clone();
			cur.children[0].rotateY(Math.PI / 2);
		} else if (nextB.gridY === prevB.gridY) {
			cur = railblock.clone();
		} else if (nextB.gridX === prevB.gridX + 1 && nextB.gridY === prevB.gridY + 1) {
			cur = raiblockTurn.clone();
			cur.children[0].rotateY(Math.PI / 4);
			cur.children[0].translateX(2);
			cur.children[0].translateZ(2);
			// TODO: turn
		} else if (nextB.gridX === prevB.gridX - 1 && nextB.gridY === prevB.gridY + 1) {
			cur = raiblockTurn.clone();
			cur.children[0].rotateY(Math.PI / 2);
		} 
		// else if () {
			
		// } else if () {
			
		// } else if () {
			
		// }
		// else {
		// 	cur = railblock.clone();

		// }	

		cur.position.set(
			-curB.gridX * 10 ,
			1,
			curB.gridY * 10
		);
		scene.add(cur);
	}


	// start
	let startPoint = railblock.clone();
	startPoint.position.set(
		0,
		1,
		0
	);
	scene.add(startPoint);

	// end
	let endPoint = railblock.clone();
	endPoint.position.set(
		list[0].gridX * -10,
		1,	
		list[0].gridY * 10
	);
	scene.add(endPoint);

}

function prepareLevel () {

	// prepare player
	player = assets['train'];
    scene.add(player);
    initPlayerControl();

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

function render () {

	// console.log(speed);
	// movement
	let turning = playerConfig.turnSpeed / 60 * turn;
	player.rotateY(turning * Math.PI / 180);

	if (accel === 0) {
		let dY = playerConfig.DampingSpeed / 60;
		if (speed > 0) {
			speed = (speed - dY < 0) ? 0 : speed - dY;
		} else {
			speed = (speed + dY > 0) ? 0 : speed + dY;
		}
	} else {

		let temp = speed + accel * playerConfig.AccelSpeed / 60;
		speed = Math.abs(temp) > playerConfig.MaxSpeed ? playerConfig.MaxSpeed * accel : temp;

	}

	player.translateZ(speed / 60);


        // if (player.turn !== 0) {
        //   let isForwarding = player.forward >= 0 ? 1 : -1;
        //   player.rotateZ(player.turn * 3 * Math.PI / 180 * isForwarding);
        // }

        // if (player.forward !== 0) {
        //   player.translateY(player.forward * 0.10);
        // }

/*
  	if (speedY !== 0) {
  		let dY = playerConfig.DampingY / 60;
  		if (speedY > 0) {
  			speedY = (speedY - dY < 0) ? 0 : speedY - dY;
  		} else {
  			speedY = (speedY + dY > 0) ? 0 : speedY + dY;
  		}
  	}
// console.log(speedY);
	speedY += accelY * playerConfig.AccelY / 60;

  	if (speedX !== 0) {
  		let dX = playerConfig.DampingX / 60;
  		if (speedX > 0) {
  			speedX = (speedX - dX < 0) ? 0 : speedX - dX;
  		} else {
  			speedX = (speedX + dX > 0) ? 0 : speedX + dX;
  		}
  	}
// console.log(speedY);
	speedX += accelX * playerConfig.AccelX / 60;



	player.translateZ(speedY / 60);
	player.translateX(speedX / 60);
*/


	// camera

	// console.log(playerConfig.CameraFollow);
	if (playerConfig.CameraFollow) {
		let cX = player.position.x + cameraOffset.x;
		let cY = player.position.y + cameraOffset.y;
		let cZ = player.position.z + cameraOffset.z;
		// console.log(player.position);
		camera.position.set(cX, cY, cZ);
	}


	renderer.render(scene, camera);

}


function animate () {

    requestAnimationFrame(animate);

    render();

}



function loadAssets (list, cb) {

	// mock



	// new THREE.GLTFLoader().load('./spider-with-animation.glb', (gltf) => {
	// 	// console.log(gltf);
	// 	let model = gltf.scene.children[0];
	// 	model.customData = {};
	// 	model.traverse(p => {
	// 		// if (p.isMesh) {
	// 		// 	p.castShadow = true;
	// 		// 	p.receiveShadow = true;
	// 		// }
	// 	});

 //        spider = model;

 //        spider.children[13].material.emissive.r = 0.2;
 //        spider.children[13].material.emissive.g = 0.2;
 //        spider.children[13].material.emissive.b = 0.2;

 //        assets['train'] = model;

 //     	// test
	// 	cb();

	// });

	const geometry = new THREE.BoxGeometry(2, 2, 2);
	const material = new THREE.MeshStandardMaterial( { color: 0xaaeeff } );
	const cube = new THREE.Mesh( geometry, material );
	cube.position.set(0,2,0);
	assets['train'] = cube;
	// scene.add( cube );

		
	const geometry2 = new THREE.BoxGeometry(10, 1, 10);
	const material2 = new THREE.MeshStandardMaterial( { color: 0xeeeeff } );
	const railblock = new THREE.Mesh( geometry2, material2 );
	railblock.position.set(0,1,0);
	let railGeo = new THREE.BoxGeometry(10, 0.5, 4);
	let rail = new THREE.Mesh( railGeo, new THREE.MeshStandardMaterial( { color: 0x999999 } ) );
	rail.position.set(0, 1, 0);
	railblock.add(rail);
	assets['railblockStrait'] = railblock;


	const geometry3 = new THREE.BoxGeometry(10, 1, 10);
	const material3 = new THREE.MeshStandardMaterial( { color: 0xeeeeff } );
	const railblock2 = new THREE.Mesh( geometry3, material3 );
	railblock2.position.set(0,1,0);
	let railGeo2 = new THREE.BoxGeometry(10, 0.5, 4);
	let railTurn = new THREE.Mesh( railGeo, new THREE.MeshStandardMaterial( { color: 0x999999 } ) );
	railTurn.rotation.y = Math.PI / 4;
	railTurn.position.set(0, 1, 0);
	railblock2.add(railTurn);
	assets['railblockTurn'] = railblock2;


 	// done
	cb();
}







// =======================
 
loadAssets(AssetConfig, () => {
	console.log('loaded');
	init();
});





