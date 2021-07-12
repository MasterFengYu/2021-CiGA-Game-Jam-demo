
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





let showResultSuccess = function (result) {
	document.getElementById('result-number-success').innerHTML = result.toFixed(0);
	document.getElementById('result-container-success').style.top = '0px';

	$('#result-poster-success').animateRotate(380, {
	  duration: 800,
	  easing: 'easeOutQuint',
	  complete: function () {

	  	setTimeout(function () { $('#bullet-hole-1').show(0, 'linear'); }, 80);
	  	setTimeout(function () { $('#bullet-hole-2').show(0, 'linear'); }, 160);
	  	setTimeout(function () { $('#bullet-hole-3').show(0, 'linear'); }, 240);
	  	setTimeout(function () { $('#bullet-hole-4').show(0, 'linear'); }, 360);
	  	setTimeout(function () { $('#bullet-hole-5').show(0, 'linear'); }, 420);
	  	setTimeout(function () { $('#bullet-hole-6').show(0, 'linear'); }, 700);
	  },
	  step: function () {}
	});

	// crashSound.stop();
	runningSound.stop();

}




let showResultFail = function (result) {
	document.getElementById('result-number-fail').innerHTML = result.toFixed(0);
	document.getElementById('result-container-fail').style.top = '0px';

	$('#result-poster-fail').animateRotate(380, {
	  duration: 800,
	  easing: 'easeOutQuint',
	  complete: function () {
	  	setTimeout(function () { $('#bullet-hole-1').show(0, 'linear'); }, 80);
	  	setTimeout(function () { $('#bullet-hole-2').show(0, 'linear'); }, 160);
	  	setTimeout(function () { $('#bullet-hole-3').show(0, 'linear'); }, 240);
	  	setTimeout(function () { $('#bullet-hole-4').show(0, 'linear'); }, 360);
	  	setTimeout(function () { $('#bullet-hole-5').show(0, 'linear'); }, 420);
	  	setTimeout(function () { $('#bullet-hole-6').show(0, 'linear'); }, 700);
	  },
	  step: function () {}
	});

	// crashSound.stop();
	runningSound.stop();

}



let damageHint = function () {
	$('#take-damage').show().fadeOut(1000);
	// $('#take-damage').hide(1000);
}



$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};


