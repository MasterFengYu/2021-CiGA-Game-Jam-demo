
let initUI = function () {
	
	let pointer = document.getElementById('pointer');

	// console.log(pointer);
}


let updateSpeedPercentage = function (per) {
	let div = document.getElementById('pointer');
	let deg = -120 + per * 240;
	// console.log(deg);

	div.style.webkitTransform = 'translateY(24px) translatex(10px) rotate('+ deg +'deg)';
	div.style.mozTransform = 'translateY(24px) translatex(10px) rotate('+ deg +'deg)';
	div.style.msTransform = 'translateY(24px) translatex(10px) rotate('+ deg +'deg)';
	div.style.oTransform = 'translateY(24px) translatex(10px) rotate('+ deg +'deg)';
	div.style.transform = 'translateY(24px) translatex(10px) rotate('+ deg +'deg)';
	// console.log(div.style.transform);
}

let updateTimeLimit = function (time) {
	let div = document.getElementById('timer');
	div.innerHTML = time;
}


let updateHealth = function (health) {
	// let div = document.getElementById('health');
	// div.innerHTML = health;
}

let healthPer = 1;
let healthPerDelta = 0.01;
let updateHealthBar = function (per) {
	let div = document.getElementById('health-bar');
	// div.innerHTML = per;
	// console.log(per);

	if (per !== healthPer) {
		if (healthPer - healthPerDelta < per) {
			healthPer = per;
		} else {
			healthPer -= healthPerDelta;
		}
		if (healthPer > 0) {
			h = healthPer * 100 + '%';
		} else {
			h = 0 + '%';
		}
		$("#health-bar").css('height', h);
	}



}


let showResult = function (result) {
	document.getElementById('result-number').innerHTML = result.toFixed(0);
	document.getElementById('result-container').style.top = '0px';


	// crashSound.stop();
	runningSound.stop();

}

