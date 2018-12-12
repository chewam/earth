import 'three';
import Star from '../Star';

export default class Saturn extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 58232, // in kilometers
      rotationPeriode: 37980, // in seconds
      orbitalRadius: 1433000000, // in kilometers
      orbitalPeriode: 929595378.96, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/saturnmap.jpg'),
        bumpMap: textureLoader.load('img/saturnmap.jpg')
      }
    })
  }

}
