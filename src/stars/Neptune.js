import 'three';
import Star from '../Star';

export default class Neptune extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 24764, // in kilometers
      rotationPeriode: 58000.32, // in seconds
      orbitalRadius: 4495000000, // in kilometers
      orbitalPeriode: 5203440000, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/neptunemap.jpg')
      }
    })
  }

}
