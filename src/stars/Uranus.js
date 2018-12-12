import 'three';
import Star from '../Star';

export default class Uranus extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: -25362, // in kilometers
      rotationPeriode: 62063.712, // in seconds
      orbitalRadius: 2871000000, // in kilometers
      orbitalPeriode: 2651485330.8, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/uranusmap.jpg'),
        bumpMap: textureLoader.load('img/uranusmap.jpg')
      }
    })
  }

}
