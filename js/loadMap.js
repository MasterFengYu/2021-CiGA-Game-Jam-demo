
let railRaycasters = [];
let railBlocks = [];
let checkBlockIds = [];

let loadMap = function () {

	prepareModel();
// console.log(generateMap());
	// console.log(generateMap());
	// let list = generateMap();
	let list = mapConfig;

	createGround();

	createRailBlocks(list);
}

let prepareModel = function () {

	let railStraightX = assets['rail_straight_x'].clone();
	assets['SX'] = railStraightX.clone();

	// railStraight.rotateY(Math.PI / 2);
	let railStraightY = assets['rail_straight_y'].clone();
	assets['SY'] = railStraightY.clone();

	let railTurnES = assets['rail_turn_es'].clone();
	assets['TES'] = railTurnES;

	let railTurnNW = assets['rail_turn_wn'].clone();
	assets['TWN'] = railTurnNW;

	// railTurn.rotateY(Math.PI / 2);
	let railTurnEN = assets['rail_turn_en'].clone();
	assets['TEN'] = railTurnEN;

	let railTurnWS = assets['rail_turn_ws'].clone();
	assets['TWS'] = railTurnWS;


	let railTurnENS = assets['rail_turn_ens'].clone();
	assets['ENS'] = railTurnENS;

	let railTurnNWE = assets['rail_turn_nwe'].clone();
	assets['NWE'] = railTurnNWE;

	let railTurnSWE = assets['rail_turn_swe'].clone();
	assets['SWE'] = railTurnSWE;

	let railTurnWNS = assets['rail_turn_wns'].clone();
	assets['WNS'] = railTurnWNS;

}

let createRailBlocks = function (list) {

	for (let i = 0; i < list.length; i++) {
		let b = list[i];
		let block = assets[b.type].clone();
		block.position.set(
			b.gridX * -10,
			1,
			b.gridY * 10
		);
		// console.log(block.children);
		for (let c of block.children) {
			if (c.type === 'Mesh' && c.name === 'raycaster') {
				railRaycasters.push(c);
				c.customData = {
					block: block,
					gridX: b.gridX,
					gridY: b.gridY
				};
			}
		}

		block.blockType = 'normal';

		// add checkpoint light
		if (list[i].isCheckPoint) {

		    const lightGeo = new THREE.PlaneGeometry( 6, 6 );
		    const lightMat = new THREE.MeshBasicMaterial( { 
		      map: assets['checkpoint_off'],
		      side: THREE.DoubleSide,
		      // flipY: false,
		      transparent: true,
		      // opacity: 0.9,
		    } );
		    const lightMesh = new THREE.Mesh( lightGeo, lightMat );


			lightMesh.position.set(3, 3, 3);
			block.add(lightMesh);


			block.checkpointLight = lightMesh;
			// console.log(light);

			block.blockType = 'checkpoint';

			checkBlockIds.push(block.uuid);
		}

		railBlocks.push(block);
		scene.add(block);
	}
	// console.log(railRaycasters);
		
}


let generateMap = function () {


	let radius = 4;
	let blockNumber = 100;



	// let blockList = [];
	let cache = new Set();
	let list = [];
	// cache.add('0-0');
	let gridX = 0;
	let gridY = 0;
	for (let i = 0; i < blockNumber; i++) {
		if (Math.gridX === radius) {
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
			type: 'SY',
			gridX: gridX,
			gridY: gridY,
			isCheckPoint: false
		});
	}


	for (let i = 1; i < list.length - 1; i++) {
		let cur;
		let curB = list[i];
		let prevB = list[i - 1];
		let nextB = list[i + 1];
		if (nextB.gridX === prevB.gridX) {
			curB.type = 'SY';
		} else if (nextB.gridY === prevB.gridY) {
			curB.type = 'SX';
		} else if (prevB.gridX === curB.gridX && nextB.gridX === curB.gridX - 1) {
			curB.type = 'TWS'
		} else if (prevB.gridX === curB.gridX && nextB.gridX === curB.gridX + 1) {
			curB.type = 'TES'
		} else if (nextB.gridX === curB.gridX && prevB.gridX === curB.gridX - 1) {
			curB.type = 'TWN'
		} else if (nextB.gridX === curB.gridX && prevB.gridX === curB.gridX + 1) {
			curB.type = 'TEN'
		}
	}


	list[0] = {
		type: 'SY',
		gridX: 0,
		gridY: 0,
		isCheckPoint: false,
		isStartPoint: true,
		isEndPoint: false
	};

	list[list.length - 1].type = 'SY';
	list[list.length - 1].isEndPoint = true;


	// =========================================================
	// add checkpoint
	let interval = 10;
	for (let i = 0; i < list.length; i++) {
		if (i % interval === 0) {
			list[i].isCheckPoint = true;
		}
	}

	// =========================================================


	return list;

}


let createGround = function () {



	// 30 / 303

	// let scale = 0.1005;
	// let scale = 0.0999;
	let scale = 0.10005;
    const groundGeo = new THREE.PlaneGeometry( 3840 * scale, 6517 * scale );
    const groundMat = new THREE.MeshBasicMaterial( { 
      // map: assets['map_1'],
      map: assets['map'],
      side: THREE.DoubleSide,
      flipY: false
    } );
    const groundMesh = new THREE.Mesh( groundGeo, groundMat );
    groundMesh.receiveShadow = true;
    groundMesh.rotateX( Math.PI / 2 );
    groundMesh.rotateY( Math.PI );
    // groundMesh.position.set(7.5, 1.3, 99);
    groundMesh.position.set(7.5, 1.3, 317);
    scene.add( groundMesh );




}



// 3840 2160


// {
// 	gridX: 0
// 	gridY: 19
// 	isCheckPoint: false
// 	type: "TWN"
// }


/*

let mapConfig = [

	{
		gridX: -3,
		gridY: 0,
		isCheckPoint: true,
		type: "TWN"
	},

	{
		gridX: -3,
		gridY: 1,
		isCheckPoint: false,
		type: "TWN"
	},

	{
		gridX: -3,
		gridY: 2,
		isCheckPoint: false,
		type: "TWN"
	},

];




-2
2

-1
2

0
2

1
2

2
2

3
2

3
3

3
4

4
4

5
4

5
5

5
6

5
7

4
7

3
7

2
7

1
7

0
7

-1
7

-2
7

-3
7

1
6

1
5

1
4

0
5

-1
5

-2
5

-3
5

-4
5

-5
5

-6
5

-6
6

-6
7

-6
8

-6
9

-6
10

-6
11

-6
12

-6
13

-6
14

-6
15

-5
12

-4
12

-3
12

-2
12

-2
13

-2
14

-2
15

-1
15

0
15

1
15

2
15

2
14

2
13

2
12

3
12

4
12

5
12

5
13

5
14

5
15

5
16

5
17

5
18

4
18

3
18

2
18

1
18

0
18

-1
18

-2
18

-3
18

-4
18

-5
18

-6
18

-7
18


*/


