import 'three';
import Star from '../Star';

export default class Moon extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 1737.1, // in kilometers
      rotationTime: 2360591.5104, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/moonmap1k.jpg'),
        bumpMap: textureLoader.load('img/moonbump1k.jpg')
      }
    })

    this.t = 0;

  }

  static getDistanceToEarth() {
    return 384402; // in kilometers
  }

  animate(delta) {
    this.t += delta * this.getRotationSpeed() * 10000;
    this.position.x = Math.cos(this.t) * Moon.getDistanceToEarth() / 1000;
    this.position.z = Math.sin(this.t) * Moon.getDistanceToEarth() / 1000;
    this.rotation.y += delta * this.getRotationSpeed() * 10000;
  }

}
