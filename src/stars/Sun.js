import 'three';
import Star from '../Star';

export default class Sun extends Star {

  constructor() {
    // let radius = 695508;
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: Sun.getRadius(), // in kilometers
      rotationPeriode: 2164320, // in seconds
      material: {
        color: 0xffffff,
        type: 'MeshBasicMaterial',
        map: textureLoader.load('img/sun.jpg')
      }
    })

  }

  animate(delta) {
    this.rotation.y += delta * this.getRotationSpeed() * 10000;
  }

  static getRadius() {
    return 695508 / 2;
  }

}
