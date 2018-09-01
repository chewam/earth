import 'three';

export default class Star extends THREE.Mesh {

  constructor(config) {
    let geometry = new THREE.SphereBufferGeometry(config.radius / 10000, 64, 64);
    let material = new THREE[config.material.type](config.material);

    super(geometry, material);

    this.orbitalRadius = config.orbitalRadius;
    this.orbitalPeriode = config.orbitalPeriode;
    this.rotationPeriode = config.rotationPeriode;

    this.t = 0;
  }

  getRotationPeriode() {
    return this.rotationPeriode;
  }

  getOrbitalRadius() {
    return this.orbitalRadius;
  }

  getOrbitalPeriode() {
    return this.orbitalPeriode;
  }

  getOrbit() {
    return 2 * Math.PI / this.getOrbitalPeriode();
  }

  getRotationSpeed() {
    return 2 * Math.PI / this.getRotationPeriode();
  }

  animate(delta) {
    this.t += delta * this.getOrbit() * 10000;

    this.position.x = Math.cos(this.t) * this.getOrbitalRadius() / 1000000;
    this.position.z = Math.sin(this.t) * this.getOrbitalRadius() / 1000000;

    this.rotation.y += delta * this.getRotationSpeed() * 10000;
  }

}
