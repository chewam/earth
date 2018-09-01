import 'three';
import Star from '../Star';

export default class Pluto extends Star {

  constructor() {
    let textureLoader = new THREE.TextureLoader();

    super({
      radius: 1188.3, // in kilometers
      rotationPeriode: 551856, // in seconds
      orbitalRadius: 4440000000, // in kilometers
      orbitalPeriode: 7826284800, // in seconds
      material: {
        bumpScale: 0.01,
        type: 'MeshPhongMaterial',
        specular: new THREE.Color('grey'),
        map: textureLoader.load('img/plutomap1k.jpg'),
        bumpMap: textureLoader.load('img/plutobump1k.jpg')
      }
    })
  }

}
