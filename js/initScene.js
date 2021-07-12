let bgmSound;
let checkpointSound;
let buttonSound;
let crashSound;
let runningSound;
let introBgmSound;
let successSound;
let failSound;
let clickSound;

let initScene = function () {
	

    // basic default ------
    width = window.innerWidth;
    height = window.innerHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(20, width / height, 1, 2000);
    camera.position.set(cameraOffset.x, cameraOffset.y, cameraOffset.z);

 //    let oFactor = 18;
	// camera = new THREE.OrthographicCamera( width / - oFactor, width / oFactor, height / oFactor, height / - oFactor, 1, 2000 );
	// camera.position.set(0, 20, -20);


// console.log(cameraOffset);
    renderer = new THREE.WebGLRenderer({

    });
    renderer.setSize(width, height);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor(0xeeeeee, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('three').appendChild(renderer.domElement);


    // aditional default ----------
    let control = new THREE.OrbitControls(camera, renderer.domElement); 
    control.enabled = false;

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight.castShadow = true;
    directionalLight.position.set(1, 10, -5);
    scene.add( directionalLight );

    const groundGeo = new THREE.PlaneGeometry( 10000, 10000 );
    const groundMat = new THREE.MeshStandardMaterial( {
      color: 0xffa36d, 
      // color: new THREE.Color('rgb(229, 182, 136)'), 
      roughness: 1,
      // emissive: 0xffa36d,
      // emissiveIntensity: 0.5,
      side: THREE.DoubleSide,
    } );
    const groundMesh = new THREE.Mesh( groundGeo, groundMat );
    groundMesh.receiveShadow = true;
    groundMesh.rotateX( Math.PI / 2 );
    groundMesh.position.set(0, -50, 0);
    scene.add( groundMesh );


    // init audio

	listener = new THREE.AudioListener();
	camera.add( listener );

	// let sound = new THREE.Audio( listener );

	// sound.setBuffer( assets['bgm'] );
	// sound.setLoop( true );
	// sound.setVolume( 1.5 );
	// sound.play();

 // 	sound = new THREE.Audio( listener );
	// sound.setBuffer( assets['running'] );
	// sound.setLoop( true );
	// sound.setVolume( 0.5 );
	// sound.play();

	bgmSound = new THREE.Audio( listener );
	bgmSound.setBuffer( assets['bgm'] );
	bgmSound.setLoop( true );
	bgmSound.setVolume(1);

	checkpointSound = new THREE.Audio( listener );
	checkpointSound.setBuffer( assets['checkpoint'] );
	checkpointSound.setLoop( false );
	checkpointSound.setVolume(1);

	buttonSound = new THREE.Audio( listener );
	buttonSound.setBuffer( assets['button_click'] );
	buttonSound.setLoop( false );
	buttonSound.setVolume(1);

	crashSound = new THREE.Audio( listener );
	crashSound.setBuffer( assets['crash'] );
	crashSound.setLoop( false );
	crashSound.setVolume(1);

	runningSound = new THREE.Audio( listener );
	runningSound.setBuffer( assets['running'] );
	runningSound.setLoop( true );
	runningSound.setVolume(0);
	runningSound.play();

	// introBgmSound = new THREE.Audio( listener );
	// introBgmSound.setBuffer( assets['intro_bgm'] );
	// introBgmSound.setLoop( true );
	// introBgmSound.setVolume(1);
	// // introBgmSound.play();

	successSound = new THREE.Audio( listener );
	successSound.setBuffer( assets['success'] );
	successSound.setLoop( false );
	successSound.setVolume(1);

	
	failSound = new THREE.Audio( listener );
	failSound.setBuffer( assets['fail'] );
	failSound.setLoop( false );
	failSound.setVolume(1);


	clickSound = new THREE.Audio( listener );
	clickSound.setBuffer( assets['button_click'] );
	clickSound.setLoop( false );
	clickSound.setVolume(1);


	isRunning = false;

}
