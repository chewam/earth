import 'three';
import Star from '../Star';
import Earth from './Earth';
import Sun from './Sun';

export default class Moon extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 1737.1, // in kilometers
      rotationPeriode: 2360591.5104, // in seconds
      orbitalRadius: 384402, // in kilometers
      orbitalPeriode: -2360591.5104, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/moonmap1k.jpg'),
        bumpMap: textureLoader.load('img/moonbump1k.jpg')
      }
    })
  }

  getOrbitalRadius() {
    console.log('getOrbitalRadius', this.orbitalRadius, Earth.getRadius());
    // return this.orbitalRadius + Earth.getRadius();
    return this.orbitalRadius + Sun.getRadius() + Earth.getRadius();
  }

  animate(delta) {
    this.t += delta * this.getOrbit() * 100000;

    this.position.x = Math.cos(this.t) * this.getOrbitalRadius() / 1000000;
    this.position.z = Math.sin(this.t) * this.getOrbitalRadius() / 1000000;

    this.rotation.y += delta * this.getRotationSpeed() * 100000;
  }

}
