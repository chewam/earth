import 'three';
import Star from '../Star';

export default class Mars extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 3396.2, // in kilometers
      rotationPeriode: 88775.244, // in seconds
      orbitalRadius: 227900000, // in kilometers
      orbitalPeriode: 59354294.4, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/marsmap1k.jpg'),
        bumpMap: textureLoader.load('img/marsbump1k.jpg')
      }
    })

    this.t = 0;

  }

  animate(delta) {
    this.t += delta * this.getOrbit() * 10000;

    this.position.x = Math.cos(this.t) * this.getOrbitalRadius() / 1000000;
    this.position.z = Math.sin(this.t) * this.getOrbitalRadius() / 1000000;

    this.rotation.y += delta * this.getRotationSpeed() * 10000;
  }

}
