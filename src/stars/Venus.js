import 'three';
import Star from '../Star';

export default class Venus extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 6051.8, // in kilometers
      rotationPeriode: 20995200, // in seconds
      orbitalRadius: 108200000, // in kilometers
      orbitalPeriode: 18935794.44, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/venusmap.jpg'),
        bumpMap: textureLoader.load('img/venusbump.jpg')
      }
    })
  }

}
