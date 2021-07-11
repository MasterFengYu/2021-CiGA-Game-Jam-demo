let clock = new THREE.Clock();
clock.stop();
let smokeInterval = 0.2;
let smokeTimer = 0;

let render = function () {
	if (!isRunning) {
		return;
	}

	let isOffRoad = true;
	for (let b of railBlocks) {
		let box3 = new THREE.Box3().setFromObject(b);
		let pX = player.position.x;
		let pZ = player.position.z;
		if (
			pX > box3.min.x &&
			pX < box3.max.x &&
			pZ > box3.min.z &&
			pZ < box3.max.z
		) {
			isOffRoad = false;
		}
	}
	// console.log(isOffRoad);
	let offRoadPenalty = isOffRoad ? 0.4 : 1;

	// movement --------------------------------------------
	// let turning = playerConfig.turnSpeed / 60 * turn;
	let turning = playerConfig.turnSpeed / 60 * turn * offRoadPenalty;
	player.rotateY(turning * Math.PI / 180);

	if (accel === 0) {
		let dY = playerConfig.DampingSpeed / 60 * offRoadPenalty;
		if (speed > 0) {
			speed = (speed - dY < 0) ? 0 : speed - dY;
		} else {
			speed = (speed + dY > 0) ? 0 : speed + dY;
		}
	} else {
		let accelFactor = 1;
		if (accel * speed < 0) {
			accelFactor = 3;
		}

		let temp = speed + accel * playerConfig.AccelSpeed / 60 * accelFactor * offRoadPenalty;
		speed = Math.abs(temp) > playerConfig.MaxSpeed ? playerConfig.MaxSpeed * accel : temp;
	}


// move and record =================
	player.customData.prevPos.x = player.customData.curPos.x;
	player.customData.prevPos.y = player.customData.curPos.y;
	player.customData.prevPos.z = player.customData.curPos.z;
	player.customData.prevPos.isEffect = player.customData.curPos.isEffect;

	// move ---------------------
	player.translateZ(speed / 60);
	// play running sound -------
	runningSound.setVolume(speed / playerConfig.MaxSpeed);


	player.customData.curPos.x = player.position.x;
	player.customData.curPos.y = player.position.y;
	player.customData.curPos.z = player.position.z;

	let deltaX = player.customData.curPos.x - player.customData.prevPos.x;
	let deltaZ = player.customData.curPos.z - player.customData.prevPos.z;
	let delta = Math.pow(Math.pow(deltaX, 2) + Math.pow(deltaZ, 2), 0.5);
	player.customData.totalDistance += delta;
	// console.log(player.customData.totalDistance );


	// check for rail =====================
	let raycaster = new THREE.Raycaster(
		new THREE.Vector3(player.position.x, player.position.y + 20, player.position.z),
		new THREE.Vector3(0, -1, 0),
		0,
		100
	);

	let railIntersect = raycaster.intersectObjects( railRaycasters );
	if (railIntersect.length > 0) {
		// console.log(railIntersect[0].object);
		player.customData.curPos.isEffect = true;
	} else {
		player.customData.curPos.isEffect = false;
	}

	if (player.customData.curPos.isEffect && player.customData.prevPos.isEffect) {
		player.customData.effectDistance += delta;
		// console.log(player.customData.effectDistance);
	} else {
		// off road, take damage
		// player.health -= (timeLimitDamage / 60);
	}


	// check for block type ===================
	for (let b of railBlocks) {
		let box3 = new THREE.Box3().setFromObject(b);
		let pX = player.position.x;
		let pZ = player.position.z;
		if (
			pX > box3.min.x &&
			pX < box3.max.x &&
			pZ > box3.min.z &&
			pZ < box3.max.z
		) {
			// console.log(b.blockType);
			if (b.blockType === "checkpoint") {
				// console.log('check');
				console.log();
				if (checkBlockIds.length > 0 && checkBlockIds[0] === b.uuid ) {
					// check checkpoint
					// console.log('check');
					checkBlockIds.shift();

					// update checkpoint light
					// b.checkpointLight.translateY(5);
					b.checkpointLight.material.map = assets['checkpoint_on'];

					// play sound
					checkpointSound.play();
					
					player.timeLimit = defaultTimelimit;
				}

				// check for game success
				if (checkBlockIds.length === 0) {
					isRunning = false;
					showResult(player.customData.totalDistance);
				}
			} 
		}
	}

	// check for blocking blocks ==========
	for (let b of blockingBlocks) {

		let box3 = new THREE.Box3().setFromObject(b);
		let pX = player.position.x;
		let pZ = player.position.z;
		if (
			pX > box3.min.x &&
			pX < box3.max.x &&
			pZ > box3.min.z &&
			pZ < box3.max.z
		) {

			if (b.blockType === "cactus") {
				// console.log('cac');
				player.health -= collideDamage;
				speed *= (-1 * 0.5);
				player.translateZ(speed / 60);

			} else if (b.blockType === "invisible_blocking") {
				player.health -= collideDamage;
				// console.log(speed);
				speed *= (-1 * 0.5);
				player.translateZ(speed / 60);
				crashSound.play();
			} else if (b.blockType === 'water_blocking') {
				speed *= (-1 * 0.5);
				player.translateZ(speed / 60);
			} else if (b.blockType === 'station_blocking') {
				speed *= (-1 * 0.5);
				player.translateZ(speed / 60);
				crashSound.play();
			} else if (b.blockType === 'roadblock') {
				speed *= (-1 * 0.5);
				player.translateZ(speed / 60);
				crashSound.play();
			}

		}
	}



	// update timer ===========================
	let dt = clock.getDelta();
	// console.log(dt);
	if (player.timeLimit - dt > 0) {
		player.timeLimit -= dt;
	} else {
		player.timeLimit = 0;
	}
	updateTimeLimit(player.timeLimit.toFixed(2));

	// time limit reached, take damage
	if (player.timeLimit <= 0) {
		player.health -= (timeLimitDamage / 60);
	}

	// check for speeding ====================
	if (Math.abs(speed) >= playerConfig.MaxSpeed * 0.8) {
		player.health -= (speedingDamage / 60);
	}


	// update health ========================
	updateHealth(player.health.toFixed(0));

	// update health bar ====================
	updateHealthBar(player.health / defualtHealth);

	// check for game end----------------------
	if (player.health <= 0) {
		isRunning = false;
		showResult(player.customData.totalDistance);
	}

	// update camera ==============
	if (playerConfig.CameraFollow) {
		let cX = player.position.x + cameraOffset.x;
		let cY = player.position.y + cameraOffset.y;
		let cZ = player.position.z + cameraOffset.z;
		// console.log(player.position);
		camera.position.set(cX, cY, cZ);
	}


	// update dashboard
	let speedPer = speed / playerConfig.MaxSpeed;
	if (speed > 0) {
		updateSpeedPercentage(speedPer);
	} else {
		updateSpeedPercentage(0);
	}
	

	// update sprites ==========================
	for (let s of particles) {
		s.update(dt);
	}

	smokeTimer += dt;
	if (smokeTimer >= smokeInterval) {
		smokeTimer = 0;
		for (let i = 0; i < 3; i++) {
			new Smoke(
				player.position.x + Math.random() * 2, 
				player.position.y + 5 + Math.random() * 2, 
				player.position.z + Math.random() * 2
			);
		}

		if (speed > 0) {

			for (let i = 0; i < 3; i++) {
				new Dust(
					player.position.x + Math.random() * 2, 
					player.position.y + 0, 
					player.position.z + Math.random() * 2
				);
			}

			for (let i = 0; i < 3; i++) {
				new Dust(
					player.position.x + Math.random() * 2, 
					player.position.y + 0, 
					player.position.z + Math.random() * 2
				);
			}

		}

	}



	renderer.render(scene, camera);


}





let animate = function () {

    requestAnimationFrame(animate);

    render();

}


let introClicked = function () {

	document.getElementById('intro-cover').style.display = 'none';

	// bgmSound.play();

	// runGame();
}

let startClicked = function () {

	introBgmSound.pause();
	bgmSound.play();

	document.getElementById('manual').style.display = 'none';
	runGame();
}

let runGame = function () {
	isRunning = true;
	clock.start();
}

let pauseGame = function () {
	isRunning = false;
	clock.stop();
}