import 'three';
import 'three/examples/js/controls/OrbitControls';

import Sun from './stars/Sun';
import Moon from './stars/Moon';
import Earth from './stars/Earth';
import Mars from './stars/Mars';

// CAMERA
let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 20000);
let controls = new THREE.OrbitControls(camera);
camera.position.set(300, 40, 0);
controls.update();

// SCENE
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// LIGHT
let light = new THREE.PointLight(0xffffff, 2.5, 1000, 2.0);

// STARS
let sun = new Sun();
let earth = new Earth();
let moon = new Moon();
let mars = new Mars();

light.add(sun);
scene.add(light);
scene.add(earth);
// scene.add(moon);
scene.add(mars);

// ANIMATION
let clock = new THREE.Clock();

let animate = function() {
  let delta = clock.getDelta();

	requestAnimationFrame(animate);

  sun.animate(delta);
  earth.animate(delta);
  // moon.animate(delta);
  mars.animate(delta);

	renderer.render(scene, camera);
};

animate();
