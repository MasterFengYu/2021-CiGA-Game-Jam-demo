
let assets = Object.create(null);

function loadAssets (list, cb) {

	let count = 0;
	for (let c of list) {
		let url = c.url;
		let name = c.name;
		let type = c.type;
		console.log(name);

		if (type === 'model') {

			new THREE.GLTFLoader().load(url, (gltf) => {
				
				console.log('=======');
				// console.log(gltf.scene.children);
				let model = new THREE.Group();
				model.children = gltf.scene.children;
				assets[name] = model;

				// deal with raycaster =================
				// let rc;
				// for (let c of model.children) {
				// 	// console.log(c.type);
				// 	if (c.type === 'Mesh' && c.name === 'raycaster') {
				// 		console.log('fuck');
				// 		// console.log(c);
				// 	}
				// }

				// =====================================


				count++;
				if (count === list.length) {
					console.log('loaded');
					console.log(assets);
					cb();
				}
			});

		} else if (type === 'texture') {

			new THREE.TextureLoader().load(
				url, 
				(texture) => {

					assets[name] = texture;

					count++;
					if (count === list.length) {
						console.log('loaded');
						console.log(assets);
						cb();
					}

				},
				(progress) => {

				},
				(err) => {

				}
			);

		} else if (type === 'sprite') {

			new THREE.TextureLoader().load(
				url, 
				(texture) => {

					assets[name] = texture;

					count++;
					if (count === list.length) {
						console.log('loaded');
						console.log(assets);
						cb();
					}

				},
				(progress) => {

				},
				(err) => {

				}
			);

		} else if (type === 'audio') {

			 new THREE.AudioLoader().load(
			 	url,
			 	(buffer) => {
			 		assets[name] = buffer;

					count++;
					if (count === list.length) {
						console.log('loaded');
						console.log(assets);
						cb();
					}
			 		
			 	}
		 	)

		}


	}

}




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


