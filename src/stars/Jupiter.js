import 'three';
import Star from '../Star';

export default class Jupiter extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 71492, // in kilometers
      rotationPeriode: 857520, // in seconds
      orbitalRadius: 778500000, // in kilometers
      orbitalPeriode: 374335776, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/jupitermap.jpg')
      }
    })
  }

}
