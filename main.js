import * as THREE from "./build/three.module.js";

let scene, camera, renderer;

//シーンを追加
scene = new THREE.Scene();

//カメラを追加
camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


//レンダラーを追加
renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement);




renderer.render(scene, camera);
