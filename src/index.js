import 'three';
import 'three/examples/js/controls/OrbitControls';

import Sun from './stars/Sun';
import Moon from './stars/Moon';
import Earth from './stars/Earth';
import Mars from './stars/Mars';
import Jupiter from './stars/Jupiter';
import Neptune from './stars/Neptune';
import Pluto from './stars/Pluto';
import Mercury from './stars/Mercury';
import Venus from './stars/Venus';
import Saturn from './stars/Saturn';
import Uranus from './stars/Uranus';

// CAMERA
let camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 20000);
let controls = new THREE.OrbitControls(camera);
camera.position.set(100, 40, 0);
controls.update();

// SCENE
let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);

// LIGHT
let light = new THREE.PointLight(0xffffff, 1000, 0, 2);
light.castShadow = true;

var light2	= new THREE.DirectionalLight( 0xcccccc, 1 )
	light2.position.set(5,5,5)
	scene.add( light2 )
	light2.castShadow	= true
	light2.shadowCameraNear	= 0.01
	light2.shadowCameraFar	= 15
	light2.shadowCameraFov	= 45

	light2.shadowCameraLeft	= -1
	light2.shadowCameraRight	=  1
	light2.shadowCameraTop	=  1
	light2.shadowCameraBottom= -1
	// light2.shadowCameraVisible	= true

	light2.shadowBias	= 0.001
	light2.shadowDarkness	= 0.2

	light2.shadowMapWidth	= 1024*2
	light2.shadowMapHeight	= 1024*2

// STARS
let sun = new Sun();
let mercury = new Mercury();
let venus = new Venus();
let earth = new Earth();
let moon = new Moon();
let mars = new Mars();
let jupiter = new Jupiter();
let saturn = new Saturn();
let uranus = new Uranus();
let pluto = new Pluto();
let neptune = new Neptune();

earth.addSatelite(moon);
light.add(sun); // 695,508
scene.add(light);

// scene.add(mercury); // 57,910,000
// scene.add(venus); // 108,200,000
scene.add(earth); // 149,600,000
// scene.add(mars); // 227,900,000
// scene.add(jupiter); // 778,500,000
// scene.add(saturn); // 1,433,000,000
// scene.add(uranus); // 2,871,000,000
// scene.add(pluto); // 4,440,000,000
// scene.add(neptune); // 4,495,000,000

// ANIMATION
let clock = new THREE.Clock();

let animate = function() {
  let delta = clock.getDelta();

	requestAnimationFrame(animate);

  sun.animate(delta);
  // mercury.animate(delta);
  // venus.animate(delta);
  earth.animate(delta);
  moon.animate(delta);
  // mars.animate(delta);
  // jupiter.animate(delta);
  // saturn.animate(delta);
  // uranus.animate(delta);
  // pluto.animate(delta);
  // neptune.animate(delta);

	renderer.render(scene, camera);
};

animate();
