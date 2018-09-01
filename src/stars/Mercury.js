import 'three';
import Star from '../Star';

export default class Mercury extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 2439.7, // in kilometers
      rotationPeriode: 5067000, // in seconds
      orbitalRadius: 57910000, // in kilometers
      orbitalPeriode: 7600521.7296, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/mercurymap.jpg'),
        bumpMap: textureLoader.load('img/mercurybump.jpg')
      }
    })
  }

}
