import 'three';
import Star from '../Star';

export default class Earth extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: Earth.getRadius(), // in kilometers
      rotationPeriode: 86164.1, // in seconds
      orbitalRadius: 149600000, // in kilometers
      orbitalPeriode: 31536000, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        // map: textureLoader.load('img/earthmap1k.jpg'),
        map: textureLoader.load('img/earth_3.jpg'),
        bumpMap: textureLoader.load('img/earthbump1k.jpg'),
        specularMap: textureLoader.load('img/earthspec1k.jpg')
      }
    })
  }

  static getRadius() {
    return 6371;
  }

}
