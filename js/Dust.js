

class Dust {

	constructor (x, y, z) {

		this.maxLife = 3;

		this.life = 3;


		let mat = new THREE.SpriteMaterial({
			map: assets['dust'],
			color: 0xffffff,
			transparent: true
		});
		let sprite = new THREE.Sprite(mat);
		sprite.position.set(x, y, z);
		// sprite.scale.set(5, 5, 5);
		this.mesh = sprite;
		scene.add(sprite);


		particles.push(this);

	}

	update (dt) {

		this.life -= dt;
		if (this.life <= 0) {
			scene.remove(this.mesh);
			for (let i = 0; i < particles.length; i++) {
				if (particles[i] == this) {
					particles.splice(i, 1);
				}
			}
		}

		// let scale = this.life / this.maxLife * 5;
		let scale = 2 ** (this.maxLife - this.life);
		this.mesh.scale.set(scale, scale, scale);
		this.mesh.position.set(this.mesh.position.x, this.mesh.position.y + dt * 0.1, this.mesh.position.z);
		this.mesh.material.opacity = this.life / this.maxLife;
	}

}

